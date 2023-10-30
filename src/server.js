import express from "express"
import "dotenv/config"
import logger from "@utils/logger"
import loadMiddlewares from "@utils/load_middlewares.js"
import loadRoutes from "@utils/load_routes"
import rootController from "@controllers/root_controller"
import error404Controller from "@controllers/error_404_controller"
import faviconController from "@controllers/favicon_controller"
import { MainConsoleMessage } from "@config/strings"
import { ServerPort } from "@config/environment_variables"

const server = express()

server.get("/favicon.ico", faviconController)

loadMiddlewares(server)
loadRoutes(server)

server.get("/", rootController)
server.use(error404Controller)

server.listen(ServerPort, () => {
  logger.info(MainConsoleMessage)
})
