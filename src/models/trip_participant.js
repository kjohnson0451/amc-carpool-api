import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import Participant from "@models/participant"
import Trip from "@models/trip"
import AddressLocation from "@models/address_location"
import CoordinatesLocation from "@models/coordinates_location"

const modelName = "TripParticipant"
const schema = CarpoolSchema

const TripParticipant = db.define(
  modelName,
  {},
  {
    schema,
    timestamps: false,
  },
)

Participant.belongsToMany(Trip, {
  through: TripParticipant,
})
Trip.belongsToMany(Participant, {
  through: TripParticipant,
})

TripParticipant.hasOne(AddressLocation)
AddressLocation.belongsTo(TripParticipant)

TripParticipant.hasOne(CoordinatesLocation)
CoordinatesLocation.belongsTo(TripParticipant)

export default TripParticipant
