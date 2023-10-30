import db from "@utils/db"
import Trip from "@models/trip"
import createParticipantForTrip from "@services/participants/create_participant_for_trip"
import findOrCreateAddress from "@services/addresses/find_or_create_address"

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

    const address = await findOrCreateAddress(addressData, options)
    await trip.setAddressLocation(address, options)

    for (const participantData of participantsData) {
      const tripParticipant = await createParticipantForTrip(
        participantData,
        options,
      )
      await trip.addTripParticipant(tripParticipant, options)
    }

    await transaction.commit()
    return trip
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default createTrip
