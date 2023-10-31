import { StatusCodes, ReasonPhrases } from "http-status-codes"
import updateParticipantById from "@services/participants/update_participant_by_id"
import getParticipantById from "@services/participants/get_participant_by_id"
import {
  UpdateParticipantSuccessMessage,
  GetParticipantNotFoundMessage,
} from "@config/strings"

const updateParticipantController = async (req, res) => {
  try {
    const { id } = req.params
    const participantData = req.body
    await updateParticipantById(id, participantData)

    const code = StatusCodes.OK
    const status = ReasonPhrases.OK
    const message = UpdateParticipantSuccessMessage

    const returnedParticipantData = await getParticipantById(id)

    const data = { code, status, message, participant: returnedParticipantData }
    res.status(code).json(data)
  } catch (error) {
    const { name: errorName, message: errorMessage } = error

    if (error.name === "SequelizeEmptyResultError") {
      const code = StatusCodes.NOT_FOUND
      const status = ReasonPhrases.NOT_FOUND
      const errorMessage = GetParticipantNotFoundMessage

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

export default updateParticipantController
