import express from "express"
import getTripController from "@controllers/trips/get_trip_controller"
import createTripController from "@controllers/trips/create_trip_controller"
import updateTripController from "@controllers/trips/update_trip_controller"
import deleteTripController from "@controllers/trips/delete_trip_controller"

export const router = express.Router()

router.get("/get-trip/:id", getTripController)
router.post("/create-trip/", createTripController)
router.patch("/update-trip/:id", updateTripController)
router.delete("/delete-trip/:id", deleteTripController)
