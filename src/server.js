import express from "express"
import "dotenv/config"
import logger from "@utils/logger"
import loadMiddlewares from "@utils/load_middlewares.js"
import ServerPort from "@config/server_port"
import { MainConsoleMessage } from "@config/strings"

const server = express()

loadMiddlewares(server)

server.listen(ServerPort, () => {
  logger.info(MainConsoleMessage)
})
