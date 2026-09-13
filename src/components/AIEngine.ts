export interface AIResponse {
  summary: string;
  architecturePoints: string[];
  recommendedAction: {
    label: string;
    path: string;
  };
  telemetryCode: string;
}

const KNOWLEDGE_BASE: Array<{
  keywords: string[];
  response: AIResponse;
}> = [
  {
    keywords: ['infra', 'physical', 'cable', 'cabling', 'fiber', 'switch', 'rack', 'hardware', 'datacenter', 'server'],
    response: {
      summary: "MIHORA Physical Infrastructure division delivers sovereign hardware topology: custom server rack containment, certified Fluke fiber/copper verification, SAN enterprise arrays, and high-density leaf-spine network switches.",
      architecturePoints: [
        "Structured Category 6A/7 copper and single-mode OS2 fiber termination.",
        "Precision thermal isolation and redundant ATS (Automatic Transfer Switch) power delivery.",
        "Real-time hardware sensors bridging environmental SCADA into Grafana telemetry."
      ],
      recommendedAction: {
        label: "Inspect Physical Infrastructure Services",
        path: "/services#infra"
      },
      telemetryCode: "NOC_TELEMETRY // PHY_LAYER_01: RACK_TEMP: 19.4°C • FIBER_LOSS: -0.12dB [NOMINAL]"
    }
  },
  {
    keywords: ['layer', '9-layer', 'stack', 'architecture', 'silicon', 'axioms', 'sovereign'],
    response: {
      summary: "The MIHORA 9-Layer Architecture Stack spans from raw silicon substrates to distributed edge intelligence, guaranteeing full vertical sovereignty without third-party vendor lock-in.",
      architecturePoints: [
        "Layers 1-3: Silicon compute, physical structured fiber, and hardware-software firmware bridges.",
        "Layers 4-6: Zero-trust kernel networks, container orchestration, and stateful distributed stores.",
        "Layers 7-9: Autonomous API gateways, intelligence routing pipelines, and sovereign client interfaces."
      ],
      recommendedAction: {
        label: "Explore 9-Layer Architecture Topology",
        path: "/engineering#architecture"
      },
      telemetryCode: "ARCH_VERIFY // FULL_STACK_ATTESTATION: LAYERS 1 THROUGH 9 INTEGRITY VERIFIED [PASSED]"
    }
  },
  {
    keywords: ['ai', 'intelligence', 'automation', 'agent', 'pipeline', 'llm', 'workflow', 'orchestration'],
    response: {
      summary: "MIHORA Intelligence & Automation replaces manual enterprise friction with autonomous deterministic orchestration, real-time telemetry streaming, and safe tool-calling LLM pipelines.",
      architecturePoints: [
        "Event-driven Kafka/NATS streams routing mission telemetry at sub-millisecond latency.",
        "Deterministic guardrails isolating AI agent operations from mission-critical write operations.",
        "Autonomous API reconciliation bridges linking legacy ERPs with modern cloud microservices."
      ],
      recommendedAction: {
        label: "Review Automation & Intelligence Architecture",
        path: "/services#automation"
      },
      telemetryCode: "PIPELINE_ORCH // AGENT_DECISION_ENGINE: LATENCY 1.2ms • DRIFT: 0.00% [OPTIMAL]"
    }
  },
  {
    keywords: ['dispatch', 'emergency', 'contact', 'call', 'rfp', 'urgent', 'field', 'consult'],
    response: {
      summary: "MIHORA maintains 24/7 rapid architectural dispatch. Dual engineering hubs in London and Pakistan allow continuous timezone coverage with under 15-minute emergency SLA responses.",
      architecturePoints: [
        "Tier-3 Systems Architects available for live incident triage and architecture design.",
        "Field Engineering teams equipped for on-site fiber splicing, rack assembly, and node recovery.",
        "Direct encrypted comms via hr@mihora.tech or the secure dispatch portal."
      ],
      recommendedAction: {
        label: "Initiate Priority Dispatch Protocol",
        path: "/contact"
      },
      telemetryCode: "DISPATCH_COMM // GATEWAY_STATUS: DUAL_HUB_READY [UK: ACTIVE • PK: ACTIVE]"
    }
  },
  {
    keywords: ['health', 'healthcare', 'hipaa', 'dicom', 'hl7', 'hospital', 'patient'],
    response: {
      summary: "Our Healthcare Practice enforces strict HIPAA, HL7, and DICOM compliance through isolated zero-trust networks, encrypted PACS storage, and resilient edge node redundancy.",
      architecturePoints: [
        "End-to-end TLS 1.3 encryption with cryptographic air-gapping for sensitive clinical records.",
        "Deterministic failover ensuring hospital patient monitors never experience network drops.",
        "Automated compliance audit trails meeting stringent international medical regulations."
      ],
      recommendedAction: {
        label: "Examine Healthcare Systems Architecture",
        path: "/industries#healthcare"
      },
      telemetryCode: "HL7_ENGINE // COMPLIANCE_MONITOR: ZERO_VIOLATIONS • LATENCY 4ms [SECURED]"
    }
  },
  {
    keywords: ['security', 'compliance', 'soc', 'iso', 'sovereignty', 'gdpr', 'privacy'],
    response: {
      summary: "MIHORA Security Architecture is built upon Zero Trust Principles, ISO 27001 certifications, SOC 2 Type II controls, and complete cryptographic data sovereignty.",
      architecturePoints: [
        "No multi-tenant data bleed; customers retain complete control of their cryptographic keys.",
        "Continuous automated vulnerability scanning across all 9 architectural stack layers.",
        "Guaranteed 99.999% uptime with contractually bound financial SLA commitments."
      ],
      recommendedAction: {
        label: "View Security Governance & Compliance",
        path: "/legal#security"
      },
      telemetryCode: "SEC_OPS // AUDIT_VERIFICATION: SOC2_TYPE2 • ISO_27001 [COMPLIANT]"
    }
  },
  {
    keywords: ['sre', 'managed', '24/7', 'monitoring', 'telemetry', 'noc', 'uptime', 'maintenance'],
    response: {
      summary: "24/7 Managed SRE & Reliability Telemetry provides active anomaly detection, automated failover triggers, and relentless monitoring of distributed nodes across the globe.",
      architecturePoints: [
        "Real-time distributed metric aggregation with Prometheus, OpenTelemetry, and Grafana.",
        "Automated chaos-engineering resilience testing executed directly in staging topologies.",
        "Dedicated Tier-3 engineer on-call rotation with 15-minute P1 response guarantees."
      ],
      recommendedAction: {
        label: "Discover 24/7 Managed Tech Capabilities",
        path: "/services#managed"
      },
      telemetryCode: "SRE_MONITOR // GLOBAL_NODES: 142/142 ONLINE • MTTD: 42s • MTTR: 2.1m"
    }
  }
];

export function queryAIEngine(prompt: string): AIResponse {
  const normalized = prompt.toLowerCase().trim();
  
  // Find matching knowledge
  for (const item of KNOWLEDGE_BASE) {
    if (item.keywords.some(k => normalized.includes(k))) {
      return item.response;
    }
  }

  // Fallback intelligent response for any general engineering question
  return {
    summary: `Analyzing query: "${prompt}". MIHORA.TECH architects custom digital systems, physical infrastructure, and automated telemetry pipelines designed for sovereign resilience.`,
    architecturePoints: [
      "Custom-tailored architectural blueprints matching your exact operational constraints.",
      "Comprehensive 9-layer stack integration avoiding single points of failure.",
      "Dual-hub engineering delivery out of Pakistan & UK with continuous global support."
    ],
    recommendedAction: {
      label: "Schedule Architectural Consultation",
      path: "/contact"
    },
    telemetryCode: "AI_COPILOT // GENERAL_SYNTHESIS: TOPOLOGY_ASSESSMENT [READY]"
  };
}
