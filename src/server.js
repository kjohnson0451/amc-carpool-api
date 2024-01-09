import express from "express"
import logger from "@utils/logger"
import loadMiddlewares from "@utils/load_middlewares"
import loadRoutes from "@utils/load_routes"
import loadCors from "@utils/load_cors"
import syncDb from "@utils/sync_db"
import { isDevMode } from "@utils/node_env"
import rootController from "@controllers/root_controller"
import error404Controller from "@controllers/error_404_controller"
import { MainConsoleMessage } from "@config/strings"
import { ServerPort } from "@config/environment_variables"

const startServer = async () => {
  const server = express()

  loadCors(server)
  loadMiddlewares(server)
  loadRoutes(server)

  server.get("/", rootController)
  server.use(error404Controller)

  if (isDevMode()) {
    await syncDb()
  }

  server.listen(ServerPort, () => {
    logger.info(MainConsoleMessage)
  })
}

startServer()
