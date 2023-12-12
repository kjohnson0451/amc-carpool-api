import Trip from "@models/trip"
import CarpoolGroup from "@models/carpool_group"
import Participant from "@models/participant"

const getAllTrips = async (options = {}) => {
  const tripsBeforeParticipantCount = await Trip.findAll({
    attributes: ["id", "name", "date", "trailhead"],
    include: [
      {
        model: CarpoolGroup,
        attributes: ["id"],
        include: [
          {
            model: Participant,
            attributes: ["id"],
          },
        ],
      },
      {
        model: Participant,
        attributes: ["id"],
      },
    ],
    ...options,
  })

  // Grab the total number of participants in each trip.
  // That includes the number "ungrouped" participants plus the number of
  // participants in each carpool group
  const trips = tripsBeforeParticipantCount.map((trip) => {
    // Calculate the total number of participants in each carpool group for the trip
    const carpoolGroupParticipantsCount = trip.CarpoolGroups.reduce(
      (total, carpoolGroup) => total + carpoolGroup.Participants.length,
      0,
    )

    // Calculate the total number of participants for the trip
    const totalParticipantCount =
      trip.Participants.length + carpoolGroupParticipantsCount

    // Add computed values to the trip object
    return {
      id: trip.id,
      name: trip.name,
      date: trip.date,
      trailhead: trip.trailhead,
      totalParticipantCount,
    }
  })

  return trips
}

export default getAllTrips
