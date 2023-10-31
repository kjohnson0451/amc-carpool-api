import db from "@utils/db"
import getTripById from "@services/trips/get_trip_by_id"

const deleteTripById = async (tripId) => {
  const transaction = await db.transaction()
  const options = { transaction }

  try {
    const trip = await getTripById(tripId, options)

    await trip.destroy(options)

    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default deleteTripById
