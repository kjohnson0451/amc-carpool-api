import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import { DataTypes } from "sequelize"
import AddressLocation from "@models/address_location"
import CoordinatesLocation from "@models/coordinates_location"
import hasJustOneOfAddressOrCoordinates from "@utils/validators/has_just_one_of_address_or_coordinates"

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
    validate: {
      hasJustOneOfAddressOrCoordinates,
    },
  },
)

AddressLocation.hasMany(Trip)
Trip.belongsTo(AddressLocation)

CoordinatesLocation.hasMany(Trip)
Trip.belongsTo(CoordinatesLocation)

export default Trip
