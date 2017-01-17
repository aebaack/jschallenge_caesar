'use strict';

function encodeString(plainStr) {
  return plainStr
    .split('')
    .reduce((encodedStr, plainChar) => {
      if (plainChar.match(/[A-z]/)) {
        return encodedStr + encodeLetter(plainChar);
      } else {
        return encodedStr + plainChar;
      }
    }, '');
}

function encodeLetter(char) {
  switch (char) {
    case 'X' || 'x':
      return char === 'X' ? 'A' : 'a';
    case 'Y' || 'y':
      return char === 'Y' ? 'B' : 'b';
    case 'Z' || 'z':
      return char === 'Z' ? 'C' : 'c';
    default:
      return String.fromCharCode(char.charCodeAt() + 3);
  }
}

function decodeString(encodedStr) {

}

function decodeLetter(char) {
  
}

module.exports = {
  encode: encodeString,
  decode: decodeString
};