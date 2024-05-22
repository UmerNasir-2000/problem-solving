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

export { printEvenSequence, getFactorial }
