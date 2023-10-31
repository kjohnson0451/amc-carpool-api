import Trip from "@models/trip"
import Participant from "@models/participant"
import Person from "@models/person"
import AddressLocation from "@models/address_location"

const getTripById = async (tripId, options = {}) => {
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
        attributes: ["id", "PersonId", "AddressLocationId"],
      },
      {
        model: AddressLocation,
        attributes: ["streetAddress", "city", "state", "postalCode", "country"],
      },
    ],
    attributes: ["id", "name"],
    rejectOnEmpty: true,
    ...options,
  })
  return trip
}

export default getTripById
