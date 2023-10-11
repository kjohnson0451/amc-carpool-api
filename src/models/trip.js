import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import { DataTypes } from "sequelize"
import AddressLocation from "@models/address_location"
import CoordinatesLocation from "@models/coordinates_location"

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
  },
  {
    schema,
    timestamps: false,
  },
)

AddressLocation.hasMany(Trip)
Trip.belongsTo(AddressLocation)

CoordinatesLocation.hasMany(Trip)
Trip.belongsTo(CoordinatesLocation)

export default Trip
