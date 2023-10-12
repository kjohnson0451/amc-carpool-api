import express from "express"
import "dotenv/config"
import logger from "@utils/logger"
import loadMiddlewares from "@utils/load_middlewares.js"

const server = express()
const port = 3000

loadMiddlewares(server)

server.get("/", (req, res) => {
  res.send("Hello World!")
})

server.listen(port, () => {
  logger.info(`Server is running on port ${port}`)
})
