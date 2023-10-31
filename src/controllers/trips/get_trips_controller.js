import { StatusCodes, ReasonPhrases } from "http-status-codes"
import getAllTrips from "@services/trips/get_all_trips"
import { GetTripsSuccessMessage } from "@config/strings"

const getTripsController = async (req, res) => {
  try {
    const code = StatusCodes.OK
    const status = ReasonPhrases.OK
    const message = GetTripsSuccessMessage

    const trips = await getAllTrips()

    const data = { code, status, message, trips }
    res.status(code).json(data)
  } catch (error) {
    const { name: errorName, message: errorMessage } = error
    const code = StatusCodes.INTERNAL_SERVER_ERROR
    const status = ReasonPhrases.INTERNAL_SERVER_ERROR

    const data = { code, status, errorName, errorMessage }

    res.status(code).json(data)
  }
}

export default getTripsController
