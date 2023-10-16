import Trip from "@models/trip"
import Participant from "@models/participant"
import TripParticipant from "@models/trip_participant"

export const loadAssociation = () => {
  Participant.belongsToMany(Trip, {
    through: TripParticipant,
  })
  Trip.belongsToMany(Participant, {
    through: TripParticipant,
  })
}
