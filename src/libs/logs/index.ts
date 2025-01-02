import pino from "pino";
import { LOG_LEVEL } from "astro:env/client";

const targets = [];

if (process.env.NODE_ENV === "development") {
  targets.push({
    target: "pino/file",
    options: { destination: 1 }, // this writes to STDOUT
  });
}

if (process.env.NODE_ENV === "production") {
  const todayPrefix = new Date().toISOString().slice(0, 10);
  targets.push({
    level: "info",
    target: "pino/file",
    options: { destination: `./logs/${todayPrefix}.app.log`, mkdir: true },
  });
  targets.push({
    level: "error",
    target: "pino/file",
    options: { destination: `./logs/${todayPrefix}.error.log`, mkdir: true },
  });
}

const transport = pino.transport({
  targets,
});

const logger = pino(
  {
    level: LOG_LEVEL,
    formatters: {
      bindings(bindings) {
        // We do not want the host, but the node version
        return {
          pid: bindings.pid,
          node: process.version,
        };
      },
      // Note: level is not customizable for multi transport
    },
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  transport,
);

export { logger };
