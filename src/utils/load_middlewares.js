import requestLogger from "@middleware/logger/request_logger"

// I might want to change this into a loop that iterates
// through the src/middleware/ subdir, but this will do for now
const loadMiddlewares = (server) => {
  server.use(requestLogger)
}

export default loadMiddlewares
