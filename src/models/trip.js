import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import { DataTypes } from "sequelize"
import hasJustOneOfAddressOrCoordinates from "@utils/validators/has_just_one_of_address_or_coordinates"

const modelName = "Trip"
const schema = CarpoolSchema

const Trip = db.define(
  modelName,
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,
    },
  },
  {
    schema,
    timestamps: false,
    validate: {
      hasJustOneOfAddressOrCoordinates,
    },
  },
)

export default Trip
