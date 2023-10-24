import { Error404Message } from "@config/strings"
import logger from "@utils/logger"

const error404Controller = (req, res) => {
  res.status(404).send(Error404Message)
  logger.info("This route doesn't exist. Returned a 404.")
}

export default error404Controller
