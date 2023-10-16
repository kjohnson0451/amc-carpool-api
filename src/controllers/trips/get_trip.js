import Trip from "@models/trip"
import Participant from "@models/participant"

const getTrip = async (req, res) => {
  const { tripId } = req.params
  const trip = await Trip.findByPk(tripId, { include: Participant })
  res.json(trip)
}

export default getTrip
