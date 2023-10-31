import db from "@utils/db"
import createParticipant from "@services/participants/create_participant"
import getTripById from "@services/trips/get_trip_by_id"

const createParticipantAndAddToTripById = async (personData, tripId) => {
  const transaction = await db.transaction()
  const options = { transaction }
  try {
    const trip = await getTripById(tripId, options)
    const participant = await createParticipant(personData, options)

    await trip.addParticipant(participant, options)

    await transaction.commit()
    return participant
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default createParticipantAndAddToTripById
