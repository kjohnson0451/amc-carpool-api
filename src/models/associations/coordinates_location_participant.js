import Participant from "@models/participant"
import CoordinatesLocation from "@models/coordinates_location"

export const loadAssociation = () => {
  CoordinatesLocation.hasMany(Participant)
  Participant.belongsTo(CoordinatesLocation)
}
