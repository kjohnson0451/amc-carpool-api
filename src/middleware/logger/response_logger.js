import logger from "@utils/logger"

const responseLogger = (req, res, next) => {
  res.on("finish", () => {
    const { statusCode, statusMessage } = res
    logger.info("Response:", { statusCode, statusMessage })
  })
  next()
}

export default responseLogger
