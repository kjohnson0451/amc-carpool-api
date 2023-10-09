import logger from "@utils/logger.js"

// requestLogger
//
// Prints details of every single API request
const requestLogger = (req, res, next) => {
  const { method, url } = req
  const excludedUrls = ["/favicon.ico"]

  if (excludedUrls.includes(url)) {
    next()
    return
  }

  logger.info(`Request URL: ${url}, Method: ${method}`)

  next()
}

export default requestLogger
