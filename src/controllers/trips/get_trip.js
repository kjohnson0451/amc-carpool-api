import Trip from "@models/trip"
import TripParticipant from "@models/trip_participant"
import Participant from "@models/participant"
import AddressLocation from "@models/address_location"
import CoordinatesLocation from "@models/coordinates_location"

const getTrip = async (req, res) => {
  const { tripId } = req.params
  const trip = await Trip.findByPk(tripId, {
    include: [
      {
        model: TripParticipant,
        include: [Participant, AddressLocation, CoordinatesLocation],
      },
      AddressLocation,
      CoordinatesLocation,
    ],
  })
  res.json(trip)
}

export default getTrip
