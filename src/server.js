import express from "express"
import "dotenv/config"
import logger from "@utils/logger"
import loadMiddlewares from "@utils/load_middlewares.js"
import loadRoutes from "@utils/load_routes"
import loadAssociations from "@utils/load_associations"
import root from "@controllers/root"
import error404 from "@controllers/error_404"
import { MainConsoleMessage } from "@config/strings"
import { ServerPort } from "@config/environment_variables"

const server = express()

loadMiddlewares(server)
loadRoutes(server)
loadAssociations()

server.use("/", root)
server.use(error404)

server.listen(ServerPort, () => {
  logger.info(MainConsoleMessage)
})
