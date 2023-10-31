import express from "express"
import createParticipantAndAddToTripController from "@controllers/participants/create_participant_and_add_to_trip_controller.js"
import updateParticipantController from "@controllers/participants/update_participant_controller"
import deleteParticipantController from "@controllers/participants/delete_participant_controller"

export const router = express.Router()

router.post(
  "/create-participant-and-add-to-trip/:tripId",
  createParticipantAndAddToTripController,
)
router.patch("/update-participant/:id", updateParticipantController)
router.delete("/delete-participant/:id", deleteParticipantController)
