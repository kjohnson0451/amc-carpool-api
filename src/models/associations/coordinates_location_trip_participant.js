import TripParticipant from "@models/trip_participant"
import CoordinatesLocation from "@models/coordinates_location"

export const loadAssociation = () => {
  CoordinatesLocation.hasMany(TripParticipant)
  TripParticipant.belongsTo(CoordinatesLocation)
}
