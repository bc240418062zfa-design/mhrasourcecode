import React from 'react';
import { Mail, Briefcase, MapPin, Globe, Plane, Home } from 'lucide-react';

export default function Careers() {
  return (
    <div className="flex flex-col w-full">
      <section id="join-engineering" className="relative w-full bg-surface-container-lowest overflow-hidden px-margin-mobile lg:px-margin py-space-xl lg:py-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface-container-low p-space-lg lg:p-space-xl rounded-DEFAULT shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-8 space-y-space-md">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container rounded-DEFAULT">
                  <span className="w-2 h-2 rounded-full bg-secondary-container"></span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-mono">ENGINEERING RECRUITMENT</span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface font-bold uppercase tracking-tight">
                  Build What Matters.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                  We do not build hollow disposable apps. We construct enduring digital nervous systems and physical technological infrastructure. We are actively hiring senior systems architects, field deployment engineers, low-voltage technicians, and automation developers.
                </p>
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <a href="mailto:hr@mihora.tech" className="inline-flex items-center gap-space-sm px-space-xl py-3 bg-primary-container hover:bg-secondary-container text-on-primary hover:text-on-secondary font-label-md text-label-md uppercase tracking-widest font-semibold rounded-DEFAULT transition-all shadow-md">
                    <Mail size={16} />
                    <span>Apply Direct: hr@mihora.tech</span>
                  </a>
                </div>
              </div>
              <div className="lg:col-span-4 bg-surface-container p-space-md rounded-DEFAULT space-y-space-sm font-mono text-label-sm">
                <div className="text-outline uppercase">// OPEN ENGINEERING CADRES</div>
                <div className="space-y-space-xs">
                  <div className="p-space-xs bg-surface-container-lowest rounded-DEFAULT flex justify-between">
                    <span className="text-on-surface">Sr. Distributed Systems Eng</span>
                    <span className="text-secondary-container">HQ/REMOTE</span>
                  </div>
                  <div className="p-space-xs bg-surface-container-lowest rounded-DEFAULT flex justify-between">
                    <span className="text-on-surface">Lead Field Tech (Cabling/Racks)</span>
                    <span className="text-secondary-container">ON-SITE</span>
                  </div>
                  <div className="p-space-xs bg-surface-container-lowest rounded-DEFAULT flex justify-between">
                    <span className="text-on-surface">Automation Architect (Python/K8s)</span>
                    <span className="text-secondary-container">GLOBAL</span>
                  </div>
                  <div className="p-space-xs bg-surface-container-lowest rounded-DEFAULT flex justify-between">
                    <span className="text-on-surface">NOC Telemetry Specialist</span>
                    <span className="text-secondary-container">PK-ISB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="global-relocation" className="w-full bg-surface px-margin-mobile lg:px-margin py-space-xl scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-space-xl">
          <div className="text-center space-y-space-xs max-w-3xl mx-auto">
            <div className="font-label-sm text-label-sm text-secondary-container uppercase tracking-widest font-bold">// MOBILITY</div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold uppercase tracking-tight">Global Relocation & Deployment</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">We source top engineering talent globally and sponsor complete relocation to our HQ or major operational zones across the EMEA and APAC regions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div className="bg-surface-container-low p-space-lg rounded-DEFAULT text-center space-y-space-sm border-t-2 border-primary-container">
              <div className="w-16 h-16 bg-surface-container-highest mx-auto rounded-full flex items-center justify-center text-primary">
                <Plane size={32} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">Visa Sponsorship</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Full legal processing and work authorization handled by our immigration partners for engineers and their immediate families.</p>
            </div>
            
            <div className="bg-surface-container-low p-space-lg rounded-DEFAULT text-center space-y-space-sm border-t-2 border-secondary-container">
              <div className="w-16 h-16 bg-surface-container-highest mx-auto rounded-full flex items-center justify-center text-secondary">
                <Home size={32} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">Transit & Housing</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Comprehensive transition package including temporary corporate housing and structural settling allowances.</p>
            </div>

            <div className="bg-surface-container-low p-space-lg rounded-DEFAULT text-center space-y-space-sm border-t-2 border-error">
              <div className="w-16 h-16 bg-surface-container-highest mx-auto rounded-full flex items-center justify-center text-error">
                <Globe size={32} />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">Field Rotation</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Opportunities for short-term and long-term rotational deployments to high-priority infrastructure builds worldwide.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
