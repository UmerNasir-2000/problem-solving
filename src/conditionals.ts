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

export {
  isEven,
  isOdd,
  isOddWithBitwise,
  isEvenWithBitwise,
  digitToWord,
  isVowel,
  isConsonant,
}
