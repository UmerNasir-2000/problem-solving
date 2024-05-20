function isEven(num: number): boolean {
  return Number.isInteger(num) && num % 2 === 0
}

function isOdd(num: number): boolean {
  return Number.isInteger(num) && !isEven(num)
}

export { isEven, isOdd }
