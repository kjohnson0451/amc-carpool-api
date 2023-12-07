import CarpoolGroup from "@models/carpool_group"
import Participant from "@models/participant"

const getCarpoolGroupById = async (carpoolGroupId, options = {}) => {
  try {
    const carpoolGroup = await CarpoolGroup.findByPk(carpoolGroupId, {
      attributes: ["id", "TripId"],
      include: [
        {
          model: Participant,
          attributes: ["id"],
        },
      ],
      rejectOnEmpty: true,
      ...options,
    })
    return carpoolGroup
  } catch (error) {
    if (error.name === "SequelizeEmptyResultError") {
      error.name = "CarpoolGroupNotFoundError"
    }
    throw error
  }
}

export default getCarpoolGroupById
