import Participant from "@models/participant"
import Person from "@models/person"
import AddressLocation from "@models/address_location"

const getParticipantById = async (participantId, options = {}) => {
  const participant = await Participant.findByPk(participantId, {
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
    attributes: ["id", "PersonId", "AddressLocationId"],
    rejectOnEmpty: true,
    ...options,
  })
  return participant
}

export default getParticipantById
