// var newArray = oldArray.slice(indexOfElementToRemove+1).concat(oldArray.slice(0,indexOfElementToRemove));

var animalArray = ["dog", "cat", "horse", "duck", "turtle"];

function removeFromArray(a) {
  var index = animalArray.indexOf(a);
  animalArray.splice(index, 1);
}

function removeOtherArray(a) {
  animalArray.splice(2);
}

function sliceRemoveNewArray(a) {
  var removalIndex = animalArray.indexOf(a);
  return [...animalArray.slice(0, removalIndex), ...animalArray.slice(
    removalIndex)];
}

function otherSliceRemoveNewArray(a) {
  var removalIndex = animalArray.indexOf(a);
  return animalArray.slice(0, removalIndex).concat(animalArray.slice(
    removalIndex));
}

// removeOtherArray("cat");
let newArray = sliceRemoveNewArray("duck");
let extraNewArray = otherSliceRemoveNewArray("turtle");
console.log(newArray);
console.log(extraNewArray);
