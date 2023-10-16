import Trip from "@models/trip"
import AddressLocation from "@models/address_location"

export const loadAssociation = () => {
  AddressLocation.hasMany(Trip)
  Trip.belongsTo(AddressLocation)
}
