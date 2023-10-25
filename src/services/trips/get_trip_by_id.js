import Trip from "@models/trip"
import TripParticipant from "@models/trip_participant"
import Participant from "@models/participant"
import AddressLocation from "@models/address_location"
import CoordinatesLocation from "@models/coordinates_location"

const getTripById = async (tripId) => {
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
  return trip
}

export default getTripById
