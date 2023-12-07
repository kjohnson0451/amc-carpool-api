import db from "@utils/db"
import createParticipant from "@services/participants/create_participant"
import getCarpoolGroupById from "@services/carpool_groups/get_carpool_group_by_id"

const createParticipantAndAddToCarpoolGroupById = async (
  participantData,
  carpoolGroupId,
) => {
  const transaction = await db.transaction()
  const options = { transaction }
  try {
    const carpoolGroup = await getCarpoolGroupById(carpoolGroupId, options)
    const participant = await createParticipant(participantData, options)

    await carpoolGroup.addParticipant(participant, options)

    await transaction.commit()
    return participant
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default createParticipantAndAddToCarpoolGroupById
