import Trip from "@models/trip"
import Participant from "@models/participant"
import Person from "@models/person"
import AddressLocation from "@models/address_location"
import CoordinatesLocation from "@models/coordinates_location"

const syncDb = async () => {
  await AddressLocation.sync()
  await CoordinatesLocation.sync()
  await Trip.sync()
  await Person.sync()
  await Participant.sync()
}

export default syncDb
