'use strict';

function encodeString(plainStr) {
  return plainStr
    .split('')
    .reduce((encodedStr, char) => encodedStr + encodeLetter(char), '');
}

function encodeLetter(char) {
  if (!char.match(/[A-z]/)) {
    return char;
  }
  const wrappedCodes = ['X', 'Y', 'Z', 'x', 'y', 'z'];
  return wrappedCodes.includes(char) ?
    String.fromCharCode(char.charCodeAt() - 23) :
    String.fromCharCode(char.charCodeAt() + 3);
}

function decodeString(encodedStr) {
  return encodedStr
    .split('')
    .reduce((decodedStr, char) => decodedStr + decodeLetter(char), '');
}

function decodeLetter(char) {
  if (!char.match(/[A-z]/)) {
    return char;
  }
  const wrappedCodes = ['A', 'B', 'C', 'a', 'b', 'c'];
  return wrappedCodes.includes(char) ?
    String.fromCharCode(char.charCodeAt() + 23) :
    String.fromCharCode(char.charCodeAt() - 3);
}

module.exports = {
  encode: encodeString,
  decode: decodeString
};



// Old encode
// switch (char) {
//   case 'X':
//   case 'x':
//     return char === 'X' ? 'A' : 'a';
//   case 'Y':
//   case 'y':
//     return char === 'Y' ? 'B' : 'b';
//   case 'Z':
//   case 'z':
//     return char === 'Z' ? 'C' : 'c';
//   default:
//     return char.match(/[A-z]/) ? 
//       String.fromCharCode(char.charCodeAt() + 3) :
//       char;
// }

// Old decode
// switch (char) {
//   case 'A':
//   case 'a':
//     return char === 'A' ? 'X' : 'x';
//   case 'B':
//   case 'b':
//     return char === 'B' ? 'Y' : 'y';
//   case 'C':
//   case 'c':
//     return char === 'C' ? 'Z' : 'z';
//   default:
//     return char.match(/[A-z]/) ?
//       String.fromCharCode(char.charCodeAt() - 3) :
//       char;
//}