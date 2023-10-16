import { Error404Message } from "@config/strings"

const error404 = (req, res) => {
  res.send(Error404Message)
}

export default error404
