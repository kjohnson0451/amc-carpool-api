import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
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

export default TripParticipant
