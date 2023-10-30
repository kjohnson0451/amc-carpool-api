import createTrip from "@services/trips/create_trip"
import getTripById from "@services/trips/get_trip_by_id"
import { createTripSuccessMessage, statusSuccess } from "@config/strings"

const postTripController = async (req, res) => {
  const tripData = req.body
  const trip = await createTrip(tripData)

  const status = statusSuccess
  const code = 201
  const message = createTripSuccessMessage
  const { id } = trip

  const returnedTripData = await getTripById(id)

  const returnedData = { status, code, message, trip: returnedTripData }
  res.status(code).json(returnedData)
}

export default postTripController
