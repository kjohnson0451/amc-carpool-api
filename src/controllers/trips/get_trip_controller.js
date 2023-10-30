import getTripById from "@services/trips/get_trip_by_id"
import { getTripSuccessMessage, statusSuccess } from "@config/strings"

const getTrip = async (req, res) => {
  const { id } = req.params
  const status = statusSuccess
  const code = 200
  const message = getTripSuccessMessage

  const trip = await getTripById(id)

  const returnedData = { status, code, message, trip }
  res.status(code).json(returnedData)
}

export default getTrip
