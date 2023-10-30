import express from "express"
import getTripController from "@controllers/trips/get_trip_controller"
import postTripController from "@controllers/trips/post_trip_controller"

export const router = express.Router()

router.get("/get-trip/:id", getTripController)
router.post("/post-trip/", postTripController)
