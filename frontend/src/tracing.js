import { WebTracerProvider } from "@opentelemetry/sdk-trace-web";

import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";

import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";

import { registerInstrumentations } from "@opentelemetry/instrumentation";

import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch";

import { XMLHttpRequestInstrumentation } from "@opentelemetry/instrumentation-xml-http-request";

import { ZoneContextManager } from "@opentelemetry/context-zone";

import { resourceFromAttributes } from "@opentelemetry/resources";



const exporter = new OTLPTraceExporter({
  url: "http://otel.internal/v1/traces",
});



const provider = new WebTracerProvider({
  resource: resourceFromAttributes({
    "service.name": "portfolio-frontend",
  }),

  spanProcessors: [
    new BatchSpanProcessor(exporter),
  ],
});



provider.register({
  contextManager: new ZoneContextManager(),
});



registerInstrumentations({
  instrumentations: [

    new FetchInstrumentation({
      propagateTraceHeaderCorsUrls: [/.*/],
      clearTimingResources: true,
    }),

    new XMLHttpRequestInstrumentation({
      propagateTraceHeaderCorsUrls: [/.*/],
    }),
  ],
});



console.log("Frontend OpenTelemetry initialized");