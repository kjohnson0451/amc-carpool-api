import Participant from "@models/participant"

const getParticipantById = async (participantId, options = {}) => {
  try {
    const participant = await Participant.findByPk(participantId, {
      attributes: ["id", "CarpoolGroupId"],
      rejectOnEmpty: true,
      ...options,
    })
    return participant
  } catch (error) {
    if (error.name === "SequelizeEmptyResultError") {
      error.name = "ParticipantNotFoundError"
    }
    throw error
  }
}

export default getParticipantById
