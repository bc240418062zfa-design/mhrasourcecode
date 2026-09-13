import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, BookOpen, FileText, Search } from 'lucide-react';

export default function Insights() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full bg-surface-container-lowest overflow-hidden px-margin-mobile lg:px-margin py-space-xl lg:py-24">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-mono">// TECHNICAL ANALYSIS</span>
            <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold uppercase tracking-tight">Engineering Papers &amp; Insights</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Deep-dive architectural specifications, post-mortems, and industrial case studies from our sovereign labs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
            <div className="lg:col-span-7 bg-surface-container-low p-space-lg rounded-DEFAULT space-y-space-md shadow-xl flex flex-col justify-between">
              <div className="space-y-space-xs">
                <div className="flex items-center gap-space-sm">
                  <span className="px-space-xs py-0.5 bg-primary-container text-on-primary font-mono text-label-sm font-semibold rounded-DEFAULT">FEATURED RESEARCH</span>
                  <span className="font-label-sm text-label-sm text-outline font-mono">PUB_ID: ARCH-2025-09</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold uppercase pt-space-xs">
                  Physical Layer Determinism in Distributed Micro-Datacenters
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  An exhaustive architectural evaluation of how thermal harmonic variances and structured optical cable bending radii degrade packet jitter in real-world high-frequency trading and algorithmic routing systems.
                </p>
              </div>
              <div className="flex items-center justify-between pt-space-md font-mono text-label-sm">
                <span className="text-secondary-container">AUTH: MIHORA R&amp;D LABS</span>
                <Link to="/insights" className="text-secondary hover:text-on-surface flex items-center gap-1 font-semibold">
                  <span>READ DISSERTATION</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-space-md">
              <div className="bg-surface-container-low p-space-md rounded-DEFAULT space-y-space-xs hover:bg-surface-container transition-all">
                <div className="font-label-sm text-label-sm text-secondary font-mono">LATEST // LOGISTICS</div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Sub-Second Barcode Processing on the Edge: 40 Distribution Centers
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  How deploying edge compute units reduced API server roundtrips by 92% across a national logistics grid.
                </p>
              </div>
              <div className="bg-surface-container-low p-space-md rounded-DEFAULT space-y-space-xs hover:bg-surface-container transition-all">
                <div className="font-label-sm text-label-sm text-secondary font-mono">LATEST // CCTV &amp; FIBER</div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Autonomous Surveillance Failover Under Intermittent Power Grids
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Engineering hybrid solar-backed battery enclosures for perimeter sensors in extreme climate terrains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technical-papers" className="w-full bg-surface px-margin-mobile lg:px-margin py-space-xl scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex items-center gap-space-sm text-secondary-container">
            <FileText size={24} />
            <h2 className="font-headline-lg text-headline-lg font-bold uppercase tracking-wide text-on-surface">Technical Papers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="bg-surface-container-low p-space-md rounded-DEFAULT border-l-2 border-primary hover:bg-surface-container transition-colors">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Zero-Trust Network Mesh in Air-Gapped Environments</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Analysis of cryptographic handshakes across physically isolated switch layers without public PKI.</p>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-DEFAULT border-l-2 border-primary hover:bg-surface-container transition-colors">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">State Persistence in Stateless K8s Nodes</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Solving distributed cache invalidation during rolling container restarts on edge-deployed worker nodes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin py-space-xl scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex items-center gap-space-sm text-secondary-container">
            <BookOpen size={24} />
            <h2 className="font-headline-lg text-headline-lg font-bold uppercase tracking-wide text-on-surface">Case Studies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="bg-surface-container p-space-md rounded-DEFAULT border-l-2 border-secondary hover:bg-surface-container-high transition-colors">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">National Retail Inventory Grid</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Deploying 1,200 unified threat management appliances and SD-WAN gateways across a fragmented multi-ISP retail network.</p>
            </div>
            <div className="bg-surface-container p-space-md rounded-DEFAULT border-l-2 border-secondary hover:bg-surface-container-high transition-colors">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Hospital Private 5G Core</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Architecting a local spectrum cell network to bypass Wi-Fi interference for critical diagnostic carts and mobile imaging units.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="industrial-analysis" className="w-full bg-surface px-margin-mobile lg:px-margin py-space-xl scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-space-lg">
          <div className="flex items-center gap-space-sm text-secondary-container">
            <Search size={24} />
            <h2 className="font-headline-lg text-headline-lg font-bold uppercase tracking-wide text-on-surface">Industrial Analysis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="bg-surface-container-low p-space-md rounded-DEFAULT border-l-2 border-error hover:bg-surface-container transition-colors">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">The False Economy of Commercial SaaS</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Evaluating the hidden technical debt and sovereignty risks of outsourcing core operational databases to multi-tenant commercial clouds.</p>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-DEFAULT border-l-2 border-error hover:bg-surface-container transition-colors">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">Hardware Standardization Fallacy</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Why abstracting network hardware via virtualization layers often fails in high-throughput industrial edge applications.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
