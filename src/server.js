import express from "express"
import logger from "@utils/logger"
import requestLogger from "@middleware/logger/request-logger"

const app = express()
const port = 3000

app.use(requestLogger)

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`)
})
