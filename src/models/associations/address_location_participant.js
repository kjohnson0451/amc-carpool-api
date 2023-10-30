import Participant from "@models/participant"
import AddressLocation from "@models/address_location"

export const loadAssociation = () => {
  AddressLocation.hasMany(Participant)
  Participant.belongsTo(AddressLocation)
}
