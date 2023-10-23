import { RootMessage } from "@config/strings"

const root = (req, res) => {
  res.send(RootMessage)
}

export default root
