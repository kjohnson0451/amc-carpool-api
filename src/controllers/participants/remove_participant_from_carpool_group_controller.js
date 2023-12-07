import { StatusCodes, ReasonPhrases } from "http-status-codes"
import {
  RemoveParticipantFromCarpoolGroupSuccessMessage,
  GetParticipantNotFoundMessage,
} from "@config/strings"
import removeParticipantFromCarpoolGroup from "@services/participants/remove_participant_from_carpool_group"

const removeParticipantFromCarpoolGroupController = async (req, res) => {
  try {
    const { id: participantId } = req.params
    await removeParticipantFromCarpoolGroup(participantId)

    const code = StatusCodes.OK
    const status = ReasonPhrases.OK
    const message = RemoveParticipantFromCarpoolGroupSuccessMessage

    const data = { code, status, message }
    res.status(code).json(data)
  } catch (error) {
    const { name: errorName, message: errorMessage } = error

    if (error.name === "ParticipantNotFoundError") {
      const code = StatusCodes.NOT_FOUND
      const status = ReasonPhrases.NOT_FOUND
      const errorMessage = GetParticipantNotFoundMessage

      const data = { code, status, errorName, errorMessage }
      res.status(code).json(data)
    } else if (error.name === "ParticipantNotInCarpoolGroupError") {
      const code = StatusCodes.BAD_REQUEST
      const status = ReasonPhrases.BAD_REQUEST

      const data = { code, status, errorName, errorMessage }
      res.status(code).json(data)
    } else {
      const code = StatusCodes.INTERNAL_SERVER_ERROR
      const status = ReasonPhrases.INTERNAL_SERVER_ERROR

      const data = { code, status, errorName, errorMessage }

      res.status(code).json(data)
    }
  }
}

export default removeParticipantFromCarpoolGroupController
