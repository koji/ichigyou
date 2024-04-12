import { describe, it, expect } from 'vitest'

import { findMax, findMin, sortNumAsc, randomNum, sortNumDesc } from '../number'

const mockNumData = [1, 100, 10, 5, 8, 0, 9, -100]

describe('findMax', () => {
  it('should return the max number of the array', () => {
    const result = findMax(mockNumData)
    expect(result).toEqual(100)
  })
})

describe('findMin', () => {
  it('should return the min number of the array', () => {
    const result = findMin(mockNumData)
    expect(result).toEqual(-100)
  })
})

describe('sortNumAsc', () => {
  it('should return the array ordered by asc', () => {
    const result = sortNumAsc(mockNumData)
    expect(result).toEqual([-100, 0, 1, 5, 8, 9, 10, 100])
  })
})

describe('sortNumDesc', () => {
  it('should return the array ordered by desc', () => {
    const result = sortNumDesc(mockNumData)
    expect(result).toEqual([100, 10, 9, 8, 5, 1, 0, -100])
  })
})

describe('randomNum', () => {
  it('should return a number within the provided range', () => {
    const min = 1
    const max = 10
    for (let i = 0; i < 1000; i++) {
      const num = randomNum(min, max)
      expect(num).toBeGreaterThanOrEqual(min)
      expect(num).toBeLessThanOrEqual(max)
      expect(Number.isInteger(num)).toBeTruthy()
    }
  })

  // Optional: Frequency test to check uniform distribution
  it('should have a uniform distribution', () => {
    const min = 1
    const max = 10
    const outcomes = Array(max - min + 1).fill(0)
    const iterations = 10000
    for (let i = 0; i < iterations; i++) {
      const num = randomNum(min, max)
      outcomes[num - min]++
    }
    outcomes.forEach((count) => {
      const frequency = count / iterations
      // Check if frequency is within some acceptable range
      // For example, for a perfectly uniform distribution in a range of 1-10,
      // each number should appear about 10% of the time.
      expect(frequency).toBeGreaterThan(0.08) // 8% lower bound
      expect(frequency).toBeLessThan(0.12) // 12% upper bound
    })
  })
})
