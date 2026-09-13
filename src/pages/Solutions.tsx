import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { 
  Terminal, PencilRuler, ArrowDown, AlertTriangle, Router, 
  Cpu, Network
} from 'lucide-react';

export default function Solutions() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="flex flex-col w-full">
      {/* Telemetry Sub-ribbon */}
      <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin py-space-sm shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-sm text-label-sm tracking-wider uppercase">
            <Link to="/" className="hover:text-secondary text-on-surface-variant transition-colors">Home</Link>
            <span className="text-outline">/</span>
            <span className="text-secondary font-semibold">Solutions</span>
          </nav>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-ping"></span>
              <span className="text-secondary font-mono">SPEC: SYS-ARCH-V4.2</span>
            </div>
            <span className="hidden sm:inline text-outline-variant">|</span>
            <span className="hidden sm:inline text-tertiary">NODAL CLEARANCE: ENTERPRISE LEVEL-0</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative w-full bg-surface-container-lowest overflow-hidden px-margin-mobile lg:px-margin py-space-xl lg:py-24">
        <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-secondary-container/5 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-8 space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-DEFAULT text-secondary shadow-sm">
                <Terminal size={14} />
                <span className="font-label-sm text-label-sm tracking-widest uppercase">PROBLEM-LED ENGINEERING &amp; TRANSFORMATION</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight leading-none">
                SOLUTIONS DESIGNED AROUND <span className="text-secondary-container">OPERATIONAL REALITY.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                We do not sell boxed packages. We architect tailored digital and physical systems that resolve complex technical bottlenecks for enterprise and growth organizations worldwide.
              </p>
              <div className="pt-space-sm flex flex-wrap items-center gap-space-md">
                <a href="#diagnostic-matrix" className="inline-flex items-center gap-space-xs px-space-lg py-3 bg-primary-container hover:bg-secondary-container text-on-primary hover:text-on-secondary font-label-md text-label-md uppercase tracking-widest rounded-DEFAULT shadow-lg transition-all font-semibold">
                  <PencilRuler size={16} />
                  Diagnostic Matrix
                </a>
                <a href="#pillars" className="inline-flex items-center gap-space-xs px-space-md py-3 bg-surface-container-high hover:bg-surface-container text-on-surface font-label-md text-label-md uppercase tracking-wider rounded-DEFAULT transition-all">
                  <span>View System Pillars [01-06]</span>
                  <ArrowDown size={16} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-surface-container p-space-lg rounded-DEFAULT shadow-xl space-y-space-md relative overflow-hidden">
                <div className="flex items-center justify-between pb-space-sm">
                  <div className="font-label-sm text-label-sm text-secondary font-mono tracking-wider">// TELEMETRY_CORE_ACTIVE</div>
                  <Network className="text-secondary-container" size={20} />
                </div>
                <div className="w-full h-44 bg-surface-container-lowest rounded-DEFAULT p-space-sm flex items-center justify-center relative">
                  <svg className="w-full h-full text-secondary-container/40" fill="none" viewBox="0 0 320 140">
                    <line stroke="currentColor" strokeDasharray="3 3" strokeWidth="1.5" x1="20" x2="100" y1="70" y2="30"></line>
                    <line stroke="currentColor" strokeDasharray="3 3" strokeWidth="1.5" x1="20" x2="100" y1="70" y2="110"></line>
                    <line stroke="currentColor" strokeWidth="2" x1="100" x2="200" y1="30" y2="30"></line>
                    <line stroke="currentColor" strokeWidth="2" x1="100" x2="200" y1="110" y2="110"></line>
                    <line stroke="currentColor" strokeWidth="1.5" x1="200" x2="280" y1="30" y2="70"></line>
                    <line stroke="currentColor" strokeWidth="1.5" x1="200" x2="280" y1="110" y2="70"></line>
                    <line stroke="currentColor" strokeWidth="1" x1="150" x2="150" y1="30" y2="110"></line>
                    <circle className="fill-primary text-primary" cx="20" cy="70" r="4"></circle>
                    <circle className="fill-secondary-container text-secondary-container" cx="100" cy="30" r="5"></circle>
                    <circle className="fill-secondary-container text-secondary-container" cx="100" cy="110" r="5"></circle>
                    <circle className="fill-primary-container text-primary-container" cx="200" cy="30" r="6"></circle>
                    <circle className="fill-primary-container text-primary-container" cx="200" cy="110" r="6"></circle>
                    <circle className="fill-secondary-container animate-pulse" cx="280" cy="70" r="7"></circle>
                    <text fill="#c3c5d8" fontFamily="JetBrains Mono" fontSize="8" x="24" y="85">ENTRY</text>
                    <text fill="#a5e7ff" fontFamily="JetBrains Mono" fontSize="8" x="96" y="20">EDGE_01</text>
                    <text fill="#a5e7ff" fontFamily="JetBrains Mono" fontSize="8" x="96" y="125">EDGE_02</text>
                    <text fill="#bac7dc" fontFamily="JetBrains Mono" fontSize="8" x="180" y="20">FABRIC</text>
                    <text fill="var(--color-secondary-container)" fontFamily="JetBrains Mono" fontSize="8" x="260" y="88">STABLE</text>
                  </svg>
                </div>
                <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-label-sm text-label-sm">
                  <div className="bg-surface-container-low p-2 rounded-DEFAULT">
                    <span className="text-on-surface-variant block">DEPLOYED ORGS</span>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">140+</span>
                  </div>
                  <div className="bg-surface-container-low p-2 rounded-DEFAULT">
                    <span className="text-on-surface-variant block">SYSTEM UPTIME</span>
                    <span className="font-headline-sm text-headline-sm text-secondary-container font-bold">99.98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Diagnostic & Solution Matrix */}
      <section className="w-full bg-surface px-margin-mobile lg:px-margin py-space-xl" id="diagnostic-matrix">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <div className="font-label-sm text-label-sm text-secondary font-mono tracking-widest uppercase">// SYSTEM DIAGNOSTIC TOOL</div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">OPERATIONAL BOTTLENECK MATRIX</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Select your current operational hurdle to map against our engineering pathway.</p>
            </div>
            <div className="flex flex-wrap gap-space-xs">
              {[
                { id: 'all', label: 'All Domains' },
                { id: 'scale', label: 'Legacy Drag' },
                { id: 'infra', label: 'Field Outages' },
                { id: 'custom', label: 'Bespoke Hardware' }
              ].map(filter => (
                <button 
                  key={filter.id}
                  className={clsx("px-space-md py-1.5 font-label-sm text-label-sm uppercase tracking-wider rounded-DEFAULT transition-all", 
                    activeCategory === filter.id 
                      ? "bg-primary-container text-on-primary" 
                      : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                  )}
                  onClick={() => setActiveCategory(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className={clsx("bg-surface-container p-space-lg rounded-DEFAULT shadow-md flex-col justify-between", activeCategory === 'all' || activeCategory === 'scale' ? "flex" : "hidden")}>
              <div className="space-y-space-sm">
                <div className="flex justify-between items-center text-error font-label-sm text-label-sm">
                  <span>CRITICAL BOTTLENECK #01</span>
                  <AlertTriangle size={18} />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Data Silos &amp; Fragmented Manual Workflows</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Teams duplicate data entry across ERPs, spreadsheets, and disconnected legacy software, leading to a 38% operational delay.</p>
              </div>
              <div className="mt-space-md pt-space-md bg-surface-container-low p-space-sm rounded-DEFAULT space-y-1">
                <span className="font-label-sm text-label-sm text-secondary block uppercase">Engineered Resolution:</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">Pillar 02: Business Automation &amp; Orchestration</span>
              </div>
            </div>

            <div className={clsx("bg-surface-container p-space-lg rounded-DEFAULT shadow-md flex-col justify-between", activeCategory === 'all' || activeCategory === 'infra' ? "flex" : "hidden")}>
              <div className="space-y-space-sm">
                <div className="flex justify-between items-center text-error font-label-sm text-label-sm">
                  <span>CRITICAL BOTTLENECK #02</span>
                  <Router size={18} />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Unreliable Multi-Site Edge Connectivity</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Industrial facilities and branch networks experience silent network degradations and uncoordinated third-party hardware failovers.</p>
              </div>
              <div className="mt-space-md pt-space-md bg-surface-container-low p-space-sm rounded-DEFAULT space-y-1">
                <span className="font-label-sm text-label-sm text-secondary block uppercase">Engineered Resolution:</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">Pillar 03 &amp; 04: Infrastructure Deployment + Remote Ops</span>
              </div>
            </div>

            <div className={clsx("bg-surface-container p-space-lg rounded-DEFAULT shadow-md flex-col justify-between", activeCategory === 'all' || activeCategory === 'custom' ? "flex" : "hidden")}>
              <div className="space-y-space-sm">
                <div className="flex justify-between items-center text-error font-label-sm text-label-sm">
                  <span>CRITICAL BOTTLENECK #03</span>
                  <Cpu size={18} />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Off-The-Shelf SaaS Incompatibility</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">Industrial SCADA, specialized PLC sensors, and proprietary protocols cannot interface with standard commercial clouds.</p>
              </div>
              <div className="mt-space-md pt-space-md bg-surface-container-low p-space-sm rounded-DEFAULT space-y-1">
                <span className="font-label-sm text-label-sm text-secondary block uppercase">Engineered Resolution:</span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">Pillar 06: Custom Protocol &amp; Rig Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Architecture Pillars */}
      <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin py-space-xl space-y-24" id="pillars">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl space-y-space-xs mb-space-xl">
            <div className="font-label-sm text-label-sm text-secondary-container font-mono tracking-widest uppercase">// ARCHITECTURAL FOUNDATION</div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">SIX COMPREHENSIVE SOLUTION PILLARS</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Engineered for operational durability. Each system tier enforces strict milestone validation before physical or code handoff.</p>
          </div>

          {/* PILLAR 01: DIGITAL TRANSFORMATION */}
          <div id="digital-transformation" className="scroll-mt-24 bg-surface-container p-space-lg lg:p-space-xl rounded-DEFAULT shadow-lg space-y-space-lg mb-space-xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-space-md">
              <div className="space-y-1">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-mono">
                  <span>SYSTEM PILLAR // 01</span>
                  <span>•</span>
                  <span>CORE MODERNIZATION</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">DIGITAL TRANSFORMATION</h3>
              </div>
              <div className="px-space-md py-1 bg-surface-container-high rounded-DEFAULT text-on-surface font-label-sm text-label-sm">
                STATUS: ACTIVE DEPLOYMENT PIPELINE
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
              We systematically dismantle legacy technical debt. By replacing fragile monolithic codebases with resilient distributed topologies, we empower organizations to sustain exponential throughput without service degradation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm pt-space-xs">
              {[
                { phase: '01', title: 'Current State Assessment', desc: 'Full code audit, bottleneck discovery, schema mapping.' },
                { phase: '02', title: 'Target Architecture', desc: 'Microservices blueprint, API schemas, failover matrices.' },
                { phase: '03', title: 'Phased Implementation', desc: 'Canary deployment runs, shadow testing, data syncing.' },
                { phase: '04', title: 'Operational Transition', desc: 'Zero-downtime cutover and hands-on runbook execution.' },
                { phase: '05', title: 'Continuous Optimization', desc: 'Real-time latency profiling & compute rightsizing.' }
              ].map(step => (
                <div key={step.phase} className="bg-surface-container-low p-space-md rounded-DEFAULT space-y-1">
                  <span className="font-label-sm text-label-sm text-secondary-container font-mono">PHASE {step.phase}</span>
                  <h4 className="font-label-md text-label-md text-on-surface font-bold">{step.title}</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PILLAR 03: INFRASTRUCTURE DEPLOYMENT */}
          <div id="infrastructure-deployment" className="scroll-mt-24 bg-surface-container p-space-lg lg:p-space-xl rounded-DEFAULT shadow-lg space-y-space-lg mb-space-xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-space-md">
              <div className="space-y-1">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-mono">
                  <span>SYSTEM PILLAR // 03</span>
                  <span>•</span>
                  <span>PHYSICAL NETWORKS</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">INFRASTRUCTURE DEPLOYMENT</h3>
              </div>
              <div className="px-space-md py-1 bg-surface-container-high rounded-DEFAULT text-on-surface font-label-sm text-label-sm">
                STATUS: ACTIVE DEPLOYMENT PIPELINE
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
              We design, provision, and install high-performance hardware networks. From air-gapped on-premise servers to ruggedized edge IoT arrays, our field teams ensure physical topology matches logical requirements.
            </p>
          </div>

          {/* PILLAR 04: REMOTE OPERATIONS */}
          <div id="remote-operations" className="scroll-mt-24 bg-surface-container p-space-lg lg:p-space-xl rounded-DEFAULT shadow-lg space-y-space-lg mb-space-xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-space-md">
              <div className="space-y-1">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-mono">
                  <span>SYSTEM PILLAR // 04</span>
                  <span>•</span>
                  <span>EDGE TELEMETRY</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">REMOTE OPERATIONS</h3>
              </div>
              <div className="px-space-md py-1 bg-surface-container-high rounded-DEFAULT text-on-surface font-label-sm text-label-sm">
                STATUS: ACTIVE DEPLOYMENT PIPELINE
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
              Centralized monitoring and distributed control frameworks. We deploy resilient SCADA and NOC telemetry systems allowing operators to manage multi-site physical infrastructure from unified dashboards.
            </p>
          </div>

          {/* PILLAR 05: TECHNICAL OPERATIONS */}
          <div id="technical-operations" className="scroll-mt-24 bg-surface-container p-space-lg lg:p-space-xl rounded-DEFAULT shadow-lg space-y-space-lg mb-space-xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-space-md">
              <div className="space-y-1">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-mono">
                  <span>SYSTEM PILLAR // 05</span>
                  <span>•</span>
                  <span>24/7 SRE &amp; NOC</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">TECHNICAL OPERATIONS</h3>
              </div>
              <div className="px-space-md py-1 bg-surface-container-high rounded-DEFAULT text-on-surface font-label-sm text-label-sm">
                STATUS: ACTIVE DEPLOYMENT PIPELINE
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
              Continuous Site Reliability Engineering. We operate fully-managed NOC/SOC services, ensuring aggressive SLAs, automated incident response, and zero-downtime patching protocols.
            </p>
          </div>

          {/* PILLAR 06: CUSTOM ENGINEERING */}
          <div id="custom-engineering" className="scroll-mt-24 bg-surface-container p-space-lg lg:p-space-xl rounded-DEFAULT shadow-lg space-y-space-lg mb-space-xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-space-md">
              <div className="space-y-1">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-mono">
                  <span>SYSTEM PILLAR // 06</span>
                  <span>•</span>
                  <span>BESPOKE R&amp;D</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">CUSTOM ENGINEERING</h3>
              </div>
              <div className="px-space-md py-1 bg-surface-container-high rounded-DEFAULT text-on-surface font-label-sm text-label-sm">
                STATUS: ACTIVE DEPLOYMENT PIPELINE
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
              For challenges without commercial precedents. Our R&amp;D labs construct bespoke hardware/software bridges, reverse-engineer legacy industrial protocols, and build highly specialized compute rigs.
            </p>
          </div>

          {/* PILLAR 02: BUSINESS AUTOMATION */}
          <div id="business-automation" className="scroll-mt-24 bg-surface-container p-space-lg lg:p-space-xl rounded-DEFAULT shadow-lg space-y-space-lg mb-space-xl">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-space-md">
              <div className="space-y-1">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-mono">
                  <span>SYSTEM PILLAR // 02</span>
                  <span>•</span>
                  <span>AUTONOMOUS ORCHESTRATION</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight">BUSINESS AUTOMATION</h3>
              </div>
              <div className="px-space-md py-1 bg-surface-container-high rounded-DEFAULT text-on-surface font-label-sm text-label-sm">
                DISPATCH ENGINE: V9.1 READY
              </div>
            </div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-4xl">
              Eliminate human bottleneck loops. We construct hardened automation backbones that link legacy databases, external vendor APIs, and internal messaging queues into self-healing workflows.
            </p>
            <div className="bg-surface-container-lowest p-space-md rounded-DEFAULT flex flex-col md:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <Network className="text-secondary-container" size={32} />
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold uppercase">Orchestrated Reliability</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Processes execute with guaranteed idempotency and audit logs.</div>
                </div>
              </div>
              <div className="flex gap-space-sm font-label-sm text-label-sm">
                <span className="px-2 py-1 bg-surface-container-high rounded-DEFAULT text-secondary font-mono">RPA/HEADLESS</span>
                <span className="px-2 py-1 bg-surface-container-high rounded-DEFAULT text-secondary font-mono">KAFKA/NATS</span>
                <span className="px-2 py-1 bg-surface-container-high rounded-DEFAULT text-secondary font-mono">GRAPHQL/REST</span>
              </div>
            </div>
          </div>

          {/* ... Add other pillars similarly. Limiting for file size, but preserving the structure */}

          {/* Interactive Comparison Table */}
          <div className="space-y-space-xs pt-space-xl">
            <div className="font-label-sm text-label-sm text-secondary font-mono tracking-widest uppercase">// ARCHITECTURAL SPECIFICATION MATRIX</div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">PILLAR COMPARISON &amp; RUNTIME METRICS</h2>
          </div>
          <div className="overflow-x-auto bg-surface-container rounded-DEFAULT shadow-lg mt-space-md">
            <table className="w-full text-left font-body-sm text-body-sm border-collapse">
              <thead>
                <tr className="bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider">
                  <th className="p-space-md">Solution Pillar</th>
                  <th className="p-space-md">Deployment Scope</th>
                  <th className="p-space-md">Turnaround Cycle</th>
                  <th className="p-space-md">Telemetry Level</th>
                  <th className="p-space-md">SLA Guarantee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-lowest text-on-surface-variant">
                <tr className="hover:bg-surface-container-high/50 transition-colors">
                  <td className="p-space-md font-semibold text-on-surface flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary-container"></span> Digital Transformation</td>
                  <td className="p-space-md">Enterprise Core &amp; Hybrid Cloud</td>
                  <td className="p-space-md font-mono text-secondary">3 - 9 Months</td>
                  <td className="p-space-md">Full Tracing (APM + Distributed)</td>
                  <td className="p-space-md font-mono text-on-surface">99.95%</td>
                </tr>
                <tr className="hover:bg-surface-container-high/50 transition-colors">
                  <td className="p-space-md font-semibold text-on-surface flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary-container"></span> Business Automation</td>
                  <td className="p-space-md">Cross-System API &amp; Middleware</td>
                  <td className="p-space-md font-mono text-secondary">4 - 12 Weeks</td>
                  <td className="p-space-md">Payload &amp; State Telemetry</td>
                  <td className="p-space-md font-mono text-on-surface">99.99%</td>
                </tr>
                <tr className="hover:bg-surface-container-high/50 transition-colors">
                  <td className="p-space-md font-semibold text-on-surface flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary-container"></span> Infrastructure Deployment</td>
                  <td className="p-space-md">Datacenter, Racks &amp; Structured Cabling</td>
                  <td className="p-space-md font-mono text-secondary">2 - 8 Weeks</td>
                  <td className="p-space-md">Fluke OTDR / Link Loss Telemetry</td>
                  <td className="p-space-md font-mono text-on-surface">99.999%</td>
                </tr>
                <tr className="hover:bg-surface-container-high/50 transition-colors">
                  <td className="p-space-md font-semibold text-on-surface flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary-container"></span> Remote Operations</td>
                  <td className="p-space-md">Multi-Site Edge SCADA &amp; Environmental Probes</td>
                  <td className="p-space-md font-mono text-secondary">3 - 6 Weeks</td>
                  <td className="p-space-md">Real-Time Sensor &amp; Power Ingestion</td>
                  <td className="p-space-md font-mono text-on-surface">99.98%</td>
                </tr>
                <tr className="hover:bg-surface-container-high/50 transition-colors">
                  <td className="p-space-md font-semibold text-on-surface flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary-container"></span> Technical Operations</td>
                  <td className="p-space-md">24/7 Managed NOC &amp; SRE Incident Response</td>
                  <td className="p-space-md font-mono text-secondary">Continuous SLA</td>
                  <td className="p-space-md">Synthetic Probes &amp; P99 Latency Alerts</td>
                  <td className="p-space-md font-mono text-on-surface">99.99%</td>
                </tr>
                <tr className="hover:bg-surface-container-high/50 transition-colors">
                  <td className="p-space-md font-semibold text-on-surface flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary-container"></span> Custom Engineering</td>
                  <td className="p-space-md">Bespoke Hardware Bridges &amp; Specialized Rigs</td>
                  <td className="p-space-md font-mono text-secondary">6 - 16 Weeks</td>
                  <td className="p-space-md">Kernel Tracing &amp; Physical Bench Testing</td>
                  <td className="p-space-md font-mono text-on-surface">Mission Critical</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin py-space-xl">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-surface-container-high to-surface-container p-space-lg lg:p-16 rounded-DEFAULT shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-space-md relative z-10">
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary-container font-mono tracking-widest uppercase">
              <span className="w-2 h-2 bg-secondary-container rounded-full animate-ping"></span>
              <span>INITIATE ARCHITECTURAL CONSULT</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase tracking-tight">
              LET'S ARCHITECT YOUR SOLUTION.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Bring your toughest technical constraints. Our engineering leads will review your bottlenecks, trace dependencies, and produce an executable architecture blueprint within 5 business days.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
              <a href="mailto:hr@mihora.tech" className="inline-flex items-center gap-space-xs px-space-lg py-3.5 bg-primary-container hover:bg-secondary-container text-on-primary hover:text-on-secondary font-label-md text-label-md uppercase tracking-widest rounded-DEFAULT shadow-lg transition-all font-semibold">
                <span>[ DIRECT DISPATCH: HR@MIHORA.TECH ]</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
