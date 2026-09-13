import React, { useState } from 'react';
import { Mail, MapPin, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full bg-surface-container-lowest overflow-hidden px-margin-mobile lg:px-margin py-space-xl lg:py-24">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-container/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          
          <div className="lg:col-span-5 space-y-space-lg relative z-10">
            <div className="space-y-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-DEFAULT text-secondary shadow-sm">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
                <span className="font-label-sm text-label-sm tracking-widest uppercase">SECURE DISPATCH</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight leading-none">
                INITIATE <span className="text-secondary-container">CONTACT.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Submit architectural RFPs, request infrastructure audits, or engage our engineering teams for complex systems deployment.
              </p>
            </div>

            <div className="space-y-space-md">
              <div className="bg-surface-container p-space-md rounded-DEFAULT flex gap-space-md items-start shadow-md">
                <MapPin className="text-secondary-container mt-1" size={24} />
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">Primary HQ (Pakistan)</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Systems Architecture & Core Engineering Labs</p>
                  <p className="font-mono text-label-sm text-secondary pt-2">LAT: 33.6844° N // LNG: 73.0479° E</p>
                </div>
              </div>

              <div className="bg-surface-container p-space-md rounded-DEFAULT flex gap-space-md items-start shadow-md">
                <Globe className="text-secondary-container mt-1" size={24} />
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">Global Deployments</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Active field teams operating across EMEA & APAC regions.</p>
                </div>
              </div>

              <div className="bg-surface-container p-space-md rounded-DEFAULT flex gap-space-md items-start shadow-md">
                <Mail className="text-secondary-container mt-1" size={24} />
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold uppercase">Direct Comm</h3>
                  <a href="mailto:hr@mihora.tech" className="font-mono text-body-md text-secondary hover:text-on-surface transition-colors">hr@mihora.tech</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative z-10 flex items-center justify-center">
            <div className="w-full bg-surface-container-low p-space-lg lg:p-space-xl rounded-DEFAULT shadow-xl border-t border-surface-container-highest flex flex-col items-center text-center space-y-space-md">
              <Mail className="text-secondary w-16 h-16" />
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">Direct Transmission</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                For all engineering inquiries, RFPs, and architectural engagements, bypass the standard queue and dispatch directly to our core team.
              </p>
              <a href="mailto:hr@mihora.tech" className="inline-flex items-center gap-space-sm px-space-xl py-4 bg-primary-container hover:bg-secondary-container text-on-primary hover:text-on-secondary font-label-md text-label-md uppercase tracking-widest font-bold rounded-DEFAULT transition-all shadow-[0_0_24px_var(--color-primary-container)] mt-space-md">
                <span>DISPATCH: HR@MIHORA.TECH</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
