import { StatusCodes, ReasonPhrases } from "http-status-codes"
import { RootMessage } from "@config/strings"
// import syncDb from "@utils/sync_db"

const rootController = async (req, res) => {
  // await syncDb()
  const code = StatusCodes.OK
  const status = ReasonPhrases.OK
  const data = { code, status, message: RootMessage }

  res.send(data)
}

export default rootController
