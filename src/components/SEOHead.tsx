import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
}

const ROUTE_SEO: Record<string, { title: string; description: string; keywords?: string }> = {
  '/': {
    title: 'MIHORA.TECH | Sovereign Engineering & Global Systems Architecture',
    description: 'Resilient digital systems, physical datacenter infrastructure, automated pipelines, and 24/7 global telemetry operations.',
    keywords: 'MIHORA.TECH, sovereign systems, digital engineering, physical infrastructure, cloud architecture, Pakistan tech',
  },
  '/engineering': {
    title: '9-Layer Engineering Architecture | MIHORA.TECH',
    description: 'Silicon to cloud sovereign engineering stack, physical telemetry, hardware-software integration, and production reliability axioms.',
    keywords: '9-layer stack, hardware-software stack, SCADA, telemetry, site reliability, infrastructure engineering',
  },
  '/services': {
    title: 'Engineering Services & Infrastructure Solutions | MIHORA.TECH',
    description: 'Digital engineering, automation & intelligence, physical infrastructure, on-site field engineering, and 24/7 managed SRE.',
    keywords: 'digital engineering, server racks, fiber splicing, automation orchestration, managed SRE, enterprise switches',
  },
  '/solutions': {
    title: 'Sovereign Technical Solutions & Modernization | MIHORA.TECH',
    description: 'Deconstructing legacy monoliths, autonomous business engines, multi-site infrastructure deployments, and remote operations.',
    keywords: 'legacy deconstruction, business automation, edge IoT, remote operations, custom hardware bridges',
  },
  '/industries': {
    title: 'Industry Systems: Healthcare, EdTech, Retail & Telecom | MIHORA.TECH',
    description: 'Tailored mission-critical architectures for healthcare DICOM/HL7, high-density campus EdTech, retail inventory sync, and multi-tenant tech.',
    keywords: 'healthcare tech, HIPAA systems, campus wireless, retail edge POS, logistics telemetry',
  },
  '/company': {
    title: 'Engineering Philosophy, Leadership & Global Footprint | MIHORA.TECH',
    description: 'Uncompromising engineering standards, sovereign technical ownership, and global dispatch capability operating out of Pakistan.',
    keywords: 'engineering philosophy, tech leadership, sovereign technology, global engineering dispatch',
  },
  '/insights': {
    title: 'Technical Papers, Architectural Blueprints & Insights | MIHORA.TECH',
    description: 'Deep-dive architectural papers, benchmark telemetry, and field reports authored by MIHORA.TECH principal engineers.',
    keywords: 'technical whitepapers, systems research, datacenter benchmarks, latency optimization',
  },
  '/careers': {
    title: 'Careers in Sovereign Engineering & Systems Design | MIHORA.TECH',
    description: 'Join MIHORA.TECH as a systems architect, firmware specialist, distributed systems engineer, or field engineering technician.',
    keywords: 'engineering jobs, tech careers Pakistan, systems architect, site reliability jobs',
  },
  '/contact': {
    title: 'Dispatch Architectural Engineering & Consulting | MIHORA.TECH',
    description: 'Initiate urgent engineering dispatch, schedule an architectural consultation, or submit RFPs directly to MIHORA.TECH engineers.',
    keywords: 'contact engineers, emergency tech dispatch, RFP submission, architecture consult',
  },
  '/legal': {
    title: 'Security Compliance, ISO 27001 & Legal Governance | MIHORA.TECH',
    description: 'Data sovereignty, SOC 2 Type II compliance standards, strict confidentiality protocols, and operational terms.',
    keywords: 'security compliance, ISO 27001, SOC 2, data sovereignty, SLA guarantees',
  },
};

export function SEOHead({ title, description, keywords, canonicalPath }: SEOProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const config = ROUTE_SEO[currentPath] || {
    title: 'MIHORA.TECH | Sovereign Engineering',
    description: 'Technology Without Boundaries. Digital systems. Physical infrastructure. Human engineering. Global delivery.',
  };

  const finalTitle = title || config.title;
  const finalDescription = description || config.description;
  const finalKeywords = keywords || config.keywords || 'MIHORA.TECH, sovereign engineering, digital infrastructure';
  const finalCanonical = `https://mihora.tech/#${canonicalPath || currentPath}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = finalTitle;

    // 2. Helper to set or update meta tag
    const setMeta = (selector: string, attribute: 'name' | 'property', name: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attribute, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Update Standard Meta
    setMeta('meta[name="description"]', 'name', 'description', finalDescription);
    setMeta('meta[name="keywords"]', 'name', 'keywords', finalKeywords);

    // 4. Update OpenGraph Meta
    setMeta('meta[property="og:title"]', 'property', 'og:title', finalTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', finalDescription);
    setMeta('meta[property="og:url"]', 'property', 'og:url', finalCanonical);

    // 5. Update Twitter Meta
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', finalTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', finalDescription);

    // 6. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.href = finalCanonical;
    }
  }, [finalTitle, finalDescription, finalKeywords, finalCanonical]);

  return null;
}
