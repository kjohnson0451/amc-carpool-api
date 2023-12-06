import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
import Trip from "@models/trip"
import CarpoolGroup from "@models/carpool_group"
import { DataTypes } from "sequelize"

const modelName = "Participant"
const schema = CarpoolSchema

const Participant = db.define(
  modelName,
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    schema,
  },
)

Trip.hasMany(Participant)
Participant.belongsTo(Trip)

CarpoolGroup.hasMany(Participant)
Participant.belongsTo(CarpoolGroup)

export default Participant
