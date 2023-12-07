import { StatusCodes, ReasonPhrases } from "http-status-codes"
import deleteTripById from "@services/trips/delete_trip_by_id"
import { GetTripNotFoundMessage } from "@config/strings"

const deleteTripController = async (req, res) => {
  try {
    const { id } = req.params
    const code = StatusCodes.NO_CONTENT

    await deleteTripById(id)

    res.status(code).end()
  } catch (error) {
    const { name: errorName, message: errorMessage } = error

    if (error.name === "TripNotFoundError") {
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

export default deleteTripController
