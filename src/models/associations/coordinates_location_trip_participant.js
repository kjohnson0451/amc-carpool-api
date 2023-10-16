import TripParticipant from "@models/trip_participant"
import CoordinatesLocation from "@models/address_location"

export const loadAssociation = () => {
  CoordinatesLocation.hasMany(TripParticipant)
  TripParticipant.belongsTo(CoordinatesLocation)
}
