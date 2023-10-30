import express from "express"
import getTrip from "@controllers/trips/get_trip"
import postTripController from "@controllers/trips/post_trip_controller"

export const router = express.Router()

router.get("/get-trip/:tripId", getTrip)
router.post("/post-trip/", postTripController)
