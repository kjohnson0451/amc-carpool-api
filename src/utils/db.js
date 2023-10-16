import Sequelize from "sequelize"
import { PgUrl } from "@config/environment_variables"

const db = new Sequelize(PgUrl, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
})

export default db
