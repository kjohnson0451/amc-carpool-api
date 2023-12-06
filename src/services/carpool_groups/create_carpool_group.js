import CarpoolGroup from "@models/carpool_group"

const createCarpoolGroup = async (options = {}) => {
  const carpoolGroup = await CarpoolGroup.create(options)

  return carpoolGroup
}

export default createCarpoolGroup
