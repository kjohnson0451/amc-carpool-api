import { ServerPort } from "@config/environment_variables"

export const MainConsoleMessage = `Server is running on port ${ServerPort}`
export const Error404Message = "404 Endpoint not found."
export const RootMessage =
  "Welcome to the root endpoint. This app is running fine."

export const GetTripSuccessMessage = "Successfully retrieved trip."
export const GetTripNotFoundMessage = "Trip not found."
export const CreateTripSuccessMessage = "Successfully created trip."
export const UpdateTripSuccessMessage = "Successfully updated trip."

export const GetParticipantNotFoundMessage = "Participant not found."
export const CreateParticipantSuccessMessage =
  "Successfully created participant."
export const UpdateParticipantSuccessMessage =
  "Successfully updated participant."
