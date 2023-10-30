import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import Trip from "@models/trip"
import Person from "@models/person"
import CoordinatesLocation from "@models/coordinates_location"
import AddressLocation from "@models/address_location"

const modelName = "Participant"
const schema = CarpoolSchema

const Participant = db.define(
  modelName,
  {},
  {
    schema,
  },
)

Person.hasMany(Participant)
Participant.belongsTo(Person)

Trip.hasMany(Participant)
Participant.belongsTo(Trip)

CoordinatesLocation.hasMany(Participant)
Participant.belongsTo(CoordinatesLocation)

AddressLocation.hasMany(Participant)
Participant.belongsTo(AddressLocation)

export default Participant
