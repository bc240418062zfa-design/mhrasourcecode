import React from 'react';
import { Building, Globe, Users, Target, ShieldCheck, Zap } from 'lucide-react';

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
              Operating dual engineering hubs across the United Kingdom and Pakistan, delivering globally. MIHORA.TECH is built on a simple thesis: the most complex problems require mastery of both code and the physical world.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-space-md">
            <div className="bg-surface-container-low p-space-md rounded-DEFAULT space-y-2">
              <Globe className="text-secondary-container" size={24} />
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Global Reach</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Operating dual UK/PK hubs with field teams across EMEA, APAC, and North America.</p>
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
            <p className="font-body-md text-body-md text-on-surface-variant">Our dual-hub structure across the United Kingdom and Pakistan powers 24/7 engineering velocity, robust governance, and global physical field execution.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="bg-surface-container p-space-lg rounded-DEFAULT shadow-lg flex flex-col items-start gap-space-md border-t-2 border-primary">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container flex items-center justify-center rounded-full">
                <span className="font-bold text-lg">UK</span>
              </div>
              <div>
                <div className="font-mono text-label-sm text-secondary-container">DUAL HUB // EMEA HEADQUARTERS</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase mt-1">United Kingdom Hub (London)</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Strategic client governance, enterprise architecture alignment, ISO/IEC standards compliance, and European operational command.
              </p>
            </div>

            <div className="bg-surface-container p-space-lg rounded-DEFAULT shadow-lg flex flex-col items-start gap-space-md border-t-2 border-secondary-container">
              <div className="w-12 h-12 bg-secondary-container text-on-secondary-container flex items-center justify-center rounded-full">
                <span className="font-bold text-lg">PK</span>
              </div>
              <div>
                <div className="font-mono text-label-sm text-secondary-container">DUAL HUB // SYSTEMS &amp; R&amp;D CENTER</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase mt-1">Pakistan Systems Labs (Islamabad)</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Core systems algorithms, distributed data processing, automated continuous integration pipelines, and full hardware rig simulations.
              </p>
            </div>

            <div className="bg-surface-container p-space-lg rounded-DEFAULT shadow-lg flex flex-col items-start gap-space-md border-t-2 border-outline">
              <div className="w-12 h-12 bg-surface-container-high text-on-surface flex items-center justify-center rounded-full">
                <span className="font-bold text-lg">FD</span>
              </div>
              <div>
                <div className="font-mono text-label-sm text-on-surface-variant">WORLDWIDE INFRASTRUCTURE</div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase mt-1">Field Deployments (Global)</h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Certified field engineering units active across EMEA, APAC, and North America for data center build-outs, fiber trunks, and rapid break-fix.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
