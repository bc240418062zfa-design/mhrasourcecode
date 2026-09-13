import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { 
  ArrowRight, Cpu, Terminal, Pointer, ShieldCheck, Gauge, 
  Network, Globe, Shield, Router, RefreshCw, Grid, Smartphone,
  PenTool, Split, Bot, Factory, Brain, List, Server, Database, 
  Building, Cloud, Eye, Settings, Wrench, Ruler, Cable, Video, 
  AlertTriangle, HardHat, Headset, Monitor, ArrowDown, Users, 
  PencilRuler, Hospital, Store, GraduationCap, Mail, Zap, ArrowUpRight,
  Activity, RefreshCcw
} from 'lucide-react';

const nodeData: Record<string, any> = {
  HQ: {
    code: "// SOVEREIGN HUB: PK-ISB-01",
    title: "Pakistan Central Engineering HQ",
    desc: "Core architectural authority, systems telemetry operations center, R&D laboratories, and global dispatch coordinators.",
    lat: "33.6844° N",
    lon: "73.0479° E"
  },
  LON: {
    code: "// GATEWAY: EMEA-UK-LON",
    title: "London Engineering Satellite",
    desc: "European enterprise client bridge, regulatory compliance alignment, and regional technical program delivery.",
    lat: "51.5074° N",
    lon: "0.1278° W"
  },
  DXB: {
    code: "// TRANSIT: GCC-UAE-DXB",
    title: "Dubai Operations Corridors",
    desc: "Middle Eastern infrastructure deployments, surveillance logistics, and low-voltage field contractor dispatch.",
    lat: "25.2048° N",
    lon: "55.2708° E"
  },
  SIN: {
    code: "// TRANSIT: APAC-SG-SIN",
    title: "Singapore Cloud Bridge",
    desc: "Asia-Pacific optical peering node, edge CDN acceleration, and high-frequency real-time routing monitoring.",
    lat: "1.3521° N",
    lon: "103.8198° E"
  },
  NYC: {
    code: "// GATEWAY: NA-USA-NYC",
    title: "New York Systems Terminal",
    desc: "North American financial technology integrations, institutional database synchronizations, and SLA coordination.",
    lat: "40.7128° N",
    lon: "74.0060° W"
  },
  SFO: {
    code: "// SATELLITE: NA-USA-SFO",
    title: "San Francisco Software Mesh",
    desc: "Developer platform APIs, micro-service mesh testing, and sovereign cloud architecture partnerships.",
    lat: "37.7749° N",
    lon: "122.4194° W"
  },
  TYO: {
    code: "// SATELLITE: APAC-JP-TYO",
    title: "Tokyo Edge Gateway",
    desc: "Hardware telemetry analysis, automated vision pipelines, and industrial robotics integration monitoring.",
    lat: "35.6762° N",
    lon: "139.6503° E"
  },
  SYD: {
    code: "// SATELLITE: ANZ-AUS-SYD",
    title: "Sydney Pacific Relays",
    desc: "Southern hemisphere data redundancy, field break-fix escalation monitoring, and enterprise WAN links.",
    lat: "33.8688° S",
    lon: "151.2093° E"
  },
  NBO: {
    code: "// SATELLITE: AF-KEN-NBO",
    title: "Nairobi Regional Gateway",
    desc: "East African logistics connectivity, cellular backhaul telemetry, and rapid on-site technician units.",
    lat: "1.2921° S",
    lon: "36.8219° E"
  }
};

