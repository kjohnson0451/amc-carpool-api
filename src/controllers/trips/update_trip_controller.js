import { StatusCodes, ReasonPhrases } from "http-status-codes"
import updateTrip from "@services/trips/update_trip"
import getTripById from "@services/trips/get_trip_by_id"
import {
  UpdateTripSuccessMessage,
  GetTripNotFoundMessage,
} from "@config/strings"

const updateTripController = async (req, res) => {
  try {
    const { id } = req.params
    const tripData = req.body
    await updateTrip(id, tripData)

    const code = StatusCodes.OK
    const status = ReasonPhrases.OK
    const message = UpdateTripSuccessMessage

    const returnedTripData = await getTripById(id)

    const data = { code, status, message, trip: returnedTripData }
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

export default updateTripController
