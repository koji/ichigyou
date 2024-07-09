import { describe, it, expect } from 'vitest'

import {
  countOccurrences,
  countTextRows,
  countWords,
  findLongestWord,
  isAnagram,
  isEmptyString,
  isNumeric,
  isPalindromeCaseSensitive,
  isValidEmail,
  isValidURL,
  removeDuplicatedChars,
  removeVowels,
  removeWhitespace,
  reverseString,
  reverseWords,
  shuffleCharacters,
  toTitleCase,
  truncateString,
  countLetters,
} from '../string'

describe('isEmptyString', () => {
  it('should return true for an empty string', () => {
    expect(isEmptyString(' ')).toBe(true)
  })

  it('should return false for a non-empty string', () => {
    expect(isEmptyString('Hello')).toBe(false)
  })
})

describe('countWords', () => {
  it('should return 0 for an empty string', () => {
    expect(countWords('')).toBe(0)
  })

  it('should return 1 for a single word', () => {
    expect(countWords('Hello')).toBe(1)
  })

  it('should return 5 for a sentence with five words', () => {
    expect(countWords('The quick brown fox jumps')).toBe(5)
  })

  it('should ignore leading and trailing spaces', () => {
    expect(countWords('  Hello  ')).toBe(1)
  })
})

describe('reverseString', () => {
  it('should return the reverse of a non-empty string', () => {
    expect(reverseString('Hello')).toBe('olleH')
  })

  it('should return an empty string when the input is an empty string', () => {
    expect(reverseString('')).toBe('')
  })
})

describe('isNumeric', () => {
  it('should return true for numeric strings', () => {
    expect(isNumeric('123')).toBe(true)
    expect(isNumeric('3.14')).toBe(true)
  })

  it('should return false for non-numeric strings', () => {
    expect(isNumeric('hello')).toBe(false)
  })

  it('should return true for strings representing zero', () => {
    expect(isNumeric('0')).toBe(true)
  })

  it('should return false for empty strings', () => {
    expect(isNumeric('')).toBe(false)
  })
})

describe('toTitleCase', () => {
  it('should return the correct title case for a single word', () => {
    const result = toTitleCase('hello')
    expect(result).to.equal('Hello')
  })

  it('should return the correct title case for multiple words', () => {
    const result = toTitleCase('hello world')
    expect(result).to.equal('Hello World')
  })

  it('should handle empty strings', () => {
    const result = toTitleCase('')
    expect(result).to.equal('')
  })
})

describe('truncateString', () => {
  it("truncates a string to a specified maximum length and appends '...' if the string was truncated", () => {
    expect(truncateString('Hello, world!', 5)).toBe('Hello...')
    expect(truncateString('TypeScript is awesome!', 10)).toBe('TypeScript...')
    expect(
      truncateString(
        'This is a really long string that needs to be truncated.',
        20
      )
    ).toBe('This is a really lon...')
  })

  it('returns the original string if it was shorter than the maximum length', () => {
    expect(truncateString('Hello, world!', 50)).toBe('Hello, world!')
    expect(truncateString('TypeScript', 20)).toBe('TypeScript')
    expect(truncateString('Short string', 20)).toBe('Short string')
  })
})

describe('isValidEmail', () => {
  it('should return true for valid emails', () => {
    expect(isValidEmail('test@example.com')).toBe(true)
    expect(isValidEmail('john.doe@example.co.uk')).toBe(true)
  })

  it('should return false for invalid emails', () => {
    expect(isValidEmail('test@example')).toBe(false)
    expect(isValidEmail('test@.com')).toBe(false)
    expect(isValidEmail('test@com')).toBe(false)
    expect(isValidEmail('test example.com')).toBe(false)
  })
})

describe('countTextRows', () => {
  it('should return the correct number of rows', () => {
    const input = 'Hello\nWorld\nThis is\na test'
    const expectedOutput = 4
    expect(countTextRows(input)).toBe(expectedOutput)
  })

  it('should return 0 if the string is empty', () => {
    const input = ''
    const expectedOutput = 0
    expect(countTextRows(input)).toBe(expectedOutput)
  })
})

describe('isValidURL', () => {
  it('should return true for a valid URL', async () => {
    const url = 'https://www.example.com'
    const result = await isValidURL(url)
    expect(result).toBe(true)
  })

  it('should return false for an invalid URL', async () => {
    const url = 'invalid_url'
    const result = await isValidURL(url)
    expect(result).toBe(false)
  })
})

