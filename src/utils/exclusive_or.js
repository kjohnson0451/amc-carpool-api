// exclusiveOr()
//
// Returns true if and only if one of the arguments can be interpreted as true
const exclusiveOr = (...args) => {
  let trueCount = 0

  args.forEach((arg) => {
    if (arg) {
      trueCount += 1
      if (trueCount > 1) {
        return false // More than one true value found, exiting the loop
      }
    }
    return false // No more than one true value was found
  })

  return trueCount === 1 // Was only one value found?
}

export default exclusiveOr
