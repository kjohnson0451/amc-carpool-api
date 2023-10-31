import logger from "@utils/logger"

// requestLogger
//
// Prints details of every single API request
const requestLogger = (req, res, next) => {
  const { method, url } = req

  logger.info("Request:", { method, url })

  next()
}

export default requestLogger
