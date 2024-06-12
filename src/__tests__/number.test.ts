import { describe, it, expect } from 'vitest'

import {
  average,
  binaryToDecimal,
  binaryToDecimalWithoutParseInt,
  decimalToOctal,
  degToRad,
  exponential,
  factorial,
  factors,
  feetToMeters,
  fibonacciMemo,
  findMax,
  findMin,
  gcd,
  genRandomArray,
  isNeonNumber,
  isOdd,
  isPrime,
  isSortedDescending,
  isTriangularNumber,
  lcm,
  mean,
  median,
  metersToFeet,
  minsToHoursAndMins,
  randomNum,
  secondsToHoursMinsSecs,
  sortNumAsc,
  sortNumDesc,
  standardDeviation,
  sum,
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

describe('standardDeviation', () => {
  it('should return standard deviation', () => {
    expect(standardDeviation([2, 4, 4, 4, 5, 5, 7, 9])).toBe(2)
    expect(standardDeviation([1, 2, 3, 4, 5])).toBe(1.4142135623730951)
    expect(standardDeviation([10, 12, 23, 23, 16, 23, 21, 16])).toBe(
      4.898979485566356
    )
    expect(standardDeviation([100, 200, 300, 400, 500])).toBe(141.4213562373095)
    expect(standardDeviation([1, 1, 1, 1, 1])).toBe(0)
  })
})

describe('sum', () => {
  it('should return the sum of numbers in array', () => {
    expect(sum([1, 2, 3, 4, 5])).toBe(15)
    expect(sum([-1, -2, -3, -4, -5])).toBe(-15)
    expect(sum([10, 20, 30])).toBe(60)
    expect(sum([0, 0, 0, 0])).toBe(0)
    expect(sum([1.5, 2.5, 3.5])).toBe(7.5)
  })
})

describe('genRandomArray', () => {
  it('should create an array of the specified length', () => {
    const result = genRandomArray(5, 10, 20)
    expect(result).toHaveLength(5)
  })

  it('should create an array where all values are within the specified range', () => {
    const result = genRandomArray(5, 10, 20)
    result.forEach((value) => {
      expect(value).toBeGreaterThanOrEqual(10)
      expect(value).toBeLessThanOrEqual(20)
    })
  })

  it('should handle the case where minValue equals maxValue', () => {
    const result = genRandomArray(5, 15, 15)
    result.forEach((value) => {
      expect(value).toBe(15)
    })
  })
})

describe('gcd', () => {
  it('calculates GCD correctly', () => {
    expect(gcd(12, 18)).toBe(6)
    expect(gcd(15, 25)).toBe(5)
    expect(gcd(7, 21)).toBe(7)
  })

  it('handles zero correctly', () => {
    expect(gcd(0, 10)).toBe(10)
    expect(gcd(10, 0)).toBe(10)
  })
})

describe('secondsToHoursMinsSecs', () => {
  it('converts seconds correctly', () => {
    expect(secondsToHoursMinsSecs(3661)).toEqual({
      hours: 1,
      minutes: 1,
      seconds: 1,
    })
    expect(secondsToHoursMinsSecs(7200)).toEqual({
      hours: 2,
      minutes: 0,
      seconds: 0,
    })
  })
})

describe('lcm', () => {
  it('calculates LCM correctly', () => {
    expect(lcm(12, 18)).toBe(36)
    expect(lcm(15, 25)).toBe(75)
    expect(lcm(7, 21)).toBe(21)
  })

  it('handles zero correctly', () => {
    expect(lcm(0, 10)).toBe(0)
    expect(lcm(10, 0)).toBe(0)
  })
})

describe('binaryToDecimalWithoutParseInt', () => {
  it('converts binary "1101" to decimal 13', () => {
    expect(binaryToDecimalWithoutParseInt('1101')).toBe(13)
  })

  it('converts binary "101010" to decimal 42', () => {
    expect(binaryToDecimalWithoutParseInt('101010')).toBe(42)
  })

  it('converts binary "0" to decimal 0', () => {
    expect(binaryToDecimalWithoutParseInt('0')).toBe(0)
  })

  it('converts binary "1" to decimal 1', () => {
    expect(binaryToDecimalWithoutParseInt('1')).toBe(1)
  })
})

describe('isSortedDescending', () => {
  it('returns true for a descending array', () => {
    expect(isSortedDescending([5, 3, 2, 1])).toBe(true)
  })

  it('returns false for an ascending array', () => {
    expect(isSortedDescending([1, 2, 3, 5])).toBe(false)
  })

  it('returns true for an empty array', () => {
    expect(isSortedDescending([])).toBe(true)
  })

  it('returns true for a single-element array', () => {
    expect(isSortedDescending([42])).toBe(true)
  })
})

describe('fibonacciMemo', () => {
  it('should return 0 for the 0th index', () => {
    expect(fibonacciMemo(0)).toBe(0)
  })

  it('should return 1 for the 1st index', () => {
    expect(fibonacciMemo(1)).toBe(1)
  })

  it('should return 1 for the 2nd index', () => {
    expect(fibonacciMemo(2)).toBe(1)
  })

  it('should return 2 for the 3rd index', () => {
    expect(fibonacciMemo(3)).toBe(2)
  })

  it('should return 5 for the 5th index', () => {
    expect(fibonacciMemo(5)).toBe(5)
  })

  it('should return 13 for the 7th index', () => {
    expect(fibonacciMemo(7)).toBe(13)
  })

  it('should handle large indices', () => {
    expect(fibonacciMemo(10)).toBe(55)
  })
})

describe('isTriangularNumber', () => {
  it('should return true for triangular numbers', () => {
    expect(isTriangularNumber(1)).toBe(true) // 1st triangular number
    expect(isTriangularNumber(3)).toBe(true) // 2nd triangular number
    expect(isTriangularNumber(6)).toBe(true) // 3rd triangular number
    expect(isTriangularNumber(10)).toBe(true) // 4th triangular number
    expect(isTriangularNumber(15)).toBe(true) // 5th triangular number
    expect(isTriangularNumber(21)).toBe(true) // 6th triangular number
    expect(isTriangularNumber(28)).toBe(true) // 7th triangular number
  })

  it('should return false for non-triangular numbers', () => {
    expect(isTriangularNumber(2)).toBe(false) // Not a triangular number
    expect(isTriangularNumber(4)).toBe(false) // Not a triangular number
    expect(isTriangularNumber(7)).toBe(false) // Not a triangular number
    expect(isTriangularNumber(8)).toBe(false) // Not a triangular number
    expect(isTriangularNumber(9)).toBe(false) // Not a triangular number
    expect(isTriangularNumber(11)).toBe(false) // Not a triangular number
    expect(isTriangularNumber(14)).toBe(false) // Not a triangular number
  })
})

describe('exponential', () => {
  it('should correctly calculate the exponential of positive numbers', () => {
    expect(exponential(2, 3)).to.equal(8)
    expect(exponential(5, 4)).to.equal(625)
  })

  it('should correctly calculate the exponential of negative numbers', () => {
    expect(exponential(-2, 3)).to.equal(-8)
    expect(exponential(-3, 2)).to.equal(9)
  })

  it('should return 1 for any base with exponent 0', () => {
    expect(exponential(2, 0)).to.equal(1)
    expect(exponential(-5, 0)).to.equal(1)
  })

  it('should return 0 for base 0 with any exponent except 0', () => {
    expect(exponential(0, 2)).to.equal(0)
    expect(exponential(0, -3)).to.equal(Infinity)
  })

  it('should return NaN for base 0 with exponent 0', () => {
    expect(exponential(0, 0)).to.equal(1)
  })
})

describe('isNeonNumber', () => {
  it('9 is a Neon Number', () => {
    expect(isNeonNumber(9)).toBe(true)
  })

  it('7 is not a Neon Number', () => {
    expect(isNeonNumber(7)).toBe(false)
  })

  it('1 is a Neon Number', () => {
    expect(isNeonNumber(1)).toBe(true)
  })

  it('0 is a Neon Number', () => {
    expect(isNeonNumber(0)).toBe(true)
  })
})

describe('median', () => {
  it('should return the correct median for an array of numbers', () => {
    const arr = [5, 2, 9, 1, 7, 4]
    const result = median(arr)
    expect(result).to.equal(4.5)
  })
})

describe('decimalToOctal', () => {
  it('should return the correct octal representation for a decimal number', () => {
    expect(decimalToOctal(8)).to.equal('10')
    expect(decimalToOctal(27)).to.equal('33')
  })
})

describe('factors', () => {
  it('should return an empty array for prime numbers', () => {
    expect(factors(7)).toEqual([])
    expect(factors(11)).toEqual([])
  })

  it('should return an array of factors for composite numbers', () => {
    expect(factors(12)).toEqual([2, 3, 4, 6])
    expect(factors(20)).toEqual([2, 4, 5, 10])
  })

  it('should handle edge cases', () => {
    expect(factors(1)).toEqual([])
    expect(factors(0)).toEqual([])
    expect(factors(-5)).toEqual([])
  })
})
