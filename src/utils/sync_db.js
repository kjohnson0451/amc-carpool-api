import Trip from "@models/trip"
import Participant from "@models/participant"
import CarpoolGroup from "@models/carpool_group"

const syncDb = async () => {
  await Trip.sync()
  await CarpoolGroup.sync()
  await Participant.sync()
}

export default syncDb
