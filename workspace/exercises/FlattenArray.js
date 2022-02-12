/*
  Given an array that contains either numbers or an array
*/

function flattenArray(array, flatArray = []) {
  let i = 0;
  while (i < array.length) {
    if (Array.isArray(array[i])) {
      flattenArray(array[i], flatArray);
    } else {
      flatArray.push(array[i]);
    }
    i += 1;
  }
  return flatArray;
}

module.exports = {
  flattenArray,
};
