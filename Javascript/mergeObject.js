// a function to merge two array with the same length
/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @param {String} identifier
 */
const mergeTo = (arr1, arr2, identifier, generateId = false) => {
  const result = [];
  arr1.forEach((object, index) => {
    let newObject = { ...object };
    if (!newObject.id && generateId) newObject.id = index + 1;
    const elementinArr2 = arr2.find(
      (obj) => obj[identifier] === object[identifier]
    );
    if (elementinArr2) {
      //if it exists, merge the two objects
      Object.assign(newObject, elementinArr2);
    }
    result.push(newObject);
  });
  return result;
};

//example
const arr1 = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];
const arr2 = [
  { test: "1", name: "a" },
  { test: "2", name: "b" },
];
console.log(mergeTo(arr1, arr2));
