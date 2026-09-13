import { useEffect, useState, useMemo } from 'react';
import { Palette, Menu, X, Search, Terminal, ArrowRight, ShieldCheck, Cpu, Building, Briefcase, Sparkles, Sun, Moon, Bot, Zap, CornerDownLeft } from 'lucide-react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { BrandLogo } from './BrandLogo';
import { SEOHead } from './SEOHead';
import { queryAIEngine, type AIResponse } from './AIEngine';

interface SearchItem {
  title: string;
  category: string;
  path: string;
  description: string;
  icon?: string;
}

const SEARCH_CATALOG: SearchItem[] = [
  { title: "Digital Engineering", category: "Services", path: "/services#digital", description: "Architected web, mobile, distributed backend microservices" },
  { title: "Automation & Intelligence", category: "Services", path: "/services#automation", description: "Workflow orchestration, telemetry pipelines, and LLM tool routing" },
  { title: "Physical Infrastructure", category: "Services", path: "/services#infra", description: "Server racks, SAN storage, cabling, enterprise switches" },
  { title: "Field Engineering", category: "Services", path: "/services#field", description: "On-site dispatch, fiber splicing, Fluke verification" },
  { title: "Managed Tech & 24/7 SRE", category: "Services", path: "/services#managed", description: "Persistent observability, latency alerts, proactive break-fix" },
  { title: "Digital Transformation", category: "Solutions", path: "/solutions#digital-transformation", description: "Deconstructing legacy monoliths into distributed architectures" },
  { title: "Business Automation", category: "Solutions", path: "/solutions#business-automation", description: "Autonomous orchestration engines and API bridges" },
  { title: "Infrastructure Deployment", category: "Solutions", path: "/solutions#infrastructure-deployment", description: "Multi-site physical deployments and edge IoT arrays" },
  { title: "Remote Operations", category: "Solutions", path: "/solutions#remote-operations", description: "SCADA and NOC telemetry systems with unified dashboards" },
  { title: "Technical Operations", category: "Solutions", path: "/solutions#technical-operations", description: "Site Reliability Engineering with guaranteed SLAs" },
  { title: "Custom Engineering", category: "Solutions", path: "/solutions#custom-engineering", description: "Bespoke hardware bridges, custom FPGA/compute rigs" },
  { title: "Healthcare Systems", category: "Industries", path: "/industries#healthcare", description: "HIPAA/HL7 telemetry, DICOM imaging, hospital networking" },
  { title: "Education Technology", category: "Industries", path: "/industries#education", description: "High-density campus wireless, student data sovereignty" },
  { title: "Retail & Supply Chain", category: "Industries", path: "/industries#retail", description: "Omnichannel inventory sync, edge POS resilience" },
  { title: "Technology Providers", category: "Industries", path: "/industries#technology", description: "Multi-tenant cloud infrastructure and devops pipelines" },
  { title: "Logistics & Transport", category: "Industries", path: "/industries#logistics", description: "Fleet tracking, automated warehouse dispatch" },
  { title: "9-Layer Architecture Stack", category: "Engineering", path: "/engineering#architecture", description: "Silicon to cloud full-span architectural layers" },
  { title: "Hardware-Software Stack", category: "Engineering", path: "/engineering#hardware-software-stack", description: "Physical structured cabling and command telemetry" },
  { title: "Reliability Telemetry", category: "Engineering", path: "/engineering#reliability-telemetry", description: "Axioms of production and 24/7 observability" },
  { title: "Company Philosophy", category: "Company", path: "/company#philosophy", description: "Engineering principles, executive leadership, global footprint" },
  { title: "Technical Papers", category: "Insights", path: "/insights#technical-papers", description: "Peer-reviewed architectural analysis and whitepapers" },
  { title: "Join Engineering", category: "Careers", path: "/careers#join-engineering", description: "Open roles across systems design, software, and field engineering" },
  { title: "Direct Dispatch & Contact", category: "Contact", path: "/contact", description: "Engage architecture team, request dispatch or schedule consult" },
  { title: "Security & Compliance", category: "Legal", path: "/legal#security", description: "ISO 27001, SOC 2 Type II, and data sovereignty policies" }
];

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'desert' | 'cyber'>('cyber');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchMode, setSearchMode] = useState<'catalog' | 'ai'>('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null);
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [avatarError, setAvatarError] = useState(false);

  useEffect(() => {
    // Load theme from localStorage if available, otherwise default to cyber
    const savedTheme = localStorage.getItem('mihora-theme');
    if (savedTheme === 'desert' || savedTheme === 'cyber') {
      setTheme(savedTheme);
      if (savedTheme === 'desert') {
        document.documentElement.setAttribute('data-theme', 'desert');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    } else {
      // Default to cyber theme when user opens web
      setTheme('cyber');
      document.documentElement.removeAttribute('data-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'cyber' ? 'desert' : 'cyber';
    setTheme(newTheme);
    localStorage.setItem('mihora-theme', newTheme);
    if (newTheme === 'cyber') {
      document.documentElement.removeAttribute('data-theme'); // default root is cyber
    } else {
      document.documentElement.setAttribute('data-theme', 'desert');
    }
  };

  // Keyboard shortcut for search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  // Centralized smooth hash scrolling
  useEffect(() => {
    setMobileMenuOpen(false);
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const filteredSearchResults = useMemo(() => {
    if (!searchQuery.trim()) {
      return SEARCH_CATALOG.slice(0, 8);
    }
    const q = searchQuery.toLowerCase();
    return SEARCH_CATALOG.filter(
      item => item.title.toLowerCase().includes(q) ||
              item.description.toLowerCase().includes(q) ||
              item.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleSelectSearchItem = (path: string) => {
    setSearchOpen(false);
    setSearchQuery('');
    setAiResponse(null);
    navigate(path);
  };

  const handleAskAI = (promptText?: string) => {
    const q = promptText || searchQuery;
    if (!q.trim()) return;
    setIsAiProcessing(true);
    setSearchMode('ai');
    setTimeout(() => {
      const res = queryAIEngine(q);
      setAiResponse(res);
      setIsAiProcessing(false);
    }, 300);
  };

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Solutions', path: '/solutions' },
    { label: 'Industries', path: '/industries' },
    { label: 'Engineering', path: '/engineering' },
    { label: 'Company', path: '/company' },
    { label: 'Insights', path: '/insights' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Route-Aware Dynamic SEO Head */}
      <SEOHead />

      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_16px_rgba(0,0,0,0.5)]">
        <div className="w-full px-margin-mobile lg:px-margin">
          <div className="h-20 flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-lg">
              <Link to="/" className="flex items-center gap-space-sm group" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">MIHORA</span>
                  <span className="font-label-md text-label-md text-secondary-container font-semibold tracking-widest">.TECH</span>
                </div>
              </Link>
            </div>
            
            <nav className="hidden lg:flex items-center gap-space-md xl:gap-space-lg">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    "font-label-md text-label-md uppercase tracking-wider transition-colors",
                    location.pathname === item.path ? 'text-secondary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-space-sm sm:gap-space-md">
              <button 
                onClick={toggleTheme} 
                className="flex items-center gap-space-xs px-2.5 sm:px-space-md py-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface rounded-DEFAULT transition-all cursor-pointer" 
                type="button" 
                aria-label="Toggle Theme"
                title={`Current theme: ${theme}. Click to switch.`}
              >
                <Palette size={16} />
                <span className="font-label-sm text-label-sm uppercase tracking-wider hidden md:inline font-mono text-[11px]">{theme}</span>
              </button>

              <button 
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-space-xs px-2.5 sm:px-space-md py-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface rounded-DEFAULT transition-all cursor-pointer" 
                type="button"
                aria-label="Search Architecture"
              >
                <Search size={16} className="text-secondary" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider hidden sm:inline">Search Arch</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 bg-surface-container-highest text-on-surface rounded-DEFAULT font-mono text-[10px]">⌘K</kbd>
              </button>

              <div className="relative group">
                {!avatarError ? (
                  <img 
                    alt="MIHORA Tech Principal" 
                    className="w-8 h-8 rounded-full object-cover border border-outline/30" 
                    src="https://lh3.googleusercontent.com/aida/AEtjO1W7mTkcjfde58ftTkHapTWnynFj8n5msj0P01I3udcUaFEjxKi4feBE799Sq8XBugOoqod3n0cyWjhPbV_-Me8C3WXAxKeadPxjAZfb_L3Y559tdO5r7CLCVk_fhR-oebyIaSKWWoGY5XN10AqMaNo8qk5OXgGib-UmNd4fips9doACvIWj-hcC48bXpud-QRmD1Uyo9zZk3nua7F--FVlzRmklWMK6wrA8bTZdrqyQgkryWRhtRvqiuSuBcx2yFj3mYLTaXvABsQ" 
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-surface-container-high border border-secondary/40 flex items-center justify-center font-mono text-xs font-bold text-secondary">
                    MH
                  </div>
                )}
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-secondary-container border border-surface-container-lowest"></span>
              </div>

              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden p-2 text-on-surface-variant hover:text-on-surface bg-surface-container-low rounded-DEFAULT transition-colors"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                type="button"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-surface-container bg-surface-container-lowest/98 px-margin-mobile py-space-md shadow-2xl backdrop-blur-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-1 pb-space-sm font-label-md text-label-md uppercase tracking-wider">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "px-space-sm py-2.5 rounded-DEFAULT transition-colors flex items-center justify-between",
                    location.pathname === item.path
                      ? "bg-surface-container text-secondary font-bold"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                  )}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={14} className="opacity-40" />
                </Link>
              ))}
            </div>

            <div className="pt-space-sm border-t border-surface-container flex flex-col sm:flex-row gap-space-xs font-mono text-xs text-on-surface-variant">
              <a
                href="mailto:hr@mihora.tech"
                className="w-full py-2.5 text-center bg-primary-container text-on-primary font-bold rounded-DEFAULT tracking-wider uppercase"
              >
                DISPATCH: HR@MIHORA.TECH
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Command Palette / Search & AI Copilot Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4">
          <div 
            className="w-full max-w-2xl bg-surface-container-low border border-outline/30 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mode Switcher Tabs */}
            <div className="flex items-center justify-between border-b border-outline/20 bg-surface-container-lowest px-4 py-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSearchMode('catalog')}
                  className={clsx(
                    "px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5",
                    searchMode === 'catalog' 
                      ? "bg-surface-container-highest text-secondary font-semibold border border-secondary/30" 
                      : "text-on-surface-variant hover:text-on-surface"
                  )}
                >
                  <Search size={13} />
                  <span>Index ({SEARCH_CATALOG.length})</span>
                </button>
                <button
                  onClick={() => {
                    setSearchMode('ai');
                    if (searchQuery && !aiResponse) {
                      handleAskAI(searchQuery);
                    }
                  }}
                  className={clsx(
                    "px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-1.5",
                    searchMode === 'ai' 
                      ? "bg-secondary/15 text-secondary font-semibold border border-secondary/40 shadow-[0_0_12px_rgba(0,210,255,0.2)]" 
                      : "text-on-surface-variant hover:text-on-surface"
                  )}
                >
                  <Sparkles size={13} className="text-secondary animate-pulse" />
                  <span>AI Copilot</span>
                </button>
              </div>

              <button 
                onClick={() => setSearchOpen(false)}
                className="p-1 text-on-surface-variant hover:text-on-surface font-mono text-xs bg-surface-container-highest px-2 py-0.5 rounded cursor-pointer"
              >
                ESC
              </button>
            </div>

            {/* Input Bar */}
            <div className="flex items-center gap-space-sm px-space-md py-3 bg-surface-container border-b border-outline/20">
              {searchMode === 'ai' ? (
                <Bot size={20} className="text-secondary shrink-0" />
              ) : (
                <Search size={18} className="text-secondary shrink-0" />
              )}
              
              <input
                type="text"
                autoFocus
                placeholder={
                  searchMode === 'ai' 
                    ? "Ask AI Copilot: e.g. 'How does fiber cabling work?', '9-layer stack'..." 
                    : "Search services, solutions, engineering layers, papers..."
                }
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (searchMode === 'ai') {
                      handleAskAI();
                    } else if (filteredSearchResults.length > 0) {
                      handleSelectSearchItem(filteredSearchResults[0].path);
                    }
                  }
                }}
                className="w-full bg-transparent text-on-surface font-body-md placeholder:text-outline focus:outline-none"
              />

              {searchMode === 'ai' ? (
                <button
                  onClick={() => handleAskAI()}
                  disabled={!searchQuery.trim() || isAiProcessing}
                  className="px-3 py-1 bg-secondary text-surface font-mono text-xs font-bold rounded flex items-center gap-1 hover:bg-secondary/90 transition-all disabled:opacity-50 cursor-pointer"
                >
                  <Sparkles size={13} />
                  <span>Synthesize</span>
                </button>
              ) : (
                <button
                  onClick={() => handleAskAI(searchQuery || 'Overview of sovereign architecture')}
                  className="hidden sm:flex items-center gap-1 px-2.5 py-1 bg-surface-container-highest hover:bg-secondary/20 text-secondary font-mono text-[11px] rounded border border-secondary/30 transition-all"
                  title="Ask AI Copilot about this search query"
                >
                  <Sparkles size={12} />
                  <span>Ask AI</span>
                </button>
              )}
            </div>

            {/* Content Area */}
            <div className="overflow-y-auto flex-1 p-space-sm max-h-[60vh]">
              {searchMode === 'catalog' ? (
                /* Catalog List */
                <div className="divide-y divide-surface-container">
                  {filteredSearchResults.length > 0 ? (
                    filteredSearchResults.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectSearchItem(item.path)}
                        className="w-full text-left p-space-sm hover:bg-surface-container rounded-DEFAULT transition-all flex items-start justify-between gap-space-sm group"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                              {item.title}
                            </span>
                            <span className="font-mono text-[10px] px-1.5 py-0.2 bg-surface-container-highest text-secondary-container rounded uppercase">
                              {item.category}
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant">
                            {item.description}
                          </p>
                        </div>
                        <ArrowRight size={16} className="text-outline group-hover:text-secondary group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
                      </button>
                    ))
                  ) : (
                    <div className="p-space-lg text-center font-body-md text-on-surface-variant space-y-3">
                      <div>No matching architecture catalog specifications for "{searchQuery}".</div>
                      <button
                        onClick={() => handleAskAI(searchQuery)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 hover:bg-secondary/30 border border-secondary/40 text-secondary rounded-DEFAULT font-mono text-xs font-bold"
                      >
                        <Sparkles size={14} />
                        <span>Query AI Architecture Engine for "{searchQuery}"</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                /* AI Architecture Copilot View */
                <div className="space-y-4 p-2">
                  {/* Quick Suggestion Chips */}
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-outline mb-2">
                      Suggested Architecture Queries:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "How does physical fiber & cabling work?",
                        "Explain the 9-Layer Architecture Stack",
                        "What are your AI automation pipelines?",
                        "Emergency 24/7 dispatch & SLAs",
                        "Healthcare HIPAA & PACS compliance"
                      ].map((prompt, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSearchQuery(prompt);
                            handleAskAI(prompt);
                          }}
                          className="px-2.5 py-1 bg-surface-container-high hover:bg-surface-container-highest border border-outline/25 hover:border-secondary/50 text-[11px] font-mono text-on-surface-variant hover:text-on-surface rounded transition-all text-left"
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {isAiProcessing && (
                    <div className="p-6 text-center space-y-3 bg-surface-container-lowest/60 rounded-xl border border-secondary/20">
                      <div className="flex items-center justify-center gap-2 text-secondary font-mono text-xs animate-pulse">
                        <Sparkles size={16} className="animate-spin" />
                        <span>SYNTHESIZING SOVEREIGN ARCHITECTURAL KNOWLEDGE...</span>
                      </div>
                      <div className="w-48 h-1 bg-surface-container mx-auto overflow-hidden rounded-full">
                        <div className="w-full h-full bg-secondary animate-[shimmer_1.5s_infinite] -translate-x-full" />
                      </div>
                    </div>
                  )}

                  {!isAiProcessing && aiResponse && (
                    <div className="bg-surface-container-lowest p-4 sm:p-5 rounded-xl border border-secondary/30 shadow-lg space-y-4">
                      {/* Telemetry Output Box */}
                      <div className="px-3 py-1.5 bg-black/50 border border-secondary/30 rounded font-mono text-[11px] text-secondary overflow-x-auto">
                        {aiResponse.telemetryCode}
                      </div>

                      {/* Summary */}
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-mono text-xs uppercase text-secondary font-bold">
                          <Bot size={14} />
                          <span>Architectural Synthesis</span>
                        </div>
                        <p className="font-body-md text-sm text-on-surface leading-relaxed">
                          {aiResponse.summary}
                        </p>
                      </div>

                      {/* Architecture Points */}
                      <div className="space-y-2 pt-2 border-t border-outline/15">
                        <div className="font-mono text-[11px] uppercase tracking-wider text-outline">
                          Key Technical Deductions:
                        </div>
                        <div className="space-y-1.5">
                          {aiResponse.architecturePoints.map((pt, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs font-body-md text-on-surface-variant">
                              <Zap size={13} className="text-secondary mt-0.5 shrink-0" />
                              <span>{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Recommended Navigation Action */}
                      <div className="pt-3 border-t border-outline/15 flex items-center justify-between gap-3">
                        <span className="font-mono text-[11px] text-outline hidden sm:inline">
                          VERIFIED SPECIFICATION
                        </span>
                        <button
                          onClick={() => handleSelectSearchItem(aiResponse.recommendedAction.path)}
                          className="px-4 py-2 bg-secondary text-surface font-mono text-xs font-bold rounded-DEFAULT hover:bg-secondary/90 transition-all flex items-center gap-2 shadow-sm cursor-pointer ml-auto"
                        >
                          <span>{aiResponse.recommendedAction.label}</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Bottom Status Bar */}
            <div className="px-space-md py-2.5 bg-surface-container-lowest border-t border-outline/20 flex items-center justify-between text-[11px] font-mono text-outline">
              <span>PROMPT: ↑↓ TO NAVIGATE • ↵ TO SELECT • ESC TO CLOSE</span>
              <span className="text-secondary font-semibold">MIHORA ARCH_DISCOVERY v2.6 // SEO &amp; AI ACTIVE</span>
            </div>
          </div>
        </div>
      )}

      <main className="w-full pt-20 bg-surface min-h-screen flex-1">
        <Outlet />
      </main>

      <footer className="w-full bg-surface-container-lowest py-space-xl text-on-surface mt-auto">
        <div className="w-full px-margin-mobile lg:px-margin space-y-space-xl">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-space-lg pb-space-lg">
            <div className="space-y-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">MIHORA</span>
                <span className="font-label-md text-label-md text-secondary-container font-semibold tracking-widest">.TECH</span>
              </div>
              <p className="font-label-md text-label-md text-secondary-fixed-dim uppercase tracking-wider">Technology Engineered for the Real World.</p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Operating Dual Engineering Hubs in the UK &amp; Pakistan. Deploying Worldwide. Sovereign Engineering &amp; Industrial Intelligence.</p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-space-md py-space-sm rounded-DEFAULT">
              <div>UK (LON): <span className="text-secondary font-mono">UTC+0 ACTIVE</span></div>
              <div>PK (ISB): <span className="text-secondary font-mono">UTC+5 ACTIVE</span></div>
              <div>DISPATCH: <span className="text-on-surface font-mono">hr@mihora.tech</span></div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-space-lg">
            <div className="space-y-space-sm">
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Services</div>
              <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                <li className="hover:text-on-surface"><Link to="/services#digital">Digital Engineering</Link></li>
                <li className="hover:text-on-surface"><Link to="/services#automation">Automation &amp; Intelligence</Link></li>
                <li className="hover:text-on-surface"><Link to="/services#infra">Infrastructure</Link></li>
                <li className="hover:text-on-surface"><Link to="/services#field">Field Engineering</Link></li>
                <li className="hover:text-on-surface"><Link to="/services#managed">Managed Tech</Link></li>
              </ul>
            </div>
            <div className="space-y-space-sm">
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Solutions</div>
              <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                <li className="hover:text-on-surface"><Link to="/solutions#digital-transformation">Digital Transformation</Link></li>
                <li className="hover:text-on-surface"><Link to="/solutions#business-automation">Business Automation</Link></li>
                <li className="hover:text-on-surface"><Link to="/solutions#infrastructure-deployment">Infrastructure Deployment</Link></li>
                <li className="hover:text-on-surface"><Link to="/solutions#remote-operations">Remote Operations</Link></li>
                <li className="hover:text-on-surface"><Link to="/solutions#technical-operations">Technical Operations</Link></li>
                <li className="hover:text-on-surface"><Link to="/solutions#custom-engineering">Custom Engineering</Link></li>
              </ul>
            </div>
            <div className="space-y-space-sm">
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Industries</div>
              <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                <li className="hover:text-on-surface"><Link to="/industries#healthcare">Healthcare</Link></li>
                <li className="hover:text-on-surface"><Link to="/industries#education">Education</Link></li>
                <li className="hover:text-on-surface"><Link to="/industries#retail">Retail</Link></li>
                <li className="hover:text-on-surface"><Link to="/industries#technology">Technology</Link></li>
                <li className="hover:text-on-surface"><Link to="/industries#logistics">Logistics</Link></li>
                <li className="hover:text-on-surface"><Link to="/industries#hospitality">Hospitality</Link></li>
                <li className="hover:text-on-surface"><Link to="/industries#enterprise">Enterprise</Link></li>
              </ul>
            </div>
            <div className="space-y-space-sm">
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Engineering</div>
              <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                <li className="hover:text-on-surface"><Link to="/engineering#architecture">Architecture</Link></li>
                <li className="hover:text-on-surface"><Link to="/engineering#systems-design">Systems Design</Link></li>
                <li className="hover:text-on-surface"><Link to="/engineering#hardware-software-stack">Hardware-Software Stack</Link></li>
                <li className="hover:text-on-surface"><Link to="/engineering#reliability-telemetry">Reliability Telemetry</Link></li>
              </ul>
            </div>
            <div className="space-y-space-sm">
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Company</div>
              <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                <li className="hover:text-on-surface"><Link to="/company#about">About MIHORA</Link></li>
                <li className="hover:text-on-surface"><Link to="/company#philosophy">Engineering Philosophy</Link></li>
                <li className="hover:text-on-surface"><Link to="/company#global-operating-model">Global Operating Model</Link></li>
                <li className="hover:text-on-surface"><Link to="/contact">Offices &amp; Labs</Link></li>
              </ul>
            </div>
            <div className="space-y-space-sm">
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Insights</div>
              <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                <li className="hover:text-on-surface"><Link to="/insights#technical-papers">Technical Papers</Link></li>
                <li className="hover:text-on-surface"><Link to="/insights#case-studies">Case Studies</Link></li>
                <li className="hover:text-on-surface"><Link to="/insights#industrial-analysis">Industrial Analysis</Link></li>
              </ul>
            </div>
            <div className="space-y-space-sm">
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">Careers</div>
              <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface-variant">
                <li className="hover:text-on-surface"><Link to="/careers#join-engineering">Join Engineering</Link></li>
                <li className="hover:text-on-surface"><a href="mailto:hr@mihora.tech">hr@mihora.tech</a></li>
                <li className="hover:text-on-surface"><Link to="/careers#global-relocation">Global Relocation</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-space-lg flex flex-col md:flex-row justify-between items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
            <div className="flex flex-col md:flex-row items-center gap-space-sm md:gap-space-lg text-center md:text-left"><div className="flex items-center gap-space-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
              <span>© 2025 MIHORA.TECH (PRIVATE) LIMITED. ALL RIGHTS RESERVED.</span></div><div className="text-secondary font-mono tracking-widest uppercase">FOUNDED BY M.MATTI UL HASNAIN</div>
            </div>
            <div className="flex items-center gap-space-lg">
              <Link to="/legal#privacy" className="hover:text-on-surface transition-colors">Privacy Policy</Link>
              <Link to="/legal#terms" className="hover:text-on-surface transition-colors">Terms of Service</Link>
              <Link to="/legal#cookie" className="hover:text-on-surface transition-colors">Cookie Policy</Link>
              <Link to="/legal#security" className="hover:text-on-surface transition-colors">Security Protocols</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
