class CustomError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

// Create specific custom errors
export class ParticipantNotInCarpoolGroupError extends CustomError {
  constructor(message = "This participant doesn't belong to a carpool group.") {
    super(message)
  }
}
