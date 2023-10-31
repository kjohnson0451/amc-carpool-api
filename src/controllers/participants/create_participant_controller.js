import { StatusCodes, ReasonPhrases } from "http-status-codes"
import createParticipantAndAddToTripById from "@services/participants/create_participant_and_add_to_trip_by_id"
import getParticipantById from "@services/participants/get_participant_by_id"
import {
  CreateParticipantSuccessMessage,
  GetTripNotFoundMessage,
} from "@config/strings"

const createParticipantAndAddToTripController = async (req, res) => {
  try {
    const { tripId } = req.params
    const participantData = req.body
    const participant = await createParticipantAndAddToTripById(
      participantData,
      tripId,
    )

    const code = StatusCodes.CREATED
    const status = ReasonPhrases.CREATED
    const message = CreateParticipantSuccessMessage
    const { id: participantId } = participant

    const returnedParticipantData = await getParticipantById(participantId)

    const data = { code, status, message, participant: returnedParticipantData }
    res.status(code).json(data)
  } catch (error) {
    const { name: errorName, message: errorMessage } = error

    if (error.name === "SequelizeEmptyResultError") {
      const code = StatusCodes.NOT_FOUND
      const status = ReasonPhrases.NOT_FOUND
      const errorMessage = GetTripNotFoundMessage

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

export default createParticipantAndAddToTripController
