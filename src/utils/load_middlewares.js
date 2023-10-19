import helmet from "helmet"
import requestLogger from "@middleware/logger/request_logger"
import { NodeEnv } from "@config/environment_variables"

// I might want to change this into a loop that iterates
// through the src/middleware/ subdir, but this will do for now
const loadMiddlewares = (server) => {
  // Log every request made to the server
  server.use(requestLogger)

  if (NodeEnv !== "development") {
    // Use the helmet package to send security related HTTP headers
    server.use(helmet())
  }
}

export default loadMiddlewares