const services = [
  {
    tag: "DISCIPLINE: DE-01",
    sub: "SOVEREIGN SOFTWARE ENGINEERING",
    headline: "Full-Lifecycle Digital Engineering",
    body: "We design, construct, and harden sovereign software platforms, cloud architectures, mobile native ecosystems, and micro-API mesh environments that resist failure under extreme concurrent scale.",
    sub1: "Custom enterprise web, SaaS, & native systems",
    sub2: "Event-driven, distributed message queues, zero-trust",
    sub3: "Heterogeneous system orchestration and legacy bridge",
    sub4: "Continuous CI/CD, fuzz testing, static security analysis",
    bar1: "94%",
    bar2: "100%"
  },
  {
    tag: "DISCIPLINE: AI-02",
    sub: "AUTONOMOUS INDUSTRIAL INTELLIGENCE",
    headline: "Automation & Predictive Intelligence",
    body: "Empowering manual industrial systems with automated workflows, real-time OCR telemetry, automated QA inspection gates, and localized algorithmic models running directly at the edge.",
    sub1: "Robotic process automation & edge vision triggers",
    sub2: "Document parsing, OCR, and classification meshes",
    sub3: "Automated alert resolution & algorithmic dispatch",
    sub4: "Air-gapped on-premise model execution environments",
    bar1: "98%",
    bar2: "89%"
  },
  {
    tag: "DISCIPLINE: IN-03",
    sub: "MISSION-CRITICAL HARDWARE MATRICES",
    headline: "Infrastructure & Server Deployment",
    body: "Physical rack architectures, fiber optic distribution backbones, enterprise storage clusters, and high-availability power redundancies engineered for continuous operation.",
    sub1: "Data center server racks, PDUs, and containment",
    sub2: "Structured Cat6A and single-mode optical fiber trunking",
    sub3: "Cisco, Arista, and Juniper enterprise switches",
    sub4: "Uninterruptible power supply (UPS) failover grids",
    bar1: "100%",
    bar2: "99.9%"
  },
  {
    tag: "DISCIPLINE: FE-04",
    sub: "HANDS-ON PHYSICAL RIGS",
    headline: "Tactical Field Engineering Rigs",
    body: "Physical presence when software alone cannot resolve the issue. Certified field technicians on-site for emergency break-fix, equipment termination, surveillance mounting, and physical validation.",
    sub1: "On-site 4-hour SLA emergency break-fix response",
    sub2: "Enterprise CCTV, NVR, and biometric access deployment",
    sub3: "Subterranean and aerial cabling installation",
    sub4: "RF spectrum sweeps & wireless site surveys",
    bar1: "91%",
    bar2: "95%"
  },
  {
    tag: "DISCIPLINE: MT-05",
    sub: "CONTINUOUS TELEMETRY OPS",
    headline: "Sovereign Managed Technology & NOC",
    body: "Around-the-clock systems monitoring from our central Pakistani NOC, tracking packet latencies, server thermals, database health, and cyber perimeter anomalies in real-time.",
    sub1: "24/7/365 Network Operations Center (NOC) oversight",
    sub2: "Automated patch orchestration & vulnerability mitigation",
    sub3: "Remote desktop & hardware asset lifecycle management",
    sub4: "Disaster recovery replication & encrypted hot spares",
    bar1: "99.99%",
    bar2: "96%"
  }
];

