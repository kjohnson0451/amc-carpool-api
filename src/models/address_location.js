import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import { DataTypes } from "sequelize"

const modelName = "AddressLocation"
const schema = CarpoolSchema

const AddressLocation = db.define(
  modelName,
  {
    street_address1: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    street_address2: {
      type: DataTypes.STRING(255),
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    postal_code: {
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
