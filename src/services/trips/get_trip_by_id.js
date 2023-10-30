import Trip from "@models/trip"
import Participant from "@models/participant"
import Person from "@models/person"
import AddressLocation from "@models/address_location"
import CoordinatesLocation from "@models/coordinates_location"

const getTripById = async (tripId) => {
  const trip = await Trip.findByPk(tripId, {
    include: [
      {
        model: Participant,
        include: [Person, AddressLocation, CoordinatesLocation],
      },
      AddressLocation,
      CoordinatesLocation,
    ],
  })
  return trip
}

export default getTripById
