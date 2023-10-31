import { StatusCodes, ReasonPhrases } from "http-status-codes"
import deleteParticipantById from "@services/participants/delete_participant_by_id"
import { GetParticipantNotFoundMessage } from "@config/strings"

const deleteParticipantController = async (req, res) => {
  try {
    const { id } = req.params
    const code = StatusCodes.NO_CONTENT

    await deleteParticipantById(id)

    res.status(code).end()
  } catch (error) {
    const { name: errorName, message: errorMessage } = error

    if (error.name === "SequelizeEmptyResultError") {
      const code = StatusCodes.NOT_FOUND
      const status = ReasonPhrases.NOT_FOUND
      const errorMessage = GetParticipantNotFoundMessage

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

export default deleteParticipantController
