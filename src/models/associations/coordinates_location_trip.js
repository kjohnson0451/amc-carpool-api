import Trip from "@models/trip"
import CoordinatesLocation from "@models/coordinates_location"

export const loadAssociation = () => {
  CoordinatesLocation.hasMany(Trip)
  Trip.belongsTo(CoordinatesLocation)
}
