import db from "@utils/db"
import getCarpoolGroupById from "@services/carpool_groups/get_carpool_group_by_id"

const deleteCarpoolGroupById = async (carpoolGroupId) => {
  const transaction = await db.transaction()
  const options = { transaction }

  try {
    const carpoolGroup = await getCarpoolGroupById(carpoolGroupId, options)

    await carpoolGroup.destroy(options)

    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default deleteCarpoolGroupById
