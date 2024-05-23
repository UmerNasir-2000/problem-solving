/**  Print the following sequence 6, 8, 10, 12, ..., 66 */

function printEvenSequence(start: number, end: number): string {
  let output = ""

  if (start > end) return output

  for (let i = start; i <= end; i += 2) output += i + " "
  return output.trim()
}

function getFactorial(num: number): number {
  let factorial = 1

  if (num < 0) return -1
  if (num === 0) return factorial

  for (let i = 1; i <= num; i++) {
    factorial *= i
  }

  return factorial
}

/** Multiply two numbers without using * operator */
function multiply(a: number, b: number): number {
  if (a == 0 || b == 0) return 0

  let product = a
  let i = 1

  while (i < b) {
    product += a
    i++
  }

  return product
}

export { printEvenSequence, getFactorial, multiply }
