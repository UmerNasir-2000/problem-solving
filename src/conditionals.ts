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

  if (num >= 0 && num <= 9 && Number.isInteger(num)) return words[num]

  return ""
}

export { isEven, isOdd, isOddWithBitwise, isEvenWithBitwise, digitToWord }
