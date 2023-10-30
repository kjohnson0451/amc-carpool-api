import Person from "@models/person"

const findOrCreatePerson = async (personData, options = {}) => {
  const [person] = await Person.findOrCreate({
    where: personData,
    ...options,
  })

  return person
}

export default findOrCreatePerson
