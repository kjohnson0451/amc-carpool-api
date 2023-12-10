import cors from "cors"
import { isDevMode } from "@utils/node_env"
import { FrontEndDomain } from "@config/environment_variables"

const loadCors = (server) => {
  const prodCorsOptions = {
    origin: FrontEndDomain,
    methods: "GET,POST,PATCH,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  }
  const corsOptions = isDevMode ? {} : prodCorsOptions
  server.use(cors(corsOptions))
}

export default loadCors
