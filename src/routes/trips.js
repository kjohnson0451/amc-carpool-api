import express from "express"
import getTripController from "@controllers/trips/get_trip_controller"
import postTripController from "@controllers/trips/post_trip_controller"
import updateTripController from "@controllers/trips/update_trip_controller"
import deleteTripController from "@controllers/trips/delete_trip_controller"

export const router = express.Router()

router.get("/get-trip/:id", getTripController)
router.post("/post-trip/", postTripController)
router.patch("/update-trip/:id", updateTripController)
router.delete("/delete-trip/:id", deleteTripController)
