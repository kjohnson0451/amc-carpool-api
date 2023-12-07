import Trip from "@models/trip"
import Participant from "@models/participant"
import CarpoolGroup from "@models/carpool_group"

const getTripById = async (tripId, options = {}) => {
  try {
    const trip = await Trip.findByPk(tripId, {
      include: [
        {
          model: Participant,
          attributes: [
            "id",
            "name",
            "status",
            "departureTime",
            "departureLocation",
            "email",
            "phone",
          ],
        },
        {
          model: CarpoolGroup,
          attributes: ["id"],
          include: [
            {
              model: Participant,
              attributes: [
                "id",
                "name",
                "status",
                "departureTime",
                "departureLocation",
                "email",
                "phone",
              ],
            },
          ],
        },
      ],
      attributes: ["id", "name", "date", "trailhead"],
      rejectOnEmpty: true,
      ...options,
    })
    return trip
  } catch (error) {
    if (error.name === "SequelizeEmptyResultError") {
      error.name = "TripNotFoundError"
    }
    throw error
  }
}

export default getTripById
