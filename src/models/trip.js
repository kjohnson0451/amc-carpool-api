import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import { DataTypes } from "sequelize"

const modelName = "Trip"
const schema = CarpoolSchema

const Trip = db.define(
  modelName,
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
    },
    trailhead: {
      type: DataTypes.STRING(255),
    },
  },
  {
    schema,
  },
)

export default Trip
