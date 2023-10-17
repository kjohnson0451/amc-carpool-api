import Sequelize from "sequelize"
import { PgUrl } from "@config/environment_variables"
import logger from "@utils/logger"

const db = new Sequelize(PgUrl, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  logging: (msg) => logger.info(msg),
})

export default db
