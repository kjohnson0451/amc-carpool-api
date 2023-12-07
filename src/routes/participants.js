import express from "express"
import createParticipantAndAddToTripController from "@controllers/participants/create_participant_and_add_to_trip_controller"
import createParticipantAndAddToCarpoolGroupController from "@controllers/participants/create_participant_and_add_to_carpool_group_controller"
import updateParticipantController from "@controllers/participants/update_participant_controller"
import moveParticipantToCarpoolGroupController from "@controllers/participants/move_participant_to_carpool_group_controller"
import removeParticipantFromCarpoolGroupController from "@controllers/participants/remove_participant_from_carpool_group_controller"
import deleteParticipantController from "@controllers/participants/delete_participant_controller"

export const router = express.Router()

router.post("/add-to-trip/:tripId", createParticipantAndAddToTripController)
router.post(
  "/add-to-carpool-group/:carpoolGroupId",
  createParticipantAndAddToCarpoolGroupController,
)
router.patch("/:id", updateParticipantController)
router.patch(
  "/:id/move-to-carpool-group/:carpoolGroupId",
  moveParticipantToCarpoolGroupController,
)
router.patch(
  "/:id/remove-from-carpool-group",
  removeParticipantFromCarpoolGroupController,
)
router.delete("/:id", deleteParticipantController)
