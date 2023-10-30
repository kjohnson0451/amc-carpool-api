import db from "@utils/db"
import Trip from "@models/trip"
import createParticipant from "@services/participants/create_participant"
import findOrCreateAddressLocation from "@services/address_locations/find_or_create_address_location"

const createTrip = async (tripData) => {
  const transaction = await db.transaction()
  const options = { transaction }
  try {
    const {
      name,
      address: addressData,
      participants: participantsData,
    } = tripData

    const tripAttributes = { name }
    const trip = await Trip.create(tripAttributes, options)

    const address = await findOrCreateAddressLocation(addressData, options)
    await trip.setAddressLocation(address, options)

    for (const participantData of participantsData) {
      const participant = await createParticipant(participantData, options)
      await trip.addParticipant(participant, options)
    }

    await transaction.commit()
    return trip
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default createTrip
