import exclusiveOr from "@utils/exclusive_or"

const error = new Error(
  "Must have ONLY one of address or coordinates (exclusive or). Not either, and not both!",
)

function hasJustOneOfAddressOrCoordinates() {
  const { AddressLocationId, CoordinatesLocationId } = this
  const result = exclusiveOr(AddressLocationId, CoordinatesLocationId)
  if (!result) {
    throw error
  }
}

export default hasJustOneOfAddressOrCoordinates
