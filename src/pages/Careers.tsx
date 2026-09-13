import React, { useState } from 'react';
import { Mail, Globe, Plane, Home, Send, CheckCircle2, ArrowRight, X } from 'lucide-react';

export default function Careers() {
  const [modalRole, setModalRole] = useState<string | null>(null);
  const [applied, setApplied] = useState(false);
  const [applicantEmail, setApplicantEmail] = useState('');
  const [githubUrl, setGithubUrl] = useState('');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
  };

  const handleClose = () => {
    setModalRole(null);
    setApplied(false);
    setApplicantEmail('');
    setGithubUrl('');
  };

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
                <div className="text-outline uppercase text-xs">// OPEN ENGINEERING CADRES (CLICK TO APPLY)</div>
                <div className="space-y-space-xs">
                  {[
                    { role: "Sr. Distributed Systems Eng", loc: "UK/REMOTE" },
                    { role: "Lead Field Tech (Cabling/Racks)", loc: "EMEA/ON-SITE" },
                    { role: "Automation Architect (Python/K8s)", loc: "GLOBAL" },
                    { role: "NOC Telemetry Specialist", loc: "UK/PK HUBS" },
                  ].map((cadre, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModalRole(cadre.role)}
                      className="w-full text-left p-space-xs bg-surface-container-lowest hover:bg-surface-container-high rounded-DEFAULT flex justify-between items-center transition-colors group cursor-pointer"
                    >
                      <span className="text-on-surface group-hover:text-primary transition-colors text-xs font-semibold">{cadre.role}</span>
                      <span className="text-secondary-container text-xs">{cadre.loc}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Application Modal */}
      {modalRole && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-surface-container-low border border-outline/30 rounded-DEFAULT shadow-2xl p-space-lg space-y-space-md relative animate-in fade-in zoom-in-95">
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface"
            >
              <X size={20} />
            </button>

            {applied ? (
              <div className="text-center py-space-lg space-y-space-sm">
                <div className="w-14 h-14 bg-secondary-container/20 text-secondary-container rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold uppercase">Transmission Received</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Your credentials for <strong className="text-on-surface">{modalRole}</strong> have been routed to our Lead Architecture recruiter.
                </p>
                <div className="pt-space-sm">
                  <button
                    onClick={handleClose}
                    className="px-space-lg py-2 bg-primary-container text-on-primary font-label-md text-label-md uppercase font-bold rounded-DEFAULT"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-space-md">
                <div>
                  <div className="font-mono text-xs text-secondary-container tracking-wider uppercase">// CADRE APPLICATION INTAKE</div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold uppercase">{modalRole}</h3>
                </div>

                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm font-mono text-on-surface-variant block uppercase">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="engineer@domain.com"
                    className="w-full bg-surface-container border border-outline/30 focus:border-secondary p-space-sm rounded-DEFAULT text-on-surface font-body-sm text-body-sm focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm font-mono text-on-surface-variant block uppercase">GitHub / Portfolio / LinkedIn *</label>
                  <input
                    type="url"
                    required
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/..."
                    className="w-full bg-surface-container border border-outline/30 focus:border-secondary p-space-sm rounded-DEFAULT text-on-surface font-body-sm text-body-sm focus:outline-none"
                  />
                </div>

                <div className="pt-space-xs flex justify-between items-center">
                  <span className="font-mono text-[11px] text-outline">MIHORA RECRUITMENT HQ</span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-space-lg py-2.5 bg-primary-container hover:bg-secondary-container text-on-primary hover:text-on-secondary font-label-md text-label-md uppercase font-bold rounded-DEFAULT transition-all"
                  >
                    <Send size={15} />
                    <span>Dispatch Credentials</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <section id="global-relocation" className="w-full bg-surface px-margin-mobile lg:px-margin py-space-xl scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-space-xl">
          <div className="text-center space-y-space-xs max-w-3xl mx-auto">
            <div className="font-label-sm text-label-sm text-secondary-container uppercase tracking-widest font-bold">// MOBILITY</div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold uppercase tracking-tight">Global Relocation & Deployment</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">We source top engineering talent globally and sponsor complete relocation to our UK and Pakistan dual hubs or major operational zones across the EMEA and APAC regions.</p>
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
