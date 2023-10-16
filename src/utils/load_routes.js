import fs from "fs"
import path from "path"

const dirToLoadFilesFrom = "../routes"

const loadRoutes = (server) => {
  const routesDir = path.join(__dirname, dirToLoadFilesFrom)

  fs.readdirSync(routesDir).forEach((file) => {
    const filePath = path.join(routesDir, file)
    if (fs.statSync(filePath).isFile() && file.endsWith(".js")) {
      // Grab the filename without extension to make the route name
      const routeName = path.parse(filePath).name
      const { router } = require(filePath)

      server.use(`/${routeName}`, router)
    }
  })
}

export default loadRoutes
