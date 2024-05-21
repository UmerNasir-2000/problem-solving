function isEven(num: number): boolean {
  return Number.isInteger(num) && num % 2 === 0
}

function isOdd(num: number): boolean {
  return Number.isInteger(num) && !isEven(num)
}

/** Using bitwise AND. If last bit is 1 then number is odd otherwise even. */
function isOddWithBitwise(num: number): boolean {
  return !!(num & 1)
}

function isEvenWithBitwise(num: number): boolean {
  return !isOddWithBitwise(num)
}

function digitToWord(num: number): string {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]

  if (Number.isInteger(num) && num >= 0 && num <= 9) return words[num]

  return ""
}

function isVowel(char: string): boolean {
  if (!char || char.trim().length > 1) return false

  const vowels: Record<string, boolean> = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  }

  return !!vowels[char.toLowerCase()]
}

function isConsonant(char: string): boolean {
  return /^[a-z]$/i.test(char) && !isVowel(char)
}
/**
 *  Leap year must satisfy these conditions...
 * 1. The year is a multiple of 400
 * 2. The year is a multiple of 4 and not a multiple of 100.
 * 1900 is not a leap year but 2000 and 2024 are.
 */
function isLeapYear(year: number): boolean {
  if (!Number.isInteger(year) && year > 0) return false

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) return true

  return false
}

/**
 *  For multiples of three print "Foo" instead of the number and for the multiples of five print "Bar".
 *  For numbers which are multiples of both three and five print "FooBar".
 *  Additionally, for multiples of seven print "Qix".
 *  For numbers which are multiples of three, five, and seven print "FooBarQix"
 */
function fooBarQix(num: number): string {
  let output = ""

  if (num % 3 === 0 && num % 5 === 0 && num % 7 === 0) output = "FooBarQix"
  else if (num % 3 === 0 && num % 5 === 0) output = "FooBar"
  else if (num % 3 === 0 && num % 7 === 0) output = "FooQix"
  else if (num % 5 === 0 && num % 7 === 0) output = "BarQix"
  else if (num % 3 === 0) output = "Foo"
  else if (num % 5 === 0) output = "Bar"
  else if (num % 7 === 0) output = "Qix"

  return output
}

function fromAsciiToCharacter(code: number): string {
  if (code < 0 || code > 127) return ""
  return String.fromCharCode(code)
}

function fromCharacterToAscii(char: string): number {
  if (!char || char.length > 1) return -1
  return char.charCodeAt(0)
}

export {
  isEven,
  isOdd,
  isOddWithBitwise,
  isEvenWithBitwise,
  digitToWord,
  isVowel,
  isConsonant,
  isLeapYear,
  fooBarQix,
  fromAsciiToCharacter,
  fromCharacterToAscii,
}
