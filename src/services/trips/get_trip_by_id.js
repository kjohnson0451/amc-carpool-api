import Trip from "@models/trip"
import Participant from "@models/participant"
import Person from "@models/person"
import AddressLocation from "@models/address_location"

const getTripById = async (tripId) => {
  const trip = await Trip.findByPk(tripId, {
    include: [
      {
        model: Participant,
        include: [
          {
            model: Person,
            attributes: ["name"],
          },
          {
            model: AddressLocation,
            attributes: [
              "streetAddress",
              "city",
              "state",
              "postalCode",
              "country",
            ],
          },
        ],
        attributes: ["PersonId", "AddressLocationId"], // Retrieve 'name' attribute for Participant
      },
      {
        model: AddressLocation,
        attributes: ["streetAddress", "city", "state", "postalCode", "country"], // Retrieve specific attributes for AddressLocation
      },
    ],
    attributes: ["id", "name"], // Retrieve 'name' attribute for Trip
    rejectOnEmpty: true,
  })
  return trip
}

export default getTripById
