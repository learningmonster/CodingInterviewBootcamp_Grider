// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const testString = "Hello to you "
console.log(testString)
console.log(reverse(testString))

function reverse(str) {
  let reverseString = ""

  // const len = str.length
  // console.log(len)
  // for (let i = 1; i <= len; i++) {
  //   reverseString += str[len - i]
  // }

  for (character of str) {
    reverseString = character + reverseString
    debugger
  }

  return reverseString
}

module.exports = reverse;
