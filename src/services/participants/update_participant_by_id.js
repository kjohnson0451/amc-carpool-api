import Participant from "@models/participant"
import findOrCreateAddressLocation from "@services/address_locations/find_or_create_address_location"

const updateParticipantById = async (
  participantId,
  participantData,
  options = {},
) => {
  const existingParticipant = await Participant.findByPk(participantId, {
    rejectOnEmpty: true,
    ...options,
  })

  const { address: addressData } = participantData

  const address = await findOrCreateAddressLocation(addressData, options)

  await existingParticipant.setAddressLocation(address, options)

  return existingParticipant
}

export default updateParticipantById
