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
    keywords: ['founder', 'founders', 'hasnain', 'matti', 'omema', 'iqbal', 'who founded', 'owner', 'ceo', 'leadership'],
    response: {
      summary: "MIHORA.TECH was founded by M. Matti ul Hasnain (Co-Founder & Principal Systems Architect) and Omema Iqbal (Co-Founder & Operations Director) to pioneer sovereign full-stack engineering, physical datacenter infrastructure, and 24/7 global telemetry operations.",
      architecturePoints: [
        "M. Matti ul Hasnain commands systems architecture, sovereign low-latency cloud design, and physical datacenter hardware deployments.",
        "Omema Iqbal directs global operations, international enterprise governance, dual-hub delivery frameworks, and multi-jurisdiction compliance.",
        "Operating synchronized dual engineering command centers in Islamabad (Pakistan) and London (UK)."
      ],
      recommendedAction: {
        label: "View Leadership & Founders Profile",
        path: "/company#leadership"
      },
      telemetryCode: "GOVERNANCE_EXEC // FOUNDERS_VERIFIED: M. MATTI UL HASNAIN & OMEMA IQBAL [ACTIVE]"
    }
  },
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
    keywords: ['field', 'fluke', 'splicing', 'cctv', 'surveillance', 'dispatch', 'break-fix'],
    response: {
      summary: "MIHORA Field Engineering deploys boots-on-the-ground technical teams with calibrated fusion splicers and Fluke DSX-8000 certifiers for emergency break-fix and site commissioning.",
      architecturePoints: [
        "Rapid 4-hour SLA physical emergency dispatch across active regional coverage zones.",
        "End-to-end OTDR fiber loss certification and structured low-voltage certification.",
        "Industrial CCTV, access control, and biometric hardware installations."
      ],
      recommendedAction: {
        label: "View Field Engineering Capabilities",
        path: "/services#field"
      },
      telemetryCode: "FIELD_OPS // DISPATCH_READY: FLUKE_CALIBRATED • OTDR_READY [ACTIVE]"
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
    summary: `Analyzing query: "${prompt}". MIHORA.TECH, founded by M. Matti ul Hasnain and Omema Iqbal, architects custom digital systems, physical infrastructure, and automated telemetry pipelines designed for sovereign resilience.`,
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
