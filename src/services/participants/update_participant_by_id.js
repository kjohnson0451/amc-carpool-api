import db from "@utils/db"
import getParticipantById from "@services/participants/get_participant_by_id"

const updateParticipantById = async (participantId, participantData) => {
  const transaction = await db.transaction()
  const options = { transaction }

  try {
    const existingParticipant = await getParticipantById(participantId, options)

    await existingParticipant.update(participantData, options)

    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default updateParticipantById
