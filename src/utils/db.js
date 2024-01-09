/* the indentation under dialectOptions messes up */
/* with both prettier and eslint */
/* eslint-disable indent */
import Sequelize from "sequelize"
import { PgUrl } from "@config/environment_variables"
import logger from "@utils/logger"
import { isProdMode } from "@utils/node_env"

const dialectOptions = isProdMode()
  ? {
      ssl: {
        rejectUnauthorized: true,
      },
    }
  : {}

const db = new Sequelize(PgUrl, {
  dialect: "postgres",
  dialectOptions,
  logging: (msg) => logger.info(msg),
})

export default db
