import Trip from "@models/trip"
import Participant from "@models/participant"

const getTripById = async (tripId, options = {}) => {
  try {
    const trip = await Trip.findByPk(tripId, {
      include: [
        {
          model: Participant,
          attributes: [
            "name",
            "status",
            "departureTime",
            "departureLocation",
            "email",
            "phone",
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
