import { StatusCodes, ReasonPhrases } from "http-status-codes"
import createTrip from "@services/trips/create_trip"
import { CreateTripSuccessMessage } from "@config/strings"

const createTripController = async (req, res) => {
  try {
    const tripData = req.body
    const trip = await createTrip(tripData)

    const code = StatusCodes.CREATED
    const status = ReasonPhrases.CREATED
    const message = CreateTripSuccessMessage
    const { id } = trip
    const newTripData = { id }

    const data = { code, status, message, trip: newTripData }
    res.status(code).json(data)
  } catch (error) {
    const { name: errorName, message: errorMessage } = error

    if (error.name === "SequelizeValidationError") {
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

export default createTripController
