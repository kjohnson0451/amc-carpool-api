import express from "express"
import "dotenv/config"
import logger from "@utils/logger"
import requestLogger from "@middleware/logger/request-logger"

const server = express()
const port = 3000

server.use(requestLogger)

server.listen(port, () => {
  logger.info(`Server is running on port ${port}`)
})
