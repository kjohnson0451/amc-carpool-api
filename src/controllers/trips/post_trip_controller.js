import createTrip from "@services/trips/create_trip"
import { createTripSuccessMessage } from "@config/strings"

const postTripController = async (req, res) => {
  const tripData = req.body
  const trip = await createTrip(tripData)

  const statusCode = 201
  const message = createTripSuccessMessage
  const { id } = trip

  const returnedData = { statusCode, message, id }
  res.status(201).json(returnedData)
}

export default postTripController
