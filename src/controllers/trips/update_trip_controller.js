import { StatusCodes, ReasonPhrases } from "http-status-codes"
import updateTripById from "@services/trips/update_trip_by_id"
import {
  UpdateTripSuccessMessage,
  GetTripNotFoundMessage,
} from "@config/strings"

const updateTripController = async (req, res) => {
  try {
    const { id } = req.params
    const tripData = req.body
    await updateTripById(id, tripData)

    const code = StatusCodes.OK
    const status = ReasonPhrases.OK
    const message = UpdateTripSuccessMessage

    const data = { code, status, message }
    res.status(code).json(data)
  } catch (error) {
    const { name: errorName, message: errorMessage } = error

    if (error.name === "TripNotFoundError") {
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

export default updateTripController
