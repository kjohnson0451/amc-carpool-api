import Participant from "@models/participant"

const getParticipantById = async (participantId, options = {}) => {
  const participant = await Participant.findByPk(participantId, {
    attributes: [
      "id",
      "name",
      "status",
      "departureTime",
      "departureLocation",
      "email",
      "phone",
    ],
    rejectOnEmpty: true,
    ...options,
  })
  return participant
}

export default getParticipantById