export default function Home() {
  const [activeNodeId, setActiveNodeId] = useState('HQ');
  const activeNode = nodeData[activeNodeId];
  
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const activeService = services[activeServiceIdx];

  const [expandedStack, setExpandedStack] = useState<number | null>(null);

  const toggleStack = (index: number) => {
    setExpandedStack(prev => prev === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 01. HERO SECTION & INTERACTIVE NETWORK CANVAS */}
      <section className="relative w-full overflow-hidden bg-surface-container-lowest py-space-xl lg:py-28">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-primary-container/20 via-secondary-container/10 to-transparent blur-3xl opacity-60"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-primary-container/10 blur-[120px]"></div>
        <div className="w-full px-margin-mobile lg:px-margin relative z-10 space-y-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
            <div className="lg:col-span-8 space-y-space-md">
              <div className="inline-flex items-center gap-space-sm px-space-sm py-1 bg-surface-container-low rounded-DEFAULT">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-ping"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">GLOBAL TECHNOLOGY &amp; ENGINEERING</span>
                <span className="text-outline-variant text-label-sm">|</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SYS_VER 4.2.0 // PK-HQ</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight uppercase font-bold max-w-4xl">
                Technology Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary-container">Boundaries.</span>
              </h1>
              <p className="font-headline-sm text-headline-sm text-secondary font-medium max-w-2xl">
                Digital systems. Physical infrastructure. Human engineering. Global delivery.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                MIHORA.TECH is a sovereign technology and industrial engineering enterprise headquartered in Pakistan, orchestrating resilient software architectures, deep hardware networks, sovereign automation, and mission-critical field operations across five continents.
              </p>
              <div className="pt-space-sm flex flex-wrap items-center gap-space-md">
                <a href="mailto:hr@mihora.tech" className="inline-flex items-center gap-space-sm px-space-xl py-3.5 bg-primary-container hover:bg-secondary-container text-on-primary hover:text-on-secondary font-label-md text-label-md uppercase tracking-widest font-semibold rounded-DEFAULT transition-all shadow-[0_0_24px_var(--color-primary-container)]">
                  <span>DISPATCH: HR@MIHORA.TECH</span>
                </a>
                <Link to="/engineering" className="inline-flex items-center gap-space-sm px-space-lg py-3.5 bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-secondary font-label-md text-label-md uppercase tracking-wider font-semibold rounded-DEFAULT transition-all">
                  <Cpu size={18} className="text-secondary" />
                  <span>Explore Architecture</span>
                </Link>
              </div>
            </div>
            {/* Telemetry HUD Card */}
            <div className="lg:col-span-4 bg-surface-container-low p-space-md rounded-DEFAULT space-y-space-sm shadow-xl">
              <div className="flex items-center justify-between pb-space-xs">
                <span className="font-label-sm text-label-sm text-secondary-container uppercase tracking-wider">// TELEMETRY ORBITAL</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant font-mono">33.6844° N, 73.0479° E</span>
              </div>
              <div className="grid grid-cols-2 gap-space-xs font-mono text-label-sm">
                <div className="p-space-xs bg-surface-container rounded-DEFAULT">
                  <span className="text-outline block">ORIGIN HUB</span>
                  <span className="text-on-surface font-semibold">ISB HQ / PK</span>
                </div>
                <div className="p-space-xs bg-surface-container rounded-DEFAULT">
                  <span className="text-outline block">NETWORK SYNC</span>
                  <span className="text-secondary-container font-semibold">99.998% UPTIME</span>
                </div>
                <div className="p-space-xs bg-surface-container rounded-DEFAULT">
                  <span className="text-outline block">ACTIVE PATHS</span>
                  <span className="text-on-surface font-semibold">14 GLOBAL RUNGS</span>
                </div>
                <div className="p-space-xs bg-surface-container rounded-DEFAULT">
                  <span className="text-outline block">DISPATCH MS</span>
                  <span className="text-secondary-container font-semibold">18.4 MS AVG</span>
                </div>
              </div>
              <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-secondary-container w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Interactive Global Engineering Network Canvas */}
          <div className="relative w-full bg-surface-container-low rounded-DEFAULT p-space-md lg:p-space-lg shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md gap-space-sm">
              <div>
                <div className="font-label-sm text-label-sm text-secondary-container uppercase font-mono tracking-widest">// TOPOLOGY DISPLAY</div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase font-bold">The MIHORA Global Engineering Network</h2>
              </div>
              <div className="flex items-center gap-space-md text-label-sm font-label-sm font-mono text-on-surface-variant">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary-container"></span>HQ ANCHOR</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary-container"></span>REGIONAL HUB</span>
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-secondary"></span>EDGE SATELLITE</span>
              </div>
            </div>
            
            <div className="relative w-full h-[360px] md:h-[460px] bg-surface-container-lowest rounded-DEFAULT overflow-hidden flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern height="28" id="dotPattern" patternUnits="userSpaceOnUse" width="28">
                    <circle cx="2" cy="2" fill="#8d90a1" r="1.2"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#dotPattern)" height="100%" width="100%"></rect>
              </svg>
              
              <svg className="w-full h-full relative z-10" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 500">
                <g className="opacity-60" stroke="var(--color-primary-container)" strokeDasharray="4,4" strokeWidth="1.5">
                  <line className="animate-pulse" x1="580" x2="480" y1="240" y2="170"></line>
                  <line x1="580" x2="520" y1="240" y2="280"></line>
                  <line x1="580" x2="730" y1="240" y2="300"></line>
                  <line x1="580" x2="250" y1="240" y2="190"></line>
                  <line x1="580" x2="160" y1="240" y2="210"></line>
                  <line x1="580" x2="800" y1="240" y2="200"></line>
                  <line x1="580" x2="840" y1="240" y2="390"></line>
                  <line x1="580" x2="500" y1="240" y2="390"></line>
                </g>
                <circle className="opacity-30" cx="580" cy="240" fill="none" r="42" stroke="var(--color-secondary-container)" strokeWidth="0.75"></circle>
                <circle className="opacity-20" cx="580" cy="240" fill="none" r="75" stroke="var(--color-secondary-container)" strokeWidth="0.5"></circle>
                
                <g className="cursor-pointer group" onClick={() => setActiveNodeId('HQ')}>
                  <circle className="opacity-40 animate-ping" cx="580" cy="240" fill="var(--color-primary-container)" r="14"></circle>
                  <circle cx="580" cy="240" fill="var(--color-secondary-container)" r="8"></circle>
                  <circle cx="580" cy="240" fill="#ffffff" r="3"></circle>
                  <text fill="#a5e7ff" fontFamily="JetBrains Mono" fontSize="12" fontWeight="700" x="596" y="235">HQ: PAKISTAN</text>
                  <text fill="#8d90a1" fontFamily="JetBrains Mono" fontSize="9" x="596" y="249">33.6844° N, 73.0479° E</text>
                </g>
                <g className="cursor-pointer group" onClick={() => setActiveNodeId('LON')}>
                  <circle cx="480" cy="170" fill="#b5c4ff" r="5"></circle>
                  <text fill="#e1e2ec" fontFamily="JetBrains Mono" fontSize="10" x="440" y="155">LONDON (EMEA)</text>
                </g>
                <g className="cursor-pointer group" onClick={() => setActiveNodeId('DXB')}>
                  <circle cx="520" cy="280" fill="#a5e7ff" r="5"></circle>
                  <text fill="#e1e2ec" fontFamily="JetBrains Mono" fontSize="10" x="532" y="285">DUBAI (GCC)</text>
                </g>
                <g className="cursor-pointer group" onClick={() => setActiveNodeId('SIN')}>
                  <circle cx="730" cy="300" fill="#a5e7ff" r="5"></circle>
                  <text fill="#e1e2ec" fontFamily="JetBrains Mono" fontSize="10" x="742" y="305">SINGAPORE (APAC)</text>
                </g>
                <g className="cursor-pointer group" onClick={() => setActiveNodeId('NYC')}>
                  <circle cx="250" cy="190" fill="#b5c4ff" r="5"></circle>
                  <text fill="#e1e2ec" fontFamily="JetBrains Mono" fontSize="10" x="175" y="180">NEW YORK (NA-E)</text>
                </g>
                <g className="cursor-pointer group" onClick={() => setActiveNodeId('SFO')}>
                  <circle cx="160" cy="210" fill="#8d90a1" r="4"></circle>
                  <text fill="#c3c5d8" fontFamily="JetBrains Mono" fontSize="10" x="75" y="225">SAN FRANCISCO</text>
                </g>
                <g className="cursor-pointer group" onClick={() => setActiveNodeId('TYO')}>
                  <circle cx="800" cy="200" fill="#a5e7ff" r="5"></circle>
                  <text fill="#e1e2ec" fontFamily="JetBrains Mono" fontSize="10" x="812" y="205">TOKYO</text>
                </g>
                <g className="cursor-pointer group" onClick={() => setActiveNodeId('SYD')}>
                  <circle cx="840" cy="390" fill="#8d90a1" r="4"></circle>
                  <text fill="#c3c5d8" fontFamily="JetBrains Mono" fontSize="10" x="780" y="415">SYDNEY</text>
                </g>
                <g className="cursor-pointer group" onClick={() => setActiveNodeId('NBO')}>
                  <circle cx="500" cy="390" fill="#8d90a1" r="4"></circle>
                  <text fill="#c3c5d8" fontFamily="JetBrains Mono" fontSize="10" x="430" y="410">NAIROBI</text>
                </g>
              </svg>
              
              <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-96 bg-surface-container/95 backdrop-blur-md p-space-md rounded-DEFAULT shadow-2xl transition-all">
                <div className="flex items-center justify-between pb-1">
                  <span className="font-label-sm text-label-sm text-secondary-container font-mono">{activeNode.code}</span>
                  <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                </div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-bold">{activeNode.title}</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-1">{activeNode.desc}</div>
                <div className="mt-space-sm pt-space-xs flex justify-between font-label-sm text-label-sm font-mono text-outline">
                  <span>LAT: <span className="text-secondary">{activeNode.lat}</span></span>
                  <span>LON: <span className="text-secondary">{activeNode.lon}</span></span>
                  <span>STATE: <span className="text-secondary-container font-semibold">ACTIVE</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. GLOBAL CAPABILITY TELEMETRY BAR */}
      <section className="w-full bg-surface-container-low py-space-sm overflow-hidden shadow-inner">
        <div className="flex whitespace-nowrap gap-space-xl font-label-sm text-label-sm tracking-widest uppercase font-mono text-secondary-container">
          <div className="flex items-center gap-space-lg animate-marquee">
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> DIGITAL ENGINEERING</span>
            <span className="text-outline-variant">//</span>
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> INFRASTRUCTURE DEPLOYMENT</span>
            <span className="text-outline-variant">//</span>
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> INDUSTRIAL AUTOMATION</span>
            <span className="text-outline-variant">//</span>
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> FIELD ENGINEERING RIGS</span>
            <span className="text-outline-variant">//</span>
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> MANAGED TECHNOLOGY</span>
            <span className="text-outline-variant">//</span>
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> GLOBAL DELIVERY DIRECTORY</span>
            <span className="text-outline-variant">//</span>
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> TELEMETRY DISPATCH STABLE</span>
            <span className="text-outline-variant">//</span>
          </div>
          <div aria-hidden="true" className="flex items-center gap-space-lg animate-marquee">
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> DIGITAL ENGINEERING</span>
            <span className="text-outline-variant">//</span>
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> INFRASTRUCTURE DEPLOYMENT</span>
            <span className="text-outline-variant">//</span>
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> INDUSTRIAL AUTOMATION</span>
            <span className="text-outline-variant">//</span>
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> FIELD ENGINEERING RIGS</span>
            <span className="text-outline-variant">//</span>
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> MANAGED TECHNOLOGY</span>
            <span className="text-outline-variant">//</span>
            <span className="text-on-surface flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> GLOBAL DELIVERY DIRECTORY</span>
            <span className="text-outline-variant">//</span>
          </div>
        </div>
      </section>

      {/* 03. OVERSIZED EDITORIAL BRAND STATEMENT */}
      <section className="w-full bg-surface py-space-xl lg:py-24">
        <div className="w-full px-margin-mobile lg:px-margin space-y-space-lg">
          <div className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-mono">// 01 CORE THESIS</div>
          <div className="space-y-space-sm max-w-5xl">
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-none uppercase font-bold">
              From Digital Systems<br/>
              <span className="text-secondary-container">To Physical Infrastructure.</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl pt-space-sm">
              Most tech firms stop at software code. Traditional infrastructure groups fail at modern computing abstractions. MIHORA.TECH was founded to destroy this partition: unifying full-stack software architecture with hands-on mechanical, physical, and field-level operational mastery.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md pt-space-md">
            <div className="bg-surface-container p-space-md rounded-DEFAULT space-y-2 group hover:bg-surface-container-high transition-all">
              <div className="font-label-sm text-label-sm text-secondary-container font-mono">PHASE_01</div>
              <div className="font-headline-sm text-headline-sm text-on-surface font-bold">DIGITAL</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Cloud fabrics, resilient microservices, modern frontends, edge algorithms.</p>
            </div>
            <div className="bg-surface-container p-space-md rounded-DEFAULT space-y-2 group hover:bg-surface-container-high transition-all">
              <div className="font-label-sm text-label-sm text-secondary-container font-mono">PHASE_02</div>
              <div className="font-headline-sm text-headline-sm text-on-surface font-bold">PHYSICAL</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Server racks, structural cabling, sensor arrays, surveillance grids.</p>
            </div>
            <div className="bg-surface-container p-space-md rounded-DEFAULT space-y-2 group hover:bg-surface-container-high transition-all">
              <div className="font-label-sm text-label-sm text-secondary-container font-mono">PHASE_03</div>
              <div className="font-headline-sm text-headline-sm text-on-surface font-bold">ENGINEERING</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Embedded logic, telemetry conduits, break-proof fault tolerances.</p>
            </div>
            <div className="bg-surface-container p-space-md rounded-DEFAULT space-y-2 group hover:bg-surface-container-high transition-all">
              <div className="font-label-sm text-label-sm text-secondary-container font-mono">PHASE_04</div>
              <div className="font-headline-sm text-headline-sm text-on-surface font-bold">OPERATIONS</div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Continuous field maintenance, 24/7 telemetry monitoring, global dispatch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. DIGITAL + PHYSICAL SPLIT ARCHITECTURE */}
      <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24 relative overflow-hidden">
        <div className="w-full px-margin-mobile lg:px-margin space-y-space-xl">
          <div className="text-center max-w-3xl mx-auto space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container font-mono">// ARCHITECTURAL UNION</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold uppercase">The Dual-Hemisphere Model</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Where pure abstract code meets the kinetic reality of copper, fiber, steel, and physical field diagnostics.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-space-md items-center">
            <div className="lg:col-span-5 bg-surface-container-low p-space-lg rounded-DEFAULT space-y-space-md shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary font-mono tracking-widest">HEMISPHERE_01 // SOFTWARE</span>
                <Terminal size={20} className="text-secondary" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold uppercase">Digital Architecture</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Engineered software systems built for high throughput, sub-millisecond execution, and autonomous business logic.
              </p>
              <div className="space-y-space-xs pt-space-xs">
                <div className="p-space-sm bg-surface-container rounded-DEFAULT flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">Web Platforms &amp; Applications</span>
                  <span className="font-label-sm text-label-sm font-mono text-secondary">REACT / NEXT / NODE</span>
                </div>
                <div className="p-space-sm bg-surface-container rounded-DEFAULT flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">Enterprise System Integration</span>
                  <span className="font-label-sm text-label-sm font-mono text-secondary">ERP / CRM / SAP / REST</span>
                </div>
                <div className="p-space-sm bg-surface-container rounded-DEFAULT flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">Cloud Native Pipelines</span>
                  <span className="font-label-sm text-label-sm font-mono text-secondary">K8S / TERRAFORM / AWS</span>
                </div>
                <div className="p-space-sm bg-surface-container rounded-DEFAULT flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">Algorithmic Automation</span>
                  <span className="font-label-sm text-label-sm font-mono text-secondary">EVENT BUS / ML / OCR</span>
                </div>
              </div>
              <div className="w-full h-44 rounded-DEFAULT overflow-hidden relative">
                <img className="w-full h-full object-cover" alt="Digital representation" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNp2Ne9j3lWUFeehqctv-wkDuyehiZYdvANACNVnGHSL0NhH1hi6Vp_MWuSfsPmPpp82td5xAfJaCQx6z4VXMUTfemlFbnDdSoc0_v_rfrli6rttmgzJLEv2lYJqFjwyspiecKXgEfNr5w6QdsZ-vJtghmDahkyDKOSCaX2No32KFcikD6rejpB0-EeRUEtHOH6JZsKfK7OWh3VkBqVjHEbkjRXIHirrYh1fGq0Jb5-qJnzR4AJ46O4Q"/>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
              </div>
            </div>
            
            <div className="lg:col-span-1 flex flex-col items-center justify-center py-space-md">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary shadow-[0_0_24px_var(--color-primary-container)] animate-pulse">
                <RefreshCw size={24} />
              </div>
              <div className="font-label-sm text-label-sm text-secondary-container font-mono mt-2 text-center tracking-widest">
                MIHORA<br/>NEXUS
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface-container-low p-space-lg rounded-DEFAULT space-y-space-md shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary-container font-mono tracking-widest">HEMISPHERE_02 // HARDWARE</span>
                <Router size={20} className="text-secondary-container" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold uppercase">Physical Infrastructure</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Kinetic hardware, sovereign enterprise server rooms, optical transport backbones, and rapid on-site technician deployment.
              </p>
              <div className="space-y-space-xs pt-space-xs">
                <div className="p-space-sm bg-surface-container rounded-DEFAULT flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">Data Centers &amp; Server Racks</span>
                  <span className="font-label-sm text-label-sm font-mono text-secondary-container">CISCO / ARISTA / DELL</span>
                </div>
                <div className="p-space-sm bg-surface-container rounded-DEFAULT flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">Structured Cabling &amp; Optical Fiber</span>
                  <span className="font-label-sm text-label-sm font-mono text-secondary-container">CAT6A / SINGLE-MODE</span>
                </div>
                <div className="p-space-sm bg-surface-container rounded-DEFAULT flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">Surveillance &amp; Physical Access</span>
                  <span className="font-label-sm text-label-sm font-mono text-secondary-container">IP CCTV / BIOMETRIC</span>
                </div>
                <div className="p-space-sm bg-surface-container rounded-DEFAULT flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">Field Engineering &amp; Break-Fix</span>
                  <span className="font-label-sm text-label-sm font-mono text-secondary-container">SLA-BACKED 4HR TRUCK</span>
                </div>
              </div>
              <div className="w-full h-44 rounded-DEFAULT overflow-hidden relative">
                <img className="w-full h-full object-cover" alt="Physical infrastructure" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC71bPIEdSYxOU_7vxv4AAKlM6Dt8jGdirqqQ4InCa8vbu0pj2C3RnJLJdJD6j1XioqQ1td394C0CkNAD8VOOySNebOGc39ViFgs8wjTEgVpAzvzSKozZ69aJau6OpdvJd3HB55zQVJDYeNxUOwxGRM5C1KCS6qHndHEtzIf4AylEEMOcse7fqr1re4bZGcRP7p__CkHEtEFhO0JALIsxRLF5QeBorW02cQVRRX90-lrY1uCjyPAaIW7g"/>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. INTERACTIVE SERVICE EXPLORER */}
      <section className="w-full bg-surface py-space-xl lg:py-24">
        <div className="w-full px-margin-mobile lg:px-margin space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
            <div className="space-y-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-mono">// DISCIPLINE MATRIX</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold uppercase">Comprehensive Services</h2>
            </div>
            <Link to="/services" className="font-label-md text-label-md text-secondary hover:text-secondary-container uppercase tracking-wider font-semibold inline-flex items-center gap-1">
              <span>View All Service Specifications</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-space-xs bg-surface-container-lowest p-space-xs rounded-DEFAULT font-label-md text-label-md uppercase font-mono">
            {['Digital Engineering', 'Automation & AI', 'Infrastructure', 'Field Engineering', 'Managed Tech'].map((title, idx) => (
              <button 
                key={idx}
                className={clsx("py-space-sm px-space-md text-center rounded-DEFAULT transition-all font-medium", 
                  activeServiceIdx === idx 
                    ? "bg-primary-container text-on-primary font-semibold" 
                    : "bg-transparent text-on-surface-variant hover:text-on-surface")}
                onClick={() => setActiveServiceIdx(idx)}
              >
                {title}
              </button>
            ))}
          </div>

          <div className="bg-surface-container-low p-space-lg lg:p-space-xl rounded-DEFAULT shadow-2xl transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-7 space-y-space-md">
                <div className="flex items-center gap-space-sm">
                  <span className="px-space-xs py-0.5 bg-surface-container font-mono text-label-sm text-secondary-container font-semibold rounded-DEFAULT">{activeService.tag}</span>
                  <span className="font-label-sm text-label-sm text-outline font-mono">{activeService.sub}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold uppercase">{activeService.headline}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{activeService.body}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                  <div className="p-space-sm bg-surface-container rounded-DEFAULT">
                    <span className="font-label-sm text-label-sm text-secondary block font-mono">01 // PLATFORM DEV</span>
                    <span className="font-body-sm text-body-sm text-on-surface">{activeService.sub1}</span>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-DEFAULT">
                    <span className="font-label-sm text-label-sm text-secondary block font-mono">02 // ARCHITECTURE</span>
                    <span className="font-body-sm text-body-sm text-on-surface">{activeService.sub2}</span>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-DEFAULT">
                    <span className="font-label-sm text-label-sm text-secondary block font-mono">03 // APIS &amp; INTEGRATIONS</span>
                    <span className="font-body-sm text-body-sm text-on-surface">{activeService.sub3}</span>
                  </div>
                  <div className="p-space-sm bg-surface-container rounded-DEFAULT">
                    <span className="font-label-sm text-label-sm text-secondary block font-mono">04 // CODE RESILIENCE</span>
                    <span className="font-body-sm text-body-sm text-on-surface">{activeService.sub4}</span>
                  </div>
                </div>
                <div className="pt-space-xs">
                  <Link to="/services" className="inline-flex items-center gap-space-sm px-space-md py-space-xs bg-surface-container hover:bg-surface-container-high text-secondary-container font-label-md text-label-md uppercase font-semibold font-mono rounded-DEFAULT transition-all">
                    <span>[ INITIATE SERVICE BRIEFING ]</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 bg-surface-container p-space-md rounded-DEFAULT space-y-space-sm">
                <div className="flex items-center justify-between text-label-sm font-mono text-outline">
                  <span>SYSTEM ARCH_BLUEPRINT</span>
                  <span className="text-secondary-container">STATUS: RESOLVED</span>
                </div>
                <div className="h-64 bg-surface-container-lowest rounded-DEFAULT p-space-md flex flex-col justify-between font-mono text-xs text-secondary relative overflow-hidden">
                  <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-primary-container/10 pointer-events-none"></div>
                  <div className="space-y-1">
                    <div className="text-outline-variant">// SCHEMA RUNTIME TELEMETRY</div>
                    <div>&gt; INGEST: API_GATEWAY_V3</div>
                    <div>&gt; PROTOCOL: gRPC / WEBSOCKET / TLS1.3</div>
                    <div>&gt; PIPELINE: DISTRIBUTED REPLICATION</div>
                  </div>
                  <div className="space-y-1.5 py-2">
                    <div className="flex items-center justify-between text-[10px] text-outline">
                      <span>THROUGHPUT</span>
                      <span>{activeService.bar1} OPTIMAL</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-secondary-container transition-all duration-500" style={{ width: activeService.bar1 }}></div>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-outline">
                      <span>RESILIENCE QUORUM</span>
                      <span>3/3 NODES SYNCED</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary transition-all duration-500" style={{ width: activeService.bar2 }}></div>
                    </div>
                  </div>
                  <div className="text-[11px] text-on-surface-variant flex justify-between">
                    <span>DISPATCH: MIHORA_CORE</span>
                    <span className="text-secondary-container">HASH: 0x88F10B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. THE LAYERED ENGINEERING STACK */}
      <section className="w-full bg-surface py-space-xl lg:py-24">
        <div className="w-full px-margin-mobile lg:px-margin space-y-space-lg">
          <div className="space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-mono">// FULL-STACK TOPOLOGY</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold uppercase">The Unified Engineering Stack</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              We operate simultaneously across every vertical stratum of computation. Expand each stratum to review technical layers.
            </p>
          </div>
          
          <div className="space-y-space-xs font-mono text-label-md">
            {[
              { id: 9, title: "Software & Digital Platforms", desc: "Architected Web & Mobile applications, distributed micro-frontends, real-time WebSockets, TypeScript, Golang, Next.js, and multi-tenant SaaS kernels.", spec: "ZERO-DEPENDENCY BUILD // CONTAINERIZED // EDGE CDN SERVED" },
              { id: 8, title: "APIs & Micro-Mesh Services", desc: "gRPC, GraphQL, REST interfaces, Apache Kafka event streams, Redis memory buffers, and custom middleware interconnects.", spec: "SUB-10MS LATENCY TARGET // MUTUAL TLS ENCRYPTION" },
              { id: 7, title: "Autonomous Intelligence & Workflows", desc: "Computer vision ingestion, predictive maintenance triggers, autonomous ticket routing, RPA scripting, and LLM agent tool calling.", spec: "RETRIEVAL-AUGMENTED PIPELINE // LOCAL SOVEREIGN INFERENCE" },
              { id: 6, title: "Operating Systems & Virtualization", desc: "Debian, Ubuntu Server, Red Hat Enterprise, Proxmox VE, VMware ESXi, bare-metal hypervisors, and kernel-level hardening routines.", spec: "HARDENED CIS BENCHMARK LEVEL 2 // TPM 2.0 ATTESTATION" },
              { id: 5, title: "Network Routing & SD-WAN Fabrics", desc: "BGP routing, OSPF, VLAN segmentations, IPsec site-to-site tunnels, WireGuard meshes, and redundant ISP failover automation.", spec: "REDUNDANT UPLINK DIVERSITY // ZERO PACKET LOSS ROUTING" },
              { id: 4, title: "Physical Servers & SAN Storage", desc: "Rackmount 1U/2U/4U compute nodes, NVMe SAN fabrics, RAID arrays, hot-swappable power redundancy, and IPMI/iDRAC lights-out management.", spec: "DUAL PSU REDUNDANCY // ECC MEMORY SCRUBBING" },
              { id: 3, title: "Structured Cabling & PDU Distribution", desc: "Fiber optic splicing (single-mode & multi-mode), Cat6A patch panel termination, intelligent rack PDUs, ATS failover, and battery UPS arrays.", spec: "FLUKE CERTIFIED LINK VERIFICATION // ZERO ELECTROMAGNETIC LEAK" },
              { id: 2, title: "Physical Installation & Surveillance", desc: "CCTV NVR/DVR arrays, biometric turnstiles, environmental humidity/temperature probes, server room cooling containment, and perimeter sensors.", spec: "NEMA-RATED ENCLOSURES // TAMPER DETECTION CIRCUITS" },
              { id: 1, title: "Kinetic Field Dispatch & Break-Fix", desc: "Hands-on engineering trucks, ladder work, cable pulling, on-site diagnostics, component replacement, and physical asset decommissioning.", spec: "GLOBAL RAPID DISPATCH PROTOCOL // FIELD TOOLSETS CALIBRATED" },
            ].map(layer => (
              <div key={layer.id} className="p-space-md bg-surface-container-low hover:bg-surface-container rounded-DEFAULT cursor-pointer transition-all" onClick={() => toggleStack(layer.id)}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-md">
                    <span className="text-secondary-container font-bold">L-0{layer.id}</span>
                    <span className="text-on-surface font-bold uppercase font-headline-sm text-headline-sm">{layer.title}</span>
                  </div>
                  <span className="text-secondary text-sm">[EXPAND LAYER]</span>
                </div>
                {expandedStack === layer.id && (
                  <div className="pt-space-sm font-body-sm text-body-sm text-on-surface-variant space-y-1">
                    <p>{layer.desc}</p>
                    <div className="text-xs text-secondary-container font-mono">SPEC: {layer.spec}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. FIELD ENGINEERING REALITY */}
      <section className="w-full bg-surface-container-lowest py-space-xl lg:py-24">
        <div className="w-full px-margin-mobile lg:px-margin space-y-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-6 space-y-space-md">
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container font-mono">// KINETIC REALITY</div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold uppercase">When Technology Has to Work in the Real World.</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Software does not run in a vacuum. It lives on hot servers, inside dusty conduits, behind biometric doorways, and through subterranean fiber lines. Our field engineering units exist to bridge digital intent with uncompromising physical survival.
              </p>
              <div className="space-y-space-xs font-label-md text-label-md text-on-surface">
                <div className="flex items-center gap-space-sm"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Zero theoretical assumptions: every cable certified with Fluke telemetry.</div>
                <div className="flex items-center gap-space-sm"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Complete environmental thermal mapping and power harmonic analysis.</div>
                <div className="flex items-center gap-space-sm"><span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> High-voltage &amp; low-voltage integration with industrial containment.</div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="w-full h-80 rounded-DEFAULT overflow-hidden relative shadow-2xl">
                <img className="w-full h-full object-cover" alt="Technical engineer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlyg3ubyBhu8Yekk0m3TxARabBPiz93GmZlx3hLfox8vekMDcg3XQ_oTYfNC-cAvUZqdxzjsOl3a1eY0JYcBLH6P7hLD-p1SFFybhlSruGL0Nf_2j3WxnFBmeOKr52Q52nKMIbVK0afleQJgY0A2UHAyEk1MvSkILANiK_V33Jfr8Nxrc2rQCJ3PfQCl9Eec17ZETuw1javPem25W3TTMEpMJogUWUjmM_kCjDNucFIMx7QPZrRfIrTg"/>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-surface-container/90 backdrop-blur p-space-sm rounded-DEFAULT text-label-sm font-mono text-secondary">
                  <span>FIELD RIG: TRUCK_UNIT_04</span>
                  <span>EQUIP: OTDR FIBER TESTER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-surface py-space-xl lg:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-t from-primary-container/30 via-secondary-container/10 to-transparent blur-3xl opacity-70"></div>
        <div className="w-full px-margin-mobile lg:px-margin relative z-10 text-center space-y-space-lg max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded-DEFAULT">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-mono">INITIATE ARCHITECTURAL ENGAGEMENT</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold uppercase tracking-tight">
            Tell Us What You're Building.
          </h2>
          <p className="font-headline-sm text-headline-sm text-on-surface-variant max-w-2xl mx-auto font-normal">
            Digital systems, infrastructure, automation, field engineering, or something that does not fit inside a predefined box.
          </p>
          <div className="pt-space-md flex flex-col sm:flex-row items-center justify-center gap-space-md">
            <a href="mailto:hr@mihora.tech" className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-4 bg-primary-container hover:bg-secondary-container text-on-primary hover:text-on-secondary font-label-md text-label-md uppercase tracking-widest font-bold rounded-DEFAULT shadow-[0_0_24px_var(--color-primary-container)] transition-all">
              <Terminal size={18} />
              <span>DISPATCH: HR@MIHORA.TECH</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
