import db from "@utils/db"
import getCarpoolGroupById from "@services/carpool_groups/get_carpool_group_by_id"

const deleteCarpoolGroupById = async (carpoolGroupId) => {
  const transaction = await db.transaction()
  const options = { transaction }

  try {
    const carpoolGroup = await getCarpoolGroupById(carpoolGroupId, options)
    const participants = await carpoolGroup.getParticipants(options)

    // If a bunch of participants have been placed into this carpool group
    // we don't want to delete them. Move them up into the carpool group's trip.
    if (participants.length > 0) {
      const trip = await carpoolGroup.getTrip(options)
      for (const participant of participants) {
        await participant.setCarpoolGroup(null, options)
        await participant.setTrip(trip, options)
      }
    }

    await carpoolGroup.destroy(options)

    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default deleteCarpoolGroupById
