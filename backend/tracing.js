process.env.OTEL_SERVICE_NAME = "portfolio-backend";

const { NodeSDK } = require("@opentelemetry/sdk-node");

const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");

const {
  OTLPTraceExporter,
} = require("@opentelemetry/exporter-trace-otlp-grpc");


// OTLP gRPC exporter → OpenTelemetry Collector
const traceExporter = new OTLPTraceExporter({

  // LOCAL TESTING
  // url: "http://localhost:4317",

  // KUBERNETES VERSION
  url: "http://otel-collector-opentelemetry-collector.monitoring:4317",
});


// Initialize OpenTelemetry SDK
const sdk = new NodeSDK({

  traceExporter,

  instrumentations: [
    getNodeAutoInstrumentations(),
  ],
});


// Start SDK
sdk.start();

console.log("OpenTelemetry tracing initialized");


// Graceful shutdown
process.on("SIGTERM", async () => {
  try {
    await sdk.shutdown();
    console.log("Tracing terminated");
  } catch (error) {
    console.log("Error terminating tracing", error);
  }
});