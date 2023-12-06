import Trip from "@models/trip"

const getAllTrips = async (options = {}) => {
  const trips = await Trip.findAll({
    attributes: ["id", "name", "date", "trailhead"],
    ...options,
  })

  return trips
}

export default getAllTrips
