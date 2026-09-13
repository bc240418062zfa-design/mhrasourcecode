import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { 
  Grid, Terminal, Pointer, Code2, Smartphone, Cpu, PenTool, Split, Network, 
  Bot, Server, Router, Database, Building, Cloud, Eye, Settings, Wrench, Factory, Brain, List,
  Ruler, Cable, Video, AlertTriangle, HardHat, Headset, Monitor, ArrowDown, 
  ShieldCheck, Users, Search, RefreshCw
} from 'lucide-react';

const serviceNodes = [
  // DIGITAL ENGINEERING
  { id: '1.1', division: 'digital', intents: ['BUILD', 'OPTIMIZE'], name: 'Web Development', desc: 'NextGen reactive micro-frontends, headless architectures, and enterprise portal platforms built for sub-second rendering.', icon: Code2, tags: ['REACT / GO / K8S'] },
  { id: '1.2', division: 'digital', intents: ['BUILD'], name: 'Application Development', desc: 'Native mobile applications, offline-first tactical tools, and enterprise multi-platform software suites with real-time sync.', icon: Smartphone, tags: ['FLUTTER / SWIFT / RUST'] },
  { id: '1.3', division: 'digital', intents: ['BUILD', 'OPTIMIZE'], name: 'Software Engineering', desc: 'Core backend engines, fault-tolerant event streaming, database sharding, and mission-grade algorithmic data structures.', icon: Cpu, tags: ['C++ / RUST / POSTGRES'] },
  { id: '1.4', division: 'digital', intents: ['BUILD'], name: 'UI/UX Engineering', desc: 'High-density cockpit interfaces, industrial telemetry design systems, and hyper-responsive user journeys designed for precision operators.', icon: PenTool, tags: ['DESIGN TOKENS / RADIX'] },
  { id: '1.5', division: 'digital', intents: ['BUILD', 'CONNECT'], name: 'API Development', desc: 'Federated GraphQL meshes, high-throughput gRPC services, and ultra-secure OpenAPI conduits with sub-5ms routing overhead.', icon: Network, tags: ['REST / GRPC / PROTOBUF'] },
  { id: '1.6', division: 'digital', intents: ['CONNECT', 'OPTIMIZE'], name: 'Systems Integration', desc: 'Legacy ERP orchestration, middleware pipelines, and bidirectional enterprise bus architectures that bridge siloed infrastructures.', icon: Split, tags: ['KAFKA / RABBITMQ / CDC'] },

  // AUTOMATION
  { id: '2.1', division: 'automation', intents: ['AUTOMATE'], name: 'Workflow Automation', desc: 'Deterministic logic loops, cross-SaaS ETL orchestration, and self-healing job dispatchers that eliminate manual interventions.', icon: Network, tags: ['10X ACCELERATION'] },
  { id: '2.2', division: 'automation', intents: ['AUTOMATE', 'OPTIMIZE'], name: 'Business Automation', desc: 'Procurement, invoicing, compliance auditing, and fulfillment pipelines governed by tamper-evident validation chains.', icon: Factory, tags: ['ENTERPRISE OPS'] },
  { id: '2.3', division: 'automation', intents: ['AUTOMATE', 'BUILD'], name: 'AI Integration', desc: 'Private sovereign LLM deployments, Retrieval-Augmented Generation (RAG) on proprietary vector stores, and custom fine-tunes.', icon: Brain, tags: ['SOVEREIGN HOSTED'] },
  { id: '2.4', division: 'automation', intents: ['BUILD', 'AUTOMATE'], name: 'Internal Tools', desc: 'Operator control surfaces, bespoke CRUD telemetry boards, and role-governed administrative consoles tailored for field leads.', icon: Terminal, tags: ['RBAC / SSO READY'] },
  { id: '2.5', division: 'automation', intents: ['OPTIMIZE', 'CONNECT'], name: 'Data Processing', desc: 'Distributed Spark/Flink streaming pipelines, sensor telemetry sanitization, and structured lakehouse ingestion platforms.', icon: List, tags: ['GB/SEC REALTIME'] },
  { id: '2.6', division: 'automation', intents: ['AUTOMATE', 'BUILD'], name: 'Custom Automation', desc: 'Hardware-in-the-loop automation, programmable PLC bridge routines, and bespoke software robotics for unique industry demands.', icon: Settings, tags: ['BESPOKE HARDWARE'] },

  // INFRASTRUCTURE
  { id: '3.1', division: 'infra', intents: ['CONNECT'], name: 'Network Engineering', desc: 'BGP routing optimization, SD-WAN overlays, redundant fiber multi-homing, and high-availability enterprise firewall matrices.', icon: Router, tags: ['ZERO-TRUST LAYER 3/7'] },
  { id: '3.2', division: 'infra', intents: ['CONNECT', 'DEPLOY'], name: 'Servers & Storage', desc: 'NVMe-oF SAN/NAS design, Ceph distributed clusters, bare-metal hypervisor orchestration, and automated tape archival tiering.', icon: Database, tags: ['PETABYTE DENSITY'] },
  { id: '3.3', division: 'infra', intents: ['DEPLOY'], name: 'Data Center Services', desc: 'Rack elevation engineering, hot/cold aisle containment, redundant PDU busway distribution, and carrier-grade cross-connects.', icon: Building, tags: ['TIER III & IV RATED'] },
  { id: '3.4', division: 'infra', intents: ['DEPLOY', 'CONNECT'], name: 'Deployment & Cloud', desc: 'Infrastructure as Code (Terraform / Ansible), hybrid AWS/Azure/On-Prem VPC interconnection, and zero-downtime blue/green setups.', icon: Cloud, tags: ['IAC DECLARATIVE'] },
  { id: '3.5', division: 'infra', intents: ['OPTIMIZE', 'SUPPORT'], name: 'Monitoring & Observability', desc: 'Prometheus & Grafana operational stacks, distributed tracing via OpenTelemetry, and predictive hardware anomaly alarms.', icon: Eye, tags: ['REAL-TIME TELEMETRY'] },
  { id: '3.6', division: 'infra', intents: ['SUPPORT', 'OPTIMIZE'], name: 'Maintenance & Hardening', desc: 'Automated kernel patching, CIS benchmark compliance, firmware flashing, and air-gapped immutable backup validation.', icon: ShieldCheck, tags: ['99.999% DRIFT TARGET'] },

  // FIELD
  { id: '4.1', division: 'field', intents: ['DEPLOY'], name: 'Site Surveys', desc: 'RF spectrum mapping, structural load analysis for server cabinets, thermal camera inspection, and power path auditing.', icon: Ruler, tags: ['CAD BLUEPRINTS'] },
  { id: '4.2', division: 'field', intents: ['DEPLOY'], name: 'Hardware Deployment', desc: 'Rack-and-stack delivery, enterprise server assembly, edge computing enclosures, and precision cable grooming to ISO specs.', icon: Server, tags: ['BICSI / ANSI / TIA'] },
  { id: '4.3', division: 'field', intents: ['CONNECT', 'DEPLOY'], name: 'Network Installation', desc: 'Single-mode/multi-mode fiber fusion splicing, Cat6A shielded drops, patch panel certification, and Fluke DTX verification.', icon: Cable, tags: ['FLUKE VERIFIED 10G/40G'] },
  { id: '4.4', division: 'field', intents: ['DEPLOY', 'CONNECT'], name: 'CCTV & Surveillance', desc: 'Enterprise IP surveillance rigs, AI-driven optical perimeter detection, NDAA-compliant hardware, and localized NVR storage vaults.', icon: Video, tags: ['4K / IR / THERMAL'] },
  { id: '4.5', division: 'field', intents: ['SUPPORT', 'DEPLOY'], name: 'Break-Fix Services', desc: 'Rapid dispatch component swapping, failed disk rebuilds, fiber transceiver replacements, and tactical emergency recovery.', icon: AlertTriangle, tags: ['2-4 HOUR RESPONSE'] },
  { id: '4.6', division: 'field', intents: ['SUPPORT'], name: 'On-Site Tech Support', desc: 'Dedicated field engineers stationed directly at plant facilities, operations centers, and industrial facilities across regions.', icon: HardHat, tags: ['24/7/365 ROTATION'] },

  // MANAGED
  { id: '5.1', division: 'managed', intents: ['SUPPORT'], name: 'IT Support', desc: 'Tier-1 through Tier-3 multi-channel incident response, identity provisioning, and automated ticket resolution workflows.', icon: Headset, tags: ['MTTR: < 14 MINUTES'] },
  { id: '5.2', division: 'managed', intents: ['SUPPORT'], name: 'Remote Technical Support', desc: 'Secure remote desktop management, centralized patch orchestration, and endpoint fleet diagnostics across distributed teams.', icon: Monitor, tags: ['WIN / MAC / LINUX'] },
  { id: '5.3', division: 'managed', intents: ['DEPLOY', 'SUPPORT'], name: 'Migration Services', desc: 'Frictionless data center lift-and-shift, legacy software refactoring, and cloud-to-bare-metal repatriation without downtime.', icon: ArrowDown, tags: ['ZERO PACKET LOSS'] },
  { id: '5.4', division: 'managed', intents: ['OPTIMIZE', 'SUPPORT'], name: 'Infra Maintenance', desc: 'Continuous CVE scans, zero-day threat containment, automated configuration rollback, and hardware depreciation forecasting.', icon: ShieldCheck, tags: ['PROACTIVE 24/7'] },
  { id: '5.5', division: 'managed', intents: ['SUPPORT', 'OPTIMIZE'], name: 'Technical Operations', desc: 'Full-stack DevSecOps engineering, release orchestration, incident post-mortems, and site reliability telemetry tracking.', icon: Users, tags: ['GOOGLE SRE MODEL'] }
];

