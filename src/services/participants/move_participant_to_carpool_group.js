import db from "@utils/db"
import getParticipantById from "@services/participants/get_participant_by_id"
import getCarpoolGroupById from "@services/carpool_groups/get_carpool_group_by_id"

const moveParticipantToCarpoolGroup = async (participantId, carpoolGroupId) => {
  const transaction = await db.transaction()
  const options = { transaction }
  try {
    const participant = await getParticipantById(participantId, options)
    const carpoolGroupDestination = await getCarpoolGroupById(
      carpoolGroupId,
      options,
    )

    await participant.setTrip(null, options)
    await participant.setCarpoolGroup(carpoolGroupDestination, options)

    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default moveParticipantToCarpoolGroup
