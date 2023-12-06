import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import Trip from "@models/trip"

const modelName = "CarpoolGroup"
const schema = CarpoolSchema

const CarpoolGroup = db.define(
  modelName,
  {},
  {
    schema,
  },
)

Trip.hasMany(CarpoolGroup)
CarpoolGroup.belongsTo(Trip)

export default CarpoolGroup
