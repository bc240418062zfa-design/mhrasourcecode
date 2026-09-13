import { useEffect, useState } from 'react';
import { Palette } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Layout() {
  const location = useLocation();
  const [theme, setTheme] = useState<'desert' | 'cyber'>('desert');

  useEffect(() => {
    // Load theme from localStorage if available
    const savedTheme = localStorage.getItem('mihora-theme');
    if (savedTheme === 'cyber' || savedTheme === 'desert') {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'desert');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'desert' ? 'cyber' : 'desert';
    setTheme(newTheme);
    localStorage.setItem('mihora-theme', newTheme);
    if (newTheme === 'cyber') {
      document.documentElement.removeAttribute('data-theme'); // default root is cyber
    } else {
      document.documentElement.setAttribute('data-theme', 'desert');
    }
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_16px_rgba(0,0,0,0.5)]">
        <div className="w-full px-margin-mobile lg:px-margin">
          <div className="h-20 flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-lg">
              <Link to="/" className="flex items-center gap-space-sm group">
                <div className="flex items-center gap-space-xs">
                  <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface group-hover:text-primary transition-colors">MIHORA</span>
                  <span className="font-label-md text-label-md text-secondary-container font-semibold tracking-widest">.TECH</span>
                </div>
              </Link>
              <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-low rounded-DEFAULT">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">HQ: PAKISTAN | OPS: GLOBAL | STATUS: ONLINE</span>
              </div>
            </div>
            
            <nav className="hidden lg:flex items-center gap-space-lg">
              <Link to="/services" className={clsx("font-label-md text-label-md uppercase tracking-wider transition-colors", location.pathname === '/services' ? 'text-secondary font-semibold' : 'text-on-surface-variant hover:text-on-surface')}>Services</Link>
              <Link to="/solutions" className={clsx("font-label-md text-label-md uppercase tracking-wider transition-colors", location.pathname === '/solutions' ? 'text-secondary font-semibold' : 'text-on-surface-variant hover:text-on-surface')}>Solutions</Link>
              <Link to="/industries" className={clsx("font-label-md text-label-md uppercase tracking-wider transition-colors", location.pathname === '/industries' ? 'text-secondary font-semibold' : 'text-on-surface-variant hover:text-on-surface')}>Industries</Link>
              <Link to="/engineering" className={clsx("font-label-md text-label-md uppercase tracking-wider transition-colors", location.pathname === '/engineering' ? 'text-secondary font-semibold' : 'text-on-surface-variant hover:text-on-surface')}>Engineering</Link>
              <Link to="/company" className={clsx("font-label-md text-label-md uppercase tracking-wider transition-colors", location.pathname === '/company' ? 'text-secondary font-semibold' : 'text-on-surface-variant hover:text-on-surface')}>Company</Link>
              <Link to="/insights" className={clsx("font-label-md text-label-md uppercase tracking-wider transition-colors", location.pathname === '/insights' ? 'text-secondary font-semibold' : 'text-on-surface-variant hover:text-on-surface')}>Insights</Link>
              <Link to="/careers" className={clsx("font-label-md text-label-md uppercase tracking-wider transition-colors", location.pathname === '/careers' ? 'text-secondary font-semibold' : 'text-on-surface-variant hover:text-on-surface')}>Careers</Link>
            </nav>

            <div className="flex items-center gap-space-md">
              <button onClick={toggleTheme} className="flex items-center gap-space-sm px-space-md py-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface rounded-DEFAULT transition-all" type="button" aria-label="Toggle Theme">
                <Palette size={16} />
                <span className="font-label-sm text-label-sm uppercase tracking-wider hidden md:inline">Theme</span>
              </button>
              <button className="hidden sm:flex items-center gap-space-sm px-space-md py-space-xs bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface rounded-DEFAULT transition-all" type="button">
                <span className="font-label-sm text-label-sm uppercase tracking-wider">Search Arch</span>
                <kbd className="px-1.5 py-0.5 bg-surface-container-highest text-on-surface rounded-DEFAULT font-label-sm text-label-sm">⌘K</kbd>
              </button>
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida/AEtjO1W7mTkcjfde58ftTkHapTWnynFj8n5msj0P01I3udcUaFEjxKi4feBE799Sq8XBugOoqod3n0cyWjhPbV_-Me8C3WXAxKeadPxjAZfb_L3Y559tdO5r7CLCVk_fhR-oebyIaSKWWoGY5XN10AqMaNo8qk5OXgGib-UmNd4fips9doACvIWj-hcC48bXpud-QRmD1Uyo9zZk3nua7F--FVlzRmklWMK6wrA8bTZdrqyQgkryWRhtRvqiuSuBcx2yFj3mYLTaXvABsQ" />
            </div>
          </div>
        </div>
      </header>

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
              <p className="font-body-sm text-body-sm text-on-surface-variant">Headquartered in Pakistan. Operating Worldwide. Sovereign Engineering &amp; Industrial Intelligence.</p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-space-md py-space-sm rounded-DEFAULT">
              <div>UTC: <span className="text-secondary font-mono">STABLE</span></div>
              <div>PKT (ISB): <span className="text-secondary font-mono">UTC+5 ACTIVE</span></div>
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
