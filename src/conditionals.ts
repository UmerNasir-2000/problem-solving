function isEven(num: number): boolean {
  return Number.isInteger(num) && num % 2 === 0
}

function isOdd(num: number): boolean {
  return Number.isInteger(num) && !isEven(num)
}

/** If last bit is 1 then number is odd otherwise even. */
function isOddWithBitwise(num: number): boolean {
  return !!(num & 1)
}

function isEvenWithBitwise(num: number): boolean {
  return !isOddWithBitwise(num)
}

export { isEven, isOdd, isOddWithBitwise, isEvenWithBitwise }
