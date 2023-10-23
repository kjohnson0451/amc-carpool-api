// logger.js
import winston from "winston"
import { isProdMode } from "@utils/node_env"

const dirname = "log"

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
})

// If we're in production, then log to files
if (isProdMode()) {
  logger
    .add(
      new winston.transports.File({
        dirname,
        filename: "error.log",
        level: "error",
      }),
    )
    .add(new winston.transports.File({ dirname, filename: "combined.log" }))
}

export default logger
