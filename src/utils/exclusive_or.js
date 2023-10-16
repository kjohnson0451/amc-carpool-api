// exclusiveOr()
//
// Returns true if and only if one of the arguments can be interpreted as true
const exclusiveOr = (...args) => {
  let trueCount = 0

  for (const arg of args) {
    if (arg) {
      trueCount++
      if (trueCount > 1) {
        return false // More than one true value found
      }
    }
  }

  return trueCount === 1 // Only one true value found
}

export default exclusiveOr
