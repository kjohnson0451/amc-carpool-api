import AddressLocation from "@models/address_location"

const findOrCreateAddressLocation = async (addressData, options = {}) => {
  const [address] = await AddressLocation.findOrCreate({
    where: addressData,
    ...options,
  })

  return address
}

export default findOrCreateAddressLocation
