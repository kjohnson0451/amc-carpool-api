import Trip from "@models/trip"

const getAllTrips = async (options = {}) => {
  const trips = await Trip.findAll({
    attributes: ["id", "name"],
    ...options,
  })

  return trips
}

export default getAllTrips
