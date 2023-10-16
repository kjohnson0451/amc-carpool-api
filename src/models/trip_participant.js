import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import AddressLocation from "@models/address_location"
import CoordinatesLocation from "@models/coordinates_location"
import hasJustOneOfAddressOrCoordinates from "@utils/validators/has_just_one_of_address_or_coordinates"

const modelName = "TripParticipant"
const schema = CarpoolSchema

const TripParticipant = db.define(
  modelName,
  {},
  {
    schema,
    timestamps: false,
    validate: {
      hasJustOneOfAddressOrCoordinates,
    },
  },
)

AddressLocation.hasMany(TripParticipant)
TripParticipant.belongsTo(AddressLocation)

CoordinatesLocation.hasMany(TripParticipant)
TripParticipant.belongsTo(CoordinatesLocation)

export default TripParticipant
