import { StatusCodes, ReasonPhrases } from "http-status-codes"
import deleteCarpoolGroupById from "@services/carpool_groups/delete_carpool_group_by_id"
import { GetCarpoolGroupNotFoundMessage } from "@config/strings"

const deleteCarpoolGroupController = async (req, res) => {
  try {
    const { id } = req.params
    const code = StatusCodes.NO_CONTENT

    await deleteCarpoolGroupById(id)

    res.status(code).end()
  } catch (error) {
    const { name: errorName, message: errorMessage } = error

    if (error.name === "SequelizeEmptyResultError") {
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

export default deleteCarpoolGroupController
