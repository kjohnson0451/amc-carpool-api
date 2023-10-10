import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import { DataTypes } from "sequelize"

const modelName = "CoordinatesLocation"
const schema = CarpoolSchema

const CoordinatesLocation = db.define(
  modelName,
  {
    latitude: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 6),
      allowNull: false,
    },
  },
  {
    schema,
    timestamps: false,
  },
)

export default CoordinatesLocation
