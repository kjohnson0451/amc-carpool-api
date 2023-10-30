import { ServerPort } from "@config/environment_variables"

export const MainConsoleMessage = `Server is running on port ${ServerPort}`
export const Error404Message = "<h1>404 Endpoint not Found</h1>"
export const RootMessage =
  "<h1>Welcome to the root endpoint. This app is running fine.</h1>"

export const getTripSuccessMessage = "Successfully retrieved trip."
export const createTripSuccessMessage = "Successfully created trip."
