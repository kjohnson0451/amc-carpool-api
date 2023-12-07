import { StatusCodes, ReasonPhrases } from "http-status-codes"
import {
  MoveParticipantToCarpoolGroupSuccessMessage,
  GetParticipantNotFoundMessage,
  GetCarpoolGroupNotFoundMessage,
} from "@config/strings"
import moveParticipantToCarpoolGroup from "@services/participants/move_participant_to_carpool_group"

const moveParticipantToCarpoolGroupController = async (req, res) => {
  try {
    const { id: participantId, carpoolGroupId } = req.params
    await moveParticipantToCarpoolGroup(participantId, carpoolGroupId)

    const code = StatusCodes.OK
    const status = ReasonPhrases.OK
    const message = MoveParticipantToCarpoolGroupSuccessMessage

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
    } else if (error.name === "CarpoolGroupNotFoundError") {
      const code = StatusCodes.NOT_FOUND
      const status = ReasonPhrases.NOT_FOUND
      const errorMessage = GetCarpoolGroupNotFoundMessage

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

export default moveParticipantToCarpoolGroupController
