import Participant from "@models/participant"

const findOrCreateParticipant = async (participantData, options = {}) => {
  const [participant] = await Participant.findOrCreate({
    where: participantData,
    ...options,
  })

  return participant
}

export default findOrCreateParticipant
