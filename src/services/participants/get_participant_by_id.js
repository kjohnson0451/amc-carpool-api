import Participant from "@models/participant"
import Person from "@models/person"
import AddressLocation from "@models/address_location"

const getParticipantById = async (tripId) => {
  const participant = await Participant.findByPk(tripId, {
    include: [
      {
        model: Person,
        attributes: ["name"],
      },
      {
        model: AddressLocation,
        attributes: ["streetAddress", "city", "state", "postalCode", "country"],
      },
    ],
    attributes: ["PersonId", "AddressLocationId"],
    rejectOnEmpty: true,
  })
  return participant
}

export default getParticipantById
