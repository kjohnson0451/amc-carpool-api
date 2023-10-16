import Trip from "@models/trip"
import CoordinatesLocation from "@models/address_location"

export const loadAssociation = () => {
  CoordinatesLocation.hasMany(Trip)
  Trip.belongsTo(CoordinatesLocation)
}
