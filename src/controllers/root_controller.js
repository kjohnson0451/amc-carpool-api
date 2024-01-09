import { StatusCodes, ReasonPhrases } from "http-status-codes"
import { RootMessage } from "@config/strings"

const rootController = async (req, res) => {
  const code = StatusCodes.OK
  const status = ReasonPhrases.OK
  const data = { code, status, message: RootMessage }

  res.send(data)
}

export default rootController
