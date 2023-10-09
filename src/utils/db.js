import Sequelize from "sequelize"

const db = new Sequelize(process.env.PG_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
})

export default db
