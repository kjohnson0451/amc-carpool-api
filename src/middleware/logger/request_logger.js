import logger from "@utils/logger"
import ExcludeFromRequestLogger from "@config/exclude_from_request_logger"

// requestLogger
//
// Prints details of every single API request
const requestLogger = (req, res, next) => {
  const { method, url } = req

  // Don't bother logging requests to certain routes
  if (ExcludeFromRequestLogger.includes(url)) {
    next()
    return
  }

  logger.info(`Request URL: ${url}, Method: ${method}`)

  next()
}

export default requestLogger
