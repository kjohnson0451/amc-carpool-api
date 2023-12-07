import db from "@utils/db"
import { ParticipantNotInCarpoolGroupError } from "@utils/errors"
import getParticipantById from "@services/participants/get_participant_by_id"

const removeParticipantFromCarpoolGroup = async (participantId) => {
  const transaction = await db.transaction()
  const options = { transaction }
  try {
    const participant = await getParticipantById(participantId, options)
    const carpoolGroup = await participant.getCarpoolGroup(options)

    if (!carpoolGroup) {
      throw new ParticipantNotInCarpoolGroupError()
    }

    const trip = await carpoolGroup.getTrip(options)
    await participant.setCarpoolGroup(null, options)
    await participant.setTrip(trip, options)

    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default removeParticipantFromCarpoolGroup
