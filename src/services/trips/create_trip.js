import db from "@utils/db"
import Trip from "@models/trip"

const createTrip = async (tripData) => {
  const transaction = await db.transaction()
  const options = { transaction }
  try {
    const trip = await Trip.create(tripData, options)

    await transaction.commit()
    return trip
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default createTrip
