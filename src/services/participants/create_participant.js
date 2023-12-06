import Participant from "@models/participant"

const createParticipant = async (participantData, options = {}) => {
  const participant = await Participant.create(participantData, options)

  return participant
}

export default createParticipant
