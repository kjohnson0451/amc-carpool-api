import createTrip from "@services/trips/create_trip"
import getTripById from "@services/trips/get_trip_by_id"
import {
  createTripSuccessMessage,
  statusSuccess,
  statusError,
} from "@config/strings"

const postTripController = async (req, res) => {
  try {
    const tripData = req.body
    const trip = await createTrip(tripData)

    const status = statusSuccess
    const code = 201
    const message = createTripSuccessMessage
    const { id } = trip

    const returnedTripData = await getTripById(id)

    const data = { status, code, message, trip: returnedTripData }
    res.status(code).json(data)
  } catch (error) {
    const status = statusError
    const code = 500
    const { message } = error

    const data = { status, code, message }
    res.status(code).json(data)
  }
}

export default postTripController
