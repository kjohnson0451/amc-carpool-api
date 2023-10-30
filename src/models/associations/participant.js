import Trip from "@models/trip"
import Person from "@models/person"
import Participant from "@models/participant"

export const loadAssociation = () => {
  Person.hasMany(Participant)
  Participant.belongsTo(Person)

  Trip.hasMany(Participant)
  Participant.belongsTo(Trip)
}
