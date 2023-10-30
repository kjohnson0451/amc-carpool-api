import TripParticipant from "@models/trip_participant"
import findOrCreateParticipant from "@services/participants/find_or_create_participant"
import findOrCreateAddress from "@services/addresses/find_or_create_address"

const createParticipantForTrip = async (participantData, options = {}) => {
  const { name, address: addressData } = participantData
  const tripParticipant = await TripParticipant.create({}, options)

  const participantAttributes = { name }
  const participant = await findOrCreateParticipant(
    participantAttributes,
    options,
  )

  const address = await findOrCreateAddress(addressData, options)

  await tripParticipant.setParticipant(participant, options)
  await tripParticipant.setAddressLocation(address, options)

  return tripParticipant
}

export default createParticipantForTrip
