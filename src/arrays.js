const getNthElement = (index, array) => {
//   return array.find((value, i) =>{
// if (i === index){
//   return value
// }
//   });

  // return array[index];

  const arrLength = array.length;
  let positionToLookFor;
  if (index + 1 > arrLength) {
    positionToLookFor = index - arrLength;
  } else {
    positionToLookFor = index;
  }
  return array[positionToLookFor];

};

const arrayToCSVString = array => {
 // console.log(array.join());
 return array.join();
 
};

const csvStringToArray = string => {
//  console.log(string.split(","));
 return string.split(",");
};

const addToArray = (element, array) => {
//console.log(array);
array.push(element);
//console.log(array);

};

const addToArray2 = (element, array) => {
const newArray = array.concat(element);

};

const removeNthElement = (index, array) => {
 array.splice(2, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(",");
};

const uppercaseWordsInArray = strings => {
 // return strings.toUpperCase();
return strings = String.prototype.toUpperCase.apply(strings).split(",");
};

const reverseWordsInArray = strings => {
  return strings.reverse();
};

const onlyEven = numbers => {
    return numbers.filter(function(val){return val%2===0})
};

const removeNthElement2 = (index, array) => {
  newArray = [...array];
  return newArray.splice(2, 1);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter('[aeiouAEIOU]');
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  return numbers.reduce(
    ( accumulator, currentValue ) => accumulator + currentValue,
    0
  )
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
