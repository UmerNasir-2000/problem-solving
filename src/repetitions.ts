/**  Print the following sequence 6, 8, 10, 12, ..., 66 */

function printEvenSequence(start: number, end: number): string {
  let output = ""

  if (start > end) return output

  for (let i = start; i <= end; i += 2) output += i + " "
  return output.trim()
}

export { printEvenSequence }
