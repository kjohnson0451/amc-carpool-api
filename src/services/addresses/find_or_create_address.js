import AddressLocation from "@models/address_location"

const findOrCreateAddress = async (addressData, options = {}) => {
  const [address] = await AddressLocation.findOrCreate({
    where: addressData,
    ...options,
  })

  return address
}

export default findOrCreateAddress
