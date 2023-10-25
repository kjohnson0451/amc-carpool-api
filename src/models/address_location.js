import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import { DataTypes } from "sequelize"

const modelName = "AddressLocation"
const schema = CarpoolSchema

const AddressLocation = db.define(
  modelName,
  {
    streetAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING(20),
    },
    country: {
      type: DataTypes.STRING(100),
    },
  },
  {
    schema,
    timestamps: false,
  },
)

export default AddressLocation
