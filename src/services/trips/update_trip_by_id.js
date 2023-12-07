import db from "@utils/db"
import Trip from "@models/trip"

const updateTripById = async (tripId, tripData) => {
  const transaction = await db.transaction()
  const options = { transaction }

  try {
    const existingTrip = await Trip.findByPk(tripId, {
      rejectOnEmpty: true,
      ...options,
    })
    await existingTrip.update(tripData, options)

    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    if (error.name === "SequelizeEmptyResultError") {
      error.name = "TripNotFoundError"
    }
    throw error
  }
}

export default updateTripById
