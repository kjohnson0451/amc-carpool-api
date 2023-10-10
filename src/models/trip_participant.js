import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import Participant from "@models/participant"
import Trip from "@models/trip"

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
  foreignKey: "participant_id",
})
Trip.belongsToMany(Participant, {
  through: TripParticipant,
  foreignKey: "trip_id",
})

export default TripParticipant
