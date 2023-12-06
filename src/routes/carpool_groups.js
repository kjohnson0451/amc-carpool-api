import express from "express"
import createParticipantAndAddToTripController from "@controllers/carpool_groups/create_carpool_group_and_add_to_trip_controller.js"
import deleteParticipantController from "@controllers/carpool_groups/delete_carpool_group_controller"

export const router = express.Router()

router.post("/:tripId", createParticipantAndAddToTripController)
router.delete("/:id", deleteParticipantController)
