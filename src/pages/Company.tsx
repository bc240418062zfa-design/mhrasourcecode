import React from 'react';
import { Building, Globe, Users, Target, ShieldCheck, Zap, Mail, ArrowRight } from 'lucide-react';

export default function Company() {
  return (
    <div className="flex flex-col w-full">
      <section id="about" className="relative w-full bg-surface-container-lowest overflow-hidden px-margin-mobile lg:px-margin py-space-xl lg:py-24 scroll-mt-24">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-container/10 blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-space-lg items-center">
          <div className="space-y-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-DEFAULT text-secondary shadow-sm">
              <Building size={14} />
              <span className="font-label-sm text-label-sm tracking-widest uppercase">COMPANY OVERVIEW</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight leading-none">
              A NEW CLASS OF <span className="text-secondary-container">ENGINEERING ENTERPRISE.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Headquartered in Pakistan, operating globally. MIHORA.TECH is built on a simple thesis: the most complex problems require mastery of both code and the physical world.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-space-md">
            <div className="bg-surface-container-low p-space-md rounded-DEFAULT space-y-2">
              <Globe className="text-secondary-container" size={24} />
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Global Reach</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Operating across EMEA, APAC, and NA with centralized telemetry.</p>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-DEFAULT space-y-2">
              <Users className="text-secondary-container" size={24} />
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Multi-Discipline</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Cloud architects working side-by-side with low-voltage technicians.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="w-full bg-surface px-margin-mobile lg:px-margin py-space-xl scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-space-xl">
          <div className="space-y-space-xs max-w-3xl">
            <div className="font-label-sm text-label-sm text-secondary-container tracking-widest uppercase">// CORE DOCTRINE</div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">Engineering Philosophy</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">We build resilient, deterministic systems that do not rely on fragile external states. We do not do "agile prototypes" for production hardware; we do mathematically validated deployments.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface-container-lowest p-space-lg rounded-DEFAULT border-l-4 border-primary">
              <Target className="text-primary mb-space-sm" size={32} />
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase font-bold mb-2">Precision over Speed</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">We prefer taking the time to architect robust edge clusters rather than rushing a flawed mesh network. Reliability is our primary metric.</p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-DEFAULT border-l-4 border-secondary-container">
              <ShieldCheck className="text-secondary-container mb-space-sm" size={32} />
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase font-bold mb-2">Zero-Trust by Default</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Every API, every switch port, and every user session is treated as hostile. Security is woven into the base layer, not added as an afterthought.</p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-DEFAULT border-l-4 border-error">
              <Zap className="text-error mb-space-sm" size={32} />
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase font-bold mb-2">Hardware is Hard</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Code can be patched over the air, but a burned-out PLC requires a truck roll. We engineer hardware layers with extreme redundancies.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="global-operating-model" className="w-full bg-surface-container-lowest px-margin-mobile lg:px-margin py-space-xl scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-space-xl">
          <div className="text-center space-y-space-xs max-w-3xl mx-auto">
            <div className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">// THE ENGINE</div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold uppercase">Global Operating Model</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Our hybrid workforce allows us to deliver high-tier engineering solutions across multiple time zones with uninterrupted velocity.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            <div className="bg-surface-container p-space-xl rounded-DEFAULT shadow-lg flex flex-col items-start gap-space-md">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container flex items-center justify-center rounded-full">
                <span className="font-bold text-lg">HQ</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">Sovereign Architecture Labs (PK)</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                The core logic and architectural blueprints are drafted in our central R&D hubs. This is where massive datasets are processed, code is compiled, and hardware rigs are simulated before global dispatch.
              </p>
            </div>
            <div className="bg-surface-container p-space-xl rounded-DEFAULT shadow-lg flex flex-col items-start gap-space-md">
              <div className="w-12 h-12 bg-secondary-container text-on-secondary-container flex items-center justify-center rounded-full">
                <span className="font-bold text-lg">FD</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">Field Deployments (Global)</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                From laying fiber-optic trunks in the Middle East to configuring automated fulfillment sensors in North America, our field teams translate our code into physical reality.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
