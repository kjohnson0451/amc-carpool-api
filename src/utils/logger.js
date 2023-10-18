// logger.js

import winston from "winston"
import { NodeEnv } from "@config/environment_variables"

const dirname = "log"

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
})

//
// If we're in development then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
// If we're in production, then log to files
//
if (NodeEnv === "development") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  )
} else {
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
