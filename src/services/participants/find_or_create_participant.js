import Participant from "@models/participant"

const findOrCreateParticipant = async (participantName) => {
  const [participant] = await Participant.findOrCreate({
    where: { name: participantName },
  })

  return participant.id
}

export default findOrCreateParticipant
