import { describe, it, expect } from 'vitest'

import { isEmptyString, countWords, reverseString, isNumeric } from '../string'

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
