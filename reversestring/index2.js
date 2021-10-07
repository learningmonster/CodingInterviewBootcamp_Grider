// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const testString = "Hello to you a b c     "
console.log(testString)
console.log(reverse(testString))

function reverse(str) {
  // const arr = str.split("")
  // const reverseArr = arr.reverse()
  // console.log(arr)
  // const reverseString = reverseArr.join("")
  //
  // return reverseString

  return str.split('').reverse().join('')
}

module.exports = reverse;
