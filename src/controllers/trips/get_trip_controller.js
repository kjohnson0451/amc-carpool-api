import { StatusCodes, ReasonPhrases } from "http-status-codes"
import getTripById from "@services/trips/get_trip_by_id"
import { getTripSuccessMessage } from "@config/strings"

const getTrip = async (req, res) => {
  try {
    const { id } = req.params
    const code = StatusCodes.CREATED
    const status = ReasonPhrases.CREATED
    const message = getTripSuccessMessage

    const trip = await getTripById(id)

    const data = { code, status, message, trip }
    res.status(code).json(data)
  } catch (error) {
    const { name: errorName, message: errorMessage } = error

    if (error.name === "SequelizeEmptyResultError") {
      const code = StatusCodes.NOT_FOUND
      const status = ReasonPhrases.NOT_FOUND

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

export default getTrip
