import { RootMessage } from "@config/strings"

const rootController = (req, res) => {
  res.send(RootMessage)
}

export default rootController