const divisions = [
  { id: 'digital', num: '01', title: 'DIGITAL ENGINEERING', subtitle: 'SYSTEM CODE & ARCHITECTURE', desc: 'High-concurrency systems, mission-critical interfaces, and distributed sovereign cloud architectures.', icon: Terminal },
  { id: 'automation', num: '02', title: 'AUTOMATION & INTELLIGENCE', subtitle: 'COGNITIVE ENGINES & AGENTIC AUTOMATION', desc: 'Deterministic robotic workflows, autonomous LLM agent fabrics, and edge data processing pipelines.', icon: Bot },
  { id: 'infra', num: '03', title: 'INFRASTRUCTURE', subtitle: 'ENTERPRISE COMPUTE, NETWORKS & DC', desc: 'Core multi-region network topologies, hybrid cloud backbones, and zero-trust perimeter implementations.', icon: Server },
  { id: 'field', num: '04', title: 'FIELD ENGINEERING', subtitle: 'ON-SITE TACTICAL INSTALLATION & HARDWARE', desc: 'Boots on the ground. Optical cabling, ruggedized telecom hardware, industrial camera arrays, and rapid physical repair.', icon: Wrench },
  { id: 'managed', num: '05', title: 'MANAGED TECHNOLOGY', subtitle: 'CONTINUOUS RESILIENCE & GLOBAL OPS', desc: '24/7/365 NOC/SOC oversight, turnkey cloud migrations, and SLA-guaranteed infrastructure operations.', icon: Headset },
];

