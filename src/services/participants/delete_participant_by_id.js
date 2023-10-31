import db from "@utils/db"
import getParticipantById from "@services/participants/get_participant_by_id"

const deleteParticipantById = async (participantId) => {
  const transaction = await db.transaction()
  const options = { transaction }

  try {
    const participant = await getParticipantById(participantId, options)

    await participant.destroy(options)

    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default deleteParticipantById
