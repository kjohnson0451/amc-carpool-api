import { StatusCodes, ReasonPhrases } from "http-status-codes"
import createCarpoolGroupAndAddToTripById from "@services/carpool_groups/create_carpool_group_and_add_to_trip_by_id"
import {
  CreateCarpoolGroupSuccessMessage,
  GetTripNotFoundMessage,
} from "@config/strings"

const createCarpoolGroupAndAddToTripController = async (req, res) => {
  try {
    const { tripId } = req.params
    const carpoolGroup = await createCarpoolGroupAndAddToTripById(tripId)

    const code = StatusCodes.CREATED
    const status = ReasonPhrases.CREATED
    const message = CreateCarpoolGroupSuccessMessage
    const { id } = carpoolGroup
    const newCarpoolGroupData = { id }

    const data = { code, status, message, carpoolGroup: newCarpoolGroupData }
    res.status(code).json(data)
  } catch (error) {
    const { name: errorName, message: errorMessage } = error

    if (error.name === "SequelizeEmptyResultError") {
      const code = StatusCodes.NOT_FOUND
      const status = ReasonPhrases.NOT_FOUND
      const errorMessage = GetTripNotFoundMessage

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

export default createCarpoolGroupAndAddToTripController
