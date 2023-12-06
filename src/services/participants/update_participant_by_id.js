import db from "@utils/db"
import Participant from "@models/participant"
import findOrCreateAddressLocation from "@services/address_locations/find_or_create_address_location"

const updateParticipantById = async (participantId, participantData) => {
  const transaction = await db.transaction()
  const options = { transaction }

  try {
    const existingParticipant = await Participant.findByPk(participantId, {
      rejectOnEmpty: true,
      ...options,
    })

    const { address: addressData } = participantData

    const address = await findOrCreateAddressLocation(addressData, options)

    await existingParticipant.setAddressLocation(address, options)

    await transaction.commit()
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default updateParticipantById
