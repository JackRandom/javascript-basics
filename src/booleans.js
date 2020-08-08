const negate = a => {
  return a = !a;
};

const both = (a, b) => {
  if (a === true && b === true) {
    return true;
  }
  else {
    return false;
  }

};

const either = (a, b) => {
  if (a === true || b === true) {
    return true;
  }
  else {
    return false;
  }
};

const none = (a, b) => {
  if (a === true || b === true) {
    return false;
  }
  else {
    return true;
  }
};

const one = (a, b) => {
  if (a === true ^ b === true) {
    return true;
  }
  else {
    return false;
  }
};

const truthiness = a => {
  if (a) {
    return true;
  }
  else {
    return false;
  }
};

const isEqual = (a, b) => {
  if (a == b) {
    return true;
  }
  else {
    return false;
  }
};

const isGreaterThan = (a, b) => {
  if (a > b) {
    return true;
  }
  else {
    return false;
  }
};

const isLessThanOrEqualTo = (a, b) => {
  if (a <= b) {
    return true;
  }
  else {
    return false;
  }
};

const isOdd = a => {
  if (a % 2 == 0) {
    return (false);
  }
  else {
    return (true);
  }
};

const isEven = a => {
  if (a % 2 == 0) {
    return (true);
  }
  else {
    return (false);
  }
};

const isSquare = a => {
  return a >= 0 && Math.sqrt(a) % 1 === 0;
};

const startsWith = (char, string) => {
  return (string.startsWith(char));
};

const containsVowels = string => {
  return (string.match('[aeiouAEIOU]'))!==null;

};


const isLowerCase = string => {
  return (string == string.toLowerCase());
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
