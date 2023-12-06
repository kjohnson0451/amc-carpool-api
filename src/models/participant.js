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
    status: {
      type: DataTypes.ENUM("D", "N"),
    },
    departureTime: {
      type: DataTypes.DATE,
    },
    departureLocation: {
      type: DataTypes.STRING(255),
    },
    email: {
      type: DataTypes.STRING(255),
    },
    phone: {
      type: DataTypes.STRING(255),
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
