import createTrip from "@services/trips/create_trip"

const postTripController = async (req, res) => {
  const tripData = req.body
  const trip = await createTrip(tripData)
  const returnedTripData = trip.get({ plain: true })
  res.status(201).json(returnedTripData)
}

export default postTripController
