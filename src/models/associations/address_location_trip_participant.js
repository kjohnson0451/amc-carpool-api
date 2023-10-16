import TripParticipant from "@models/trip_participant"
import AddressLocation from "@models/address_location"

export const loadAssociation = () => {
  AddressLocation.hasMany(TripParticipant)
  TripParticipant.belongsTo(AddressLocation)
}
