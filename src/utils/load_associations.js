import fs from "fs"
import path from "path"

const dirToLoadFilesFrom = "../models/associations"

const loadAssociations = () => {
  const routesDir = path.join(__dirname, dirToLoadFilesFrom)

  fs.readdirSync(routesDir).forEach((file) => {
    const filePath = path.join(routesDir, file)
    if (fs.statSync(filePath).isFile() && file.endsWith(".js")) {
      const { loadAssociation } = require(filePath)
      loadAssociation()
    }
  })
}

export default loadAssociations
