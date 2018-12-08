function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}
