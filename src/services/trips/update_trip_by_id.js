import db from "@utils/db"
import Trip from "@models/trip"
import findOrCreateAddressLocation from "@services/address_locations/find_or_create_address_location"

const updateTrip = async (tripId, tripData) => {
  const transaction = await db.transaction()
  const options = { transaction }

  try {
    const existingTrip = await Trip.findByPk(tripId, {
      rejectOnEmpty: true,
      ...options,
    })

    const { name, address: addressData } = tripData

    const tripAttributes = { name }

    await existingTrip.update(tripAttributes, options)

    const address = await findOrCreateAddressLocation(addressData, options)
    await existingTrip.setAddressLocation(address, options)

    await transaction.commit()
    return existingTrip
  } catch (error) {
    await transaction.rollback()
    throw error
  }
}

export default updateTrip
