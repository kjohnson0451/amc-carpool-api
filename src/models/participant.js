import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"

const modelName = "Participant"
const schema = CarpoolSchema

const Participant = db.define(
  modelName,
  {},
  {
    schema,
    timestamps: false,
  },
)

export default Participant
