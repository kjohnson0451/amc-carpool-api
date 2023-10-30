import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"

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

export default TripParticipant
