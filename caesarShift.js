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
  return encodedStr
    .split('')
    .reduce((decodedStr, encodedChar) => {
      if (encodedChar.match(/[A-z]/)) {
        return decodedStr + decodeLetter(encodedChar);
      } else {
        return decodedStr + encodedChar;
      }
    }, '');
}

function decodeLetter(char) {
  switch (char) {
    case 'A' || 'a':
      return char === 'A' ? 'X' : 'x';
    case 'B' || 'b':
      return char === 'B' ? 'Y' : 'y';
    case 'C' || 'c':
      return char === 'C' ? 'Z' : 'z';
    default:
      return String.fromCharCode(char.charCodeAt() - 3);
  }
}

module.exports = {
  encode: encodeString,
  decode: decodeString
};