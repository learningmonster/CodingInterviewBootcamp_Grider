// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const testString = "Hello to you f g h         "
console.log(testString)
console.log(reverse(testString))
// debugger;

function reverse(str) {
  // let reverseString = ""
  //
  // reverseString = str.split("").reduce((reversed, character) => {
  //   return character + reversed;
  // }, "");
  //
  // return reverseString

  debugger;
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
