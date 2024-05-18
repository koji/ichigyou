import { describe, it, expect } from 'vitest'

import {
  average,
  binaryToDecimal,
  degToRad,
  factorial,
  feetToMeters,
  findMax,
  findMin,
  isOdd,
  isPrime,
  mean,
  metersToFeet,
  minsToHoursAndMins,
  randomNum,
  sortNumAsc,
  sortNumDesc,
} from '../number'

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

describe('minsToHoursAndMins', () => {
  it('should return the correct hours and minutes for a given number of minutes', () => {
    const result = minsToHoursAndMins(90)
    expect(result).to.deep.equal({ hours: 1, minutes: 30 })
  })

  it('should return 0 hours and 0 minutes for 0 minutes', () => {
    const result = minsToHoursAndMins(0)
    expect(result).to.deep.equal({ hours: 0, minutes: 0 })
  })

  it('should handle minutes that are not a multiple of 60', () => {
    const result = minsToHoursAndMins(65)
    expect(result).to.deep.equal({ hours: 1, minutes: 5 })
  })
})

describe('average', () => {
  it('returns the average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3)
    expect(average([10, 20, 30, 40, 50])).toBe(30)
    expect(average([-1, -2, -3, -4, -5])).toBe(-3)
  })

  it('returns NaN for an empty array', () => {
    expect(average([])).toBeNaN()
  })
})

describe('binaryToDecimal', () => {
  it('should return correct decimal for binary strings', () => {
    expect(binaryToDecimal('101')).toBe(5)
    expect(binaryToDecimal('1111')).toBe(15)
    expect(binaryToDecimal('1001')).toBe(9)
  })

  it('should return correct decimal for binary numbers', () => {
    expect(binaryToDecimal(101)).toBe(5)
    expect(binaryToDecimal(1111)).toBe(15)
    expect(binaryToDecimal(1001)).toBe(9)
  })

  it('should return 0 for empty string', () => {
    expect(binaryToDecimal('')).toBe(0)
  })
})

describe('feetToMeters', () => {
  it('converts feet to meters correctly', () => {
    expect(feetToMeters(1)).toBeCloseTo(0.3048)
    expect(feetToMeters(10)).toBeCloseTo(3.048)
  })
})

describe('metersToFeet', () => {
  it('converts meters to feet correctly', () => {
    expect(metersToFeet(1)).toBeCloseTo(3.28084)
    expect(metersToFeet(10)).toBeCloseTo(32.8084)
  })
})

describe('mean', () => {
  it('calculates the mean of an array of numbers', () => {
    expect(mean([1, 2, 3, 4, 5])).toEqual(3)
    expect(mean([10, 20, 30, 40, 50])).toEqual(30)
    expect(mean([-1, 0, 1])).toEqual(0)
  })

  it('returns NaN for an empty array', () => {
    expect(mean([])).toEqual(NaN)
  })
})

describe('isPrime', () => {
  it('should return false for numbers less than 2', () => {
    expect(isPrime(-1)).toBe(false)
    expect(isPrime(0)).toBe(false)
    expect(isPrime(1)).toBe(false)
  })

  it('should return true for prime numbers', () => {
    expect(isPrime(2)).toBe(true)
    expect(isPrime(3)).toBe(true)
    expect(isPrime(5)).toBe(true)
    expect(isPrime(7)).toBe(true)
    expect(isPrime(11)).toBe(true)
    expect(isPrime(13)).toBe(true)
  })

  it('should return false for non-prime numbers', () => {
    expect(isPrime(4)).toBe(false)
    expect(isPrime(6)).toBe(false)
    expect(isPrime(8)).toBe(false)
    expect(isPrime(9)).toBe(false)
    expect(isPrime(10)).toBe(false)
  })
})

describe('degToRad', () => {
  it('should correctly convert degrees to radians', () => {
    const degrees = 180
    const expectedRadians = Math.PI
    expect(degToRad(degrees)).toBeCloseTo(expectedRadians)
  })
})

describe('factorial', () => {
  it('should return 1 for input 0', () => {
    const num = 0
    const result = factorial(num)
    expect(result).toBe(1)
  })

  it('should return 1 for input 1', () => {
    const num = 1
    const result = factorial(num)
    expect(result).toBe(1)
  })

  it('should return 120 for input 5', () => {
    const num = 5
    const result = factorial(num)
    expect(result).toBe(120)
  })
})

describe('isOdd', () => {
  it('should return true for odd numbers', () => {
    expect(isOdd(3)).toBe(true)
    expect(isOdd(7)).toBe(true)
    expect(isOdd(-5)).toBe(true)
  })

  it('should return false for even numbers', () => {
    expect(isOdd(2)).toBe(false)
    expect(isOdd(8)).toBe(false)
    expect(isOdd(-4)).toBe(false)
  })

  it('should return false for zero', () => {
    expect(isOdd(0)).toBe(false)
  })
})
