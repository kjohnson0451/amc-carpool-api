import { StatusCodes, ReasonPhrases } from "http-status-codes"
import { Error404Message } from "@config/strings"

const error404Controller = (req, res) => {
  const code = StatusCodes.NOT_FOUND
  const status = ReasonPhrases.NOT_FOUND
  const errorMessage = Error404Message

  const data = { code, status, errorMessage }

  res.status(code).json(data)
}

export default error404Controller
