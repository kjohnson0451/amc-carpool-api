import db from "@utils/db"
import createCarpoolGroup from "@services/carpool_groups/create_carpool_group"
import getTripById from "@services/trips/get_trip_by_id"

const createCarpoolGroupAndAddToTripById = async (tripId) => {
  const transaction = await db.transaction()
  const options = { transaction }
  try {
    const trip = await getTripById(tripId, options)
    const carpoolGroup = await createCarpoolGroup(options)

    await trip.addCarpoolGroup(carpoolGroup, options)

    await transaction.commit()
    return carpoolGroup
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default createCarpoolGroupAndAddToTripById