describe('removeWhitespace', () => {
  it('should return the string without spaces', () => {
    const str = 'Hello, World!'
    const result = removeWhitespace(str)
    expect(result).toBe('Hello,World!')
  })

  it('should return the string without any whitespace characters', () => {
    const str = 'Hello\t\n World!'
    const result = removeWhitespace(str)
    expect(result).toBe('HelloWorld!')
  })

  it('should return an empty string if the input is an empty string', () => {
    const str = ''
    const result = removeWhitespace(str)
    expect(result).toBe('')
  })
})

describe('isPalindromeCaseSensitive', () => {
  it('should return true for a palindrome string', () => {
    expect(isPalindromeCaseSensitive('racecar')).toBe(true)
  })

  it('should return false for a non-palindrome string', () => {
    expect(isPalindromeCaseSensitive('hello')).toBe(false)
  })

  it('should return true for an empty string', () => {
    expect(isPalindromeCaseSensitive('')).toBe(true)
  })

  it('should return false for a string that is only a palindrome when case is ignored', () => {
    expect(isPalindromeCaseSensitive('Racecar')).toBe(false)
  })
})

describe('findLongestWord', () => {
  it('finds the longest word correctly', () => {
    expect(findLongestWord('apple banana american-cherry')).toBe(
      'american-cherry'
    )
    expect(findLongestWord('hello world')).toBe('hello')
  })
})

describe('countOccurrences', () => {
  it('counts occurrences correctly', () => {
    expect(countOccurrences('hello world', 'o')).toBe(2)
    expect(countOccurrences('banana', 'a')).toBe(3)
    expect(countOccurrences('koji', 'i')).toBe(1)
  })
})

describe('removeDuplicatedChars', () => {
  it('removes duplicated characters', () => {
    expect(removeDuplicatedChars('hello')).toBe('helo')
    expect(removeDuplicatedChars('banana')).toBe('ban')
    expect(removeDuplicatedChars('aabbcc')).toBe('abc')
  })

  it('handles empty strings', () => {
    expect(removeDuplicatedChars('')).toBe('')
  })

  it('preserves order of characters', () => {
    expect(removeDuplicatedChars('abcbca')).toBe('abc')
  })
})

describe('reverseWords', () => {
  it('should reverse the order of words in a string', () => {
    const str = 'Hello World'
    expect(reverseWords(str)).toBe('World Hello')
  })

  it('should handle a string with a single word', () => {
    const str = 'Hello'
    expect(reverseWords(str)).toBe('Hello')
  })

  it('should handle an empty string', () => {
    const str = ''
    expect(reverseWords(str)).toBe('')
  })
})

describe('shuffleCharacters', () => {
  it('should return a string with the same length as the input', () => {
    const str = 'Hello World'
    expect(shuffleCharacters(str).length).toBe(str.length)
  })

  it('should return a string with the same characters as the input', () => {
    const str = 'Hello World'
    const shuffled = shuffleCharacters(str)
    expect([...str].sort().join('')).toBe([...shuffled].sort().join(''))
  })

  it('should handle an empty string', () => {
    const str = ''
    expect(shuffleCharacters(str)).toBe('')
  })
})

describe('isAnagram function', () => {
  it('should return true for anagrams', () => {
    expect(isAnagram('listen', 'silent')).toBe(true)
  })

  it('should return false for non-anagrams', () => {
    expect(isAnagram('hello', 'world')).toBe(false)
  })
})

describe('removeVowels', () => {
  it('removes all vowels from a string', () => {
    expect(removeVowels('Hello World')).toBe('Hll Wrld')
    expect(removeVowels('AEIOUaeiou')).toBe('')
    expect(removeVowels('Microsoft Copilot')).toBe('Mcrsft Cplt')
    expect(removeVowels('')).toBe('')
  })
})

describe('countLetters', () => {
  it('returns an object with letter counts', () => {
    const result = countLetters('Hello, World!')

    // Assert the expected behavior
    expect(result).toEqual({
      h: 1,
      e: 1,
      l: 3,
      o: 2,
      w: 1,
      r: 1,
      d: 1,
    })
  })
})
