import Trip from "@models/trip"
import Participant from "@models/participant"
import TripParticipant from "@models/trip_participant"

export const loadAssociation = () => {
  Participant.hasMany(TripParticipant)
  TripParticipant.belongsTo(Participant)

  Trip.hasMany(TripParticipant)
  TripParticipant.belongsTo(Trip)
}
