import express from "express"
import createParticipantAndAddToTripController from "@controllers/participants/create_participant_and_add_to_trip_controller.js"

export const router = express.Router()

router.post(
  "/create-participant-and-add-to-trip/:tripId",
  createParticipantAndAddToTripController,
)
