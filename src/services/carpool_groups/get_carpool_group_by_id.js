import CarpoolGroup from "@models/carpool_group"

const getCarpoolGroupById = async (carpoolGroupId, options = {}) => {
  const carpoolGroup = await CarpoolGroup.findByPk(carpoolGroupId, {
    attributes: ["id"],
    rejectOnEmpty: true,
    ...options,
  })
  return carpoolGroup
}

export default getCarpoolGroupById