export default function Services() {
  const [activeIntent, setActiveIntent] = useState('ALL');

  const filteredNodes = useMemo(() => {
    if (activeIntent === 'ALL') return serviceNodes;
    return serviceNodes.filter(node => node.intents.includes(activeIntent));
  }, [activeIntent]);

  const isNodeVisible = (nodeId: string) => filteredNodes.some(n => n.id === nodeId);
  const isDivisionVisible = (divisionId: string) => filteredNodes.some(n => n.division === divisionId);

  return (
    <div className="flex flex-col w-full">
      {/* Architectural Coordinate Masthead */}
      <section className="w-full bg-surface-container-lowest py-space-sm px-margin-mobile lg:px-margin">
        <div className="flex flex-wrap items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
          <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-sm text-label-sm tracking-wider uppercase">
            <Link to="/" className="hover:text-secondary text-on-surface-variant transition-colors">Home</Link>
            <span className="text-outline">/</span>
            <span className="text-secondary-container font-semibold tracking-wider">SERVICES DIRECTORY</span>
            <span className="text-outline">::</span>
            <span className="text-outline">SPEC_VER_4.2.0</span>
          </nav>
          <div className="flex items-center gap-space-md">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-ping"></span>REGISTRY ACTIVE</span>
            <span className="hidden md:inline text-outline-variant">|</span>
            <span className="hidden md:inline font-mono text-tertiary">LATENCY: 1.4ms (ISB_CORE_01)</span>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative w-full bg-surface-container-low px-margin-mobile lg:px-margin py-space-xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(var(--color-secondary-container)_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="relative z-10 max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-wrap items-center justify-between gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-highest rounded-DEFAULT text-primary font-label-sm text-label-sm tracking-widest uppercase">
              <Grid size={14} />
              CAPABILITY DIRECTORY &amp; SYSTEMS SPECIFICATION
            </div>
            <div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
              <span>CLASSIFICATION: UNRESTRICTED</span>
              <span className="px-2 py-0.5 bg-primary-container text-on-primary rounded-DEFAULT uppercase font-bold">SOVEREIGN TECH</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
            <div className="lg:col-span-8 space-y-space-md">
              <h1 className="font-headline-xl text-headline-xl font-bold tracking-tight text-on-surface leading-none">
                ENGINEERING FOR THE <br className="hidden sm:inline"/>
                <span className="text-secondary-container drop-shadow-[0_0_24px_var(--color-primary-container)]">ENTIRE TECHNOLOGY</span> <br/>
                LIFECYCLE.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                From cloud architecture and custom software to structured cabling, data center racking, and physical field deployment — explore MIHORA's full engineering scope spanning code, silicon, and physical terrain.
              </p>
            </div>
            <div className="lg:col-span-4 bg-surface-container-lowest p-space-md rounded-DEFAULT space-y-space-sm shadow-lg">
              <div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
                <span>OPERATING STATUS</span>
                <span className="text-secondary font-mono">GLOBAL DISPATCH</span>
              </div>
              <div className="grid grid-cols-2 gap-space-sm font-label-sm text-label-sm">
                <div className="bg-surface-container-high p-space-sm rounded-DEFAULT">
                  <span className="text-outline block">DIVISIONS</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">05</span>
                </div>
                <div className="bg-surface-container-high p-space-sm rounded-DEFAULT">
                  <span className="text-outline block">ACTIVE SPECS</span>
                  <span className="font-headline-sm text-headline-sm text-secondary-container font-bold">29</span>
                </div>
                <div className="bg-surface-container-high p-space-sm rounded-DEFAULT">
                  <span className="text-outline block">SLA COMPLIANCE</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-bold">99.98%</span>
                </div>
                <div className="bg-surface-container-high p-space-sm rounded-DEFAULT">
                  <span className="text-outline block">DEPLOY REGIONS</span>
                  <span className="font-headline-sm text-headline-sm text-primary font-bold">14+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Service Discovery Engine */}
      <section className="w-full bg-surface px-margin-mobile lg:px-margin py-space-xl">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="bg-surface-container-low p-space-lg rounded-DEFAULT shadow-xl space-y-space-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary-container tracking-widest uppercase">
                  <Terminal size={16} />
                  CAPABILITY RESOLUTION ENGINE
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">WHAT DO YOU NEED TO EXECUTE?</h2>
              </div>
              <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>{activeIntent === 'ALL' ? 'SHOWING ALL 29 CAPABILITIES' : `FILTERED: ${filteredNodes.length} SPECIFICATIONS MATCHING [${activeIntent}]`}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-space-xs pt-space-xs">
              {[
                { id: 'ALL', label: '[SHOW ALL]' },
                { id: 'BUILD', label: '[BUILD] Software & UI' },
                { id: 'AUTOMATE', label: '[AUTOMATE] Workflows & AI' },
                { id: 'CONNECT', label: '[CONNECT] Networks & Storage' },
                { id: 'DEPLOY', label: '[DEPLOY] Field & Hardware' },
                { id: 'SUPPORT', label: '[SUPPORT] Managed Ops' },
                { id: 'OPTIMIZE', label: '[OPTIMIZE] Systems Telemetry' },
              ].map(intent => (
                <button 
                  key={intent.id}
                  className={clsx("px-space-md py-space-xs rounded-DEFAULT font-label-md text-label-md uppercase tracking-wider transition-all", 
                    activeIntent === intent.id 
                      ? "bg-primary-container text-on-primary shadow-[0_0_24px_var(--color-primary-container)]" 
                      : "bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest"
                  )}
                  onClick={() => setActiveIntent(intent.id)}
                >
                  {intent.label}
                </button>
              ))}
            </div>

            <div className="bg-surface-container-lowest p-space-sm rounded-DEFAULT flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
              <div className="flex items-center gap-space-xs font-mono">
                <span className="text-secondary-container">&gt;</span>
                <span>{activeIntent === 'ALL' ? 'SYSTEM_QUERY: ALL_DIVISIONS // FULL ARCHITECTURE ACTIVE' : `SYSTEM_QUERY: INTENT_[${activeIntent}] // DISPATCHING RELEVANT PODS`}</span>
              </div>
              <button className="hover:text-secondary-container transition-colors text-outline uppercase font-mono" onClick={() => setActiveIntent('ALL')}>
                RESET_QUERY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Capability Matrix */}
      <section className="w-full bg-surface px-margin-mobile lg:px-margin space-y-space-xl pb-space-xl">
        <div className="max-w-7xl mx-auto space-y-space-xl">
          {divisions.map((div) => {
            if (!isDivisionVisible(div.id)) return null;

            return (
              <article key={div.id} id={div.id} className="bg-surface-container-low p-space-lg rounded-DEFAULT shadow-xl space-y-space-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-lowest p-space-md rounded-DEFAULT">
                  <div className="space-y-1">
                    <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary-container uppercase">
                      <div.icon size={18} />
                      DIVISION // {div.num} · {div.subtitle}
                    </div>
                    <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">{div.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{div.desc}</p>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <Link to="/contact" className="px-space-md py-space-xs bg-surface-container-high hover:bg-secondary-container hover:text-on-secondary font-label-sm text-label-sm text-on-surface uppercase rounded-DEFAULT transition-all font-semibold">
                      EXPLORE DIVISION SPECS →
                    </Link>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
                  {serviceNodes.filter(n => n.division === div.id).map(node => {
                    const visible = activeIntent === 'ALL' || node.intents.includes(activeIntent);
                    return (
                      <div key={node.id} className={clsx("bg-surface-container p-space-md rounded-DEFAULT space-y-space-sm transition-all", visible ? "opacity-100 hover:bg-surface-container-high" : "opacity-25 grayscale")}>
                        <div className="flex justify-between items-start">
                          <span className="font-label-sm text-label-sm text-secondary font-mono">NODE_0{node.id}</span>
                          <node.icon className="text-secondary-container" />
                        </div>
                        <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{node.name}</h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">{node.desc}</p>
                        <div className="pt-space-xs flex items-center justify-between font-label-sm text-label-sm">
                          <span className="text-outline">STACK: {node.tags[0]}</span>
                          {visible && <Link to="/contact" className="text-secondary hover:underline">SYS_SPEC &gt;</Link>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Interactive Unified System Architecture Diagram */}
      <section className="w-full bg-surface-container-low px-margin-mobile lg:px-margin py-space-xl shadow-2xl">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-1">
              <div className="font-label-sm text-label-sm text-secondary-container tracking-widest uppercase flex items-center gap-space-xs">
                <Network size={16} />
                SYSTEMIC ARCHITECTURE INTEGRATION
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">ONE COHESIVE TELEMETRY FABRIC</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">How all 5 MIHORA divisions lock together to create a continuous, unyielding engineering loop from silicon to cloud to physical deployment.</p>
            </div>
            <div className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-lowest p-space-sm rounded-DEFAULT flex items-center gap-space-sm">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
              <span>UNIFIED HIGH-THROUGHPUT BUS</span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-space-md lg:p-space-lg rounded-DEFAULT space-y-space-md relative overflow-hidden">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[760px] relative py-space-md">
                <div className="grid grid-cols-5 gap-space-sm relative z-10 text-center">
                  {[
                    { id: '01', title: 'DIGITAL', cat: 'CODE', desc: 'Frontends, APIs & App Services', tag: 'REST / gRPC' },
                    { id: '02', title: 'AUTOMATION', cat: 'BRAIN', desc: 'AI Pipelines & Event Engines', tag: 'Inference Hub' },
                    { id: '03', title: 'INFRASTRUCTURE', cat: 'CORE', desc: 'Compute, Bare-metal & DC Networks', tag: 'NVMe / BGP Mesh' },
                    { id: '04', title: 'FIELD ENG', cat: 'PHYSICAL', desc: 'Fiber, Enclosures & Hardware Edge', tag: 'Physical Layer 1' },
                    { id: '05', title: 'MANAGED', cat: 'SHIELD', desc: 'Continuous SRE, SOC & Global NOC', tag: '24/7/365 Monitor' },
                  ].map(block => (
                    <div key={block.id} className="bg-surface-container p-space-md rounded-DEFAULT space-y-space-xs shadow-md">
                      <span className="font-label-sm text-label-sm text-secondary font-mono">{block.id} // {block.cat}</span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">{block.title}</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">{block.desc}</p>
                      <div className="pt-space-xs">
                        <span className="px-1.5 py-0.5 bg-surface-container-highest text-secondary-container font-label-sm text-label-sm rounded-DEFAULT">{block.tag}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="my-space-md relative h-10 flex items-center justify-center">
                  <div className="w-full h-1 bg-surface-container-highest rounded-full relative">
                    <div className="absolute inset-y-0 left-1/4 right-1/4 bg-primary-container opacity-60"></div>
                    <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary-container rounded-full ring-4 ring-surface"></div>
                    <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary-container rounded-full ring-4 ring-surface"></div>
                    <div className="absolute left-[50%] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary-container rounded-full ring-4 ring-secondary-container shadow-[0_0_12px_var(--color-secondary-container)]"></div>
                    <div className="absolute left-[70%] top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary-container rounded-full ring-4 ring-surface"></div>
                    <div className="absolute left-[90%] top-1/2 -translate-y-1/2 w-3 h-3 bg-secondary-container rounded-full ring-4 ring-surface"></div>
                  </div>
                </div>

                <div className="bg-surface-container-high p-space-sm rounded-DEFAULT flex flex-col md:flex-row items-center justify-between text-on-surface font-label-sm text-label-sm gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <RefreshCw className="text-secondary-container" size={16} />
                    <span>CENTRALIZED TELEMETRY BUS (PROMETHEUS + OPENTELEMETRY + SOVEREIGN LOG VAULT)</span>
                  </div>
                  <div className="flex items-center gap-space-md font-mono text-secondary">
                    <span>ENCRYPTION: AES-256-GCM</span>
                    <span>PACKET INTEGRITY: 100% VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Delivery Methodology */}
      <section className="w-full bg-surface px-margin-mobile lg:px-margin py-space-xl">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="space-y-1">
            <div className="font-label-sm text-label-sm text-secondary-container tracking-widest uppercase">METHODOLOGY // EXECUTION PROTOCOL</div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">HOW MIHORA DELIVERS</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">A deterministic four-phase protocol engineered to eliminate architectural drift and guarantee uptime from day zero.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {[
              { id: '01', phase: 'SCOPING', title: 'Blueprint Audit', desc: 'On-site surveys, codebase diagnostics, and dependency tree analysis. We map existing bottlenecks before committing capital or lines of code.', out: 'TECHNICAL ARCHITECTURE DOC' },
              { id: '02', phase: 'BUILD', title: 'Modular Assembly', desc: 'Concurrent execution across digital pipelines and physical hardware racks. Continuous automated integration and pre-deployment load tests.', out: 'STAGING VALIDATION' },
              { id: '03', phase: 'DEPLOY', title: 'Active Commissioning', desc: 'Zero-downtime traffic cutover, field fiber splicing verification, real-time stress certification, and immediate telemetry hookup.', out: 'LIVE SYSTEM ROLLOUT' },
              { id: '04', phase: 'OPERATE', title: 'Sovereign Management', desc: 'Continuous SLA guarantees, predictive patch deployment, and global field break-fix readiness monitored from our regional command hubs.', out: '99.98% CONTINUOUS UPTIME' },
            ].map(step => (
              <div key={step.id} className="bg-surface-container-low p-space-lg rounded-DEFAULT space-y-space-sm relative">
                <span className="font-headline-xl text-headline-xl font-bold text-surface-container-highest absolute top-space-sm right-space-md select-none">{step.id}</span>
                <span className="font-label-sm text-label-sm text-secondary font-mono uppercase">PHASE {step.id} // {step.phase}</span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{step.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</p>
                <div className="pt-space-xs font-label-sm text-label-sm text-outline">OUTCOME: {step.out}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin py-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-space-lg items-center">
          <div className="space-y-space-md">
            <div className="font-label-sm text-label-sm text-secondary-container uppercase tracking-widest flex items-center gap-space-xs">
              <Terminal size={16} />
              FIELD &amp; RACK READINESS
            </div>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">HARDWARE TESTED IN THE HARSHEST ENVIRONMENTS.</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              MIHORA engineers don't operate solely behind dual-monitors. We terminate high-density single-mode fiber in remote terrain, mount secure radar and camera assemblies at elevation, and configure clustered enterprise hypervisors inside sovereign server rooms.
            </p>
            <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-label-sm text-label-sm">
              <div className="p-space-sm bg-surface-container-high rounded-DEFAULT">
                <span className="text-secondary font-mono block">CABLE RUNS</span>
                <span className="text-on-surface font-bold font-headline-sm text-headline-sm">250,000+ M</span>
              </div>
              <div className="p-space-sm bg-surface-container-high rounded-DEFAULT">
                <span className="text-secondary font-mono block">DC RACKS MAINTAINED</span>
                <span className="text-on-surface font-bold font-headline-sm text-headline-sm">1,200+</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-DEFAULT overflow-hidden shadow-2xl bg-surface-container">
            <img className="w-full h-80 lg:h-96 object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Server Rack Deployment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOTLNNPkl_k7z3EfQq342vqflSRzq6YAyDkN58v7Pcw6Pbiy3nFDicGOeGKGinhAt3hNC07__ZihRKMgfuozWfsCtPMP2VOhd_8loxRpYsqFG1WpgxE-GI89DftBobphoxzpZO1HGiWzCXvpquKMvVMg3yEYxmQRkM_eUU8DWrjgNSXZMo8CJTSuTmw2KJ3gSwbVL-1Ezln6Zdt8E_-H-l-m5qGQzq0Ofj2NJqe_nZv4tNZw3sz72fiQ"/>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent p-space-md flex items-center justify-between font-label-sm text-label-sm">
              <div className="space-y-0.5">
                <span className="text-on-surface font-semibold uppercase">DC_RACK_DEPLOYMENT // ISB_FACILITY_4</span>
                <span className="text-on-surface-variant block font-mono">SPEC: 48U HOT-AISLE HIGH DENSITY</span>
              </div>
              <span className="px-2 py-1 bg-secondary text-on-secondary-fixed font-bold rounded-DEFAULT">VERIFIED</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-container-high px-margin-mobile lg:px-margin py-space-xl text-on-surface shadow-2xl relative overflow-hidden">
        <div className="max-w-5xl mx-auto space-y-space-md text-center relative z-10">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-lowest rounded-DEFAULT text-secondary-container font-label-sm text-label-sm uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
            DISPATCH YOUR SYSTEM REQUIREMENTS
          </div>
          <h2 className="font-headline-xl text-headline-xl font-bold tracking-tight text-on-surface">
            DISCOVER WHAT WE CAN ENGINEER.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Speak directly with a MIHORA Solutions Architect. We review architectural specs, site schematics, and timeline parameters within 24 hours.
          </p>
          <div className="pt-space-sm flex flex-wrap justify-center items-center gap-space-md">
            <a href="mailto:hr@mihora.tech" className="px-space-xl py-space-md bg-primary-container hover:bg-secondary-container text-on-primary hover:text-on-secondary font-label-md text-label-md uppercase tracking-widest rounded-DEFAULT shadow-[0_0_24px_var(--color-primary-container)] transition-all font-bold">
              DISPATCH SPECS TO HR@MIHORA.TECH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
