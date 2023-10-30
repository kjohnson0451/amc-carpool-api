import getTripById from "@services/trips/get_trip_by_id"
import {
  getTripSuccessMessage,
  statusSuccess,
  statusError,
} from "@config/strings"

const getTrip = async (req, res) => {
  try {
    const { id } = req.params
    const status = statusSuccess
    const code = 200
    const message = getTripSuccessMessage

    const trip = await getTripById(id)

    const data = { status, code, message, trip }
    res.status(code).json(data)
  } catch (error) {
    const status = statusError
    const code = 500
    const { message } = error

    const data = { status, code, message }
    res.status(code).json(data)
  }
}

export default getTrip
