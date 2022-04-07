// removing numbers from a string
const getCleanedString = (str) => {
  return str.replace(/\d+/g, "");
  // another alternative str.match(/\D/g).join("");
};

// change a letter with next 13th letter
const getChangedAlphabetLetters = (str) => {
  let result = str.split("");

  for (let i = 0; i < result.length; i++) {
    let code = str.charCodeAt(i);

    // check if a uppercase letter
    if (code > 64 && code < 91) {
      if (code + 13 > 90) {
        let n = code + 13 - 90;
        result[i] = String.fromCharCode(64 + n);
      } else {
        result[i] = String.fromCharCode(code + 13);
      }
    }
    // check if a lowerscase letter
    else if (code > 96 && code < 123) {
      if (code + 13 > 122) {
        let n = code + 13 - 122;
        result[i] = String.fromCharCode(96 + n);
      } else {
        result[i] = String.fromCharCode(code + 13);
      }
    }
  }
  // console.log(result.join(""));
  return result.join("");
};

// get an index
const getIndex = (array) => {
  let leftSum = 0;
  let rightSum = 0;
  let index;

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      if (j < i) leftSum = leftSum + array[j];
      if (j > i) rightSum = rightSum + array[j];
    }
    // console.log(leftSum, rightSum);
    if (leftSum == rightSum) {
      index = i;
      break;
    } else index = -1;
    leftSum = 0;
    rightSum = 0;
  }
  return index;
};
