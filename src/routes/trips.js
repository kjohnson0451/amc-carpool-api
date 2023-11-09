import express from "express"
import getTripController from "@controllers/trips/get_trip_controller"
import getTripsController from "@controllers/trips/get_trips_controller"
import createTripController from "@controllers/trips/create_trip_controller"
import updateTripController from "@controllers/trips/update_trip_controller"
import deleteTripController from "@controllers/trips/delete_trip_controller"

export const router = express.Router()

router.get("/:id", getTripController)
router.get("/", getTripsController)
router.post("/", createTripController)
router.patch("/:id", updateTripController)
router.delete("/:id", deleteTripController)
