import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import Trip from "@models/trip"
import Participant from "@models/participant"
import CarpoolGroup from "@models/carpool_group"

const syncDb = async () => {
  await db.query(`CREATE SCHEMA IF NOT EXISTS ${CarpoolSchema};`)

  await Trip.sync()
  await CarpoolGroup.sync()
  await Participant.sync()
}

export default syncDb
