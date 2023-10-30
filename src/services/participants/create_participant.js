import Participant from "@models/participant"
import findOrCreatePerson from "@services/people/find_or_create_person"
import findOrCreateAddressLocation from "@services/address_locations/find_or_create_address_location"

const createParticipant = async (personData, options = {}) => {
  const { name, address: addressData } = personData
  const participant = await Participant.create({}, options)

  const personAttributes = { name }
  const person = await findOrCreatePerson(personAttributes, options)

  const address = await findOrCreateAddressLocation(addressData, options)

  await participant.setPerson(person, options)
  await participant.setAddressLocation(address, options)

  return participant
}

export default createParticipant
