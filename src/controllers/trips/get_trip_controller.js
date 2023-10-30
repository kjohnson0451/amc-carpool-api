import getTripById from "@services/trips/get_trip_by_id"

const getTrip = async (req, res) => {
  const { tripId } = req.params
  const trip = await getTripById(tripId)
  res.json(trip)
}

export default getTrip
