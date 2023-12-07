import { StatusCodes, ReasonPhrases } from "http-status-codes"
import createParticipantAndAddToCarpoolGroupById from "@services/participants/create_participant_and_add_to_carpool_group_by_id"
import {
  CreateParticipantSuccessMessage,
  GetCarpoolGroupNotFoundMessage,
} from "@config/strings"

const createParticipantAndAddToCarpoolGroupController = async (req, res) => {
  try {
    const { carpoolGroupId } = req.params
    const participantData = req.body
    const participant = await createParticipantAndAddToCarpoolGroupById(
      participantData,
      carpoolGroupId,
    )

    const code = StatusCodes.CREATED
    const status = ReasonPhrases.CREATED
    const message = CreateParticipantSuccessMessage
    const { id } = participant
    const newParticipantData = { id }

    const data = { code, status, message, participant: newParticipantData }
    res.status(code).json(data)
  } catch (error) {
    const { name: errorName, message: errorMessage } = error

    if (error.name === "CarpoolGroupNotFoundError") {
      const code = StatusCodes.NOT_FOUND
      const status = ReasonPhrases.NOT_FOUND
      const errorMessage = GetCarpoolGroupNotFoundMessage

      const data = { code, status, errorName, errorMessage }
      res.status(code).json(data)
    } else if (error.name === "SequelizeValidationError") {
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

export default createParticipantAndAddToCarpoolGroupController
