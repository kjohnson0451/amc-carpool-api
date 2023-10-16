import express from "express"
import getTrip from "@controllers/trips/get_trip"

export const router = express.Router()

router.get("/get-trip/:tripId", getTrip)
