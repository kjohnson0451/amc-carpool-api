// logger.js
import winston from "winston"
import { isProdMode, isDevMode } from "@utils/node_env"

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
if (isDevMode()) {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  )
}
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
