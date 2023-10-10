import db from "@utils/db"
import { CarpoolSchema } from "@config/db_schemas"
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
    timestamps: false,
  },
)

export default Participant
