import { describe, it, expect } from 'vitest'
import {
  arrToString,
  findIndex,
  first,
  hasEvenNumber,
  hasUniqueValues,
  intersection,
  isSorted,
  last,
  lastNElements,
  removeDuplicated,
  removeElement,
} from '../array'

const mockStrArr = ['a', 'b', 'c', 'd']
const mocNumberArr = [1, 0, 3, 6, 9, 8]
const mockOne = {
  name: 'john',
  age: 20,
}
const mockTwo = {
  name: 'ken',
  age: 100,
}
const mockThree = {
  name: 'alice',
  age: 30,
}
const mockObjArr = [mockOne, mockTwo, mockThree]

describe('last', () => {
  it('should return the last element - string array', () => {
    const result = last(mockStrArr)
    expect(result).toEqual('d')
  })

  it('should return the last element - number array', () => {
    const result = last(mocNumberArr)
    expect(result).toEqual(8)
  })

  it('should return the last element - obj array', () => {
    const result = last(mockObjArr)
    expect(result).toBe(mockThree)
  })
})

describe('first', () => {
  it('should return the last element - string array', () => {
    const result = first(mockStrArr)
    expect(result).toEqual('a')
  })

  it('should return the last element - number array', () => {
    const result = first(mocNumberArr)
    expect(result).toEqual(1)
  })

  it('should return the last element - obj array', () => {
    const result = first(mockObjArr)
    expect(result).toBe(mockOne)
  })
})

describe('removeDuplicated', () => {
  it('should remove duplicated elements str', () => {
    const mockStrArr = ['a', 'b', 'c', 'e', 'a', 'b', 'f']
    const result = removeDuplicated(mockStrArr)
    expect(result).toEqual(['a', 'b', 'c', 'e', 'f'])
  })

  it('should remove duplicated elements number', () => {
    const mockNumArr = [1, 2, 3, 4, 9, 1, 4]
    const result = removeDuplicated(mockNumArr)
    expect(result).toEqual([1, 2, 3, 4, 9])
  })
})

describe('arrToString', () => {
  it('should return the correct string for an array of strings', () => {
    const result = arrToString(['hello', 'world'])
    expect(result).to.equal('hello,world')
  })

  it('should return the correct string for an array of numbers', () => {
    const result = arrToString([1, 2, 3])
    expect(result).to.equal('1,2,3')
  })

  it('should handle empty arrays', () => {
    const result = arrToString([])
    expect(result).to.equal('')
  })
})

describe('findIndex', () => {
  it('should return the correct index when the element is in the array number', () => {
    const arr = [1, 2, 3, 4, 5]
    const element = 3
    const result = findIndex(arr, element)
    expect(result).to.equal(2)
  })

  it('should return -1 when the element is not in the array', () => {
    const arr = [1, 2, 3, 4, 5]
    const element = 6
    const result = findIndex(arr, element)
    expect(result).to.equal(-1)
  })

  it('should return the correct index when the element is in the array string', () => {
    const arr = ['a', 'v', 'd', 'y', 'e']
    const element = 'e'
    const result = findIndex(arr, element)
    expect(result).to.equal(4)
  })

  it('should return the correct index when the element is in the array object', () => {
    const result = findIndex(mockObjArr, mockTwo)
    expect(result).to.equal(1)
  })
})

describe('isSorted', () => {
  it('should return true for an array sorted in ascending order', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(isSorted(arr, 'asc')).toBe(true)
  })

  it('should return false for an array not sorted in ascending order', () => {
    const arr = [5, 4, 3, 2, 1]
    expect(isSorted(arr, 'asc')).toBe(false)
  })

  it('should return true for an array sorted in descending order', () => {
    const arr = [5, 4, 3, 2, 1]
    expect(isSorted(arr, 'desc')).toBe(true)
  })

  it('should return false for an array not sorted in descending order', () => {
    const arr = [1, 2, 3, 4, 5]
    expect(isSorted(arr, 'desc')).toBe(false)
  })
})

describe('removeElement', () => {
  it('removes the specified element from an array', () => {
    expect(removeElement([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5])
    expect(removeElement(['a', 'b', 'c', 'd', 'e'], 'c')).toEqual([
      'a',
      'b',
      'd',
      'e',
    ])
    expect(removeElement([true, false, true], true)).toEqual([false])
  })

  it('returns the original array if the element is not found', () => {
    expect(removeElement([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 4, 5])
    expect(removeElement(['a', 'b', 'c', 'd', 'e'], 'f')).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
    ])
    expect(removeElement([true, false, true], false)).toEqual([true, true])
  })
})

describe('hasUniqueValues', () => {
  it('should return true for arrays with unique values', () => {
    expect(hasUniqueValues([1, 2, 3, 4, 5])).toBe(true)
    expect(hasUniqueValues(['a', 'b', 'c', 'd'])).toBe(true)
    expect(hasUniqueValues([true, false])).toBe(true)
  })

  it('should return false for arrays with duplicate values', () => {
    expect(hasUniqueValues([1, 1, 2, 2, 3, 3])).toBe(false)
    expect(hasUniqueValues(['a', 'a', 'b', 'b'])).toBe(false)
    expect(hasUniqueValues([true, true, false, false])).toBe(false)
  })

  it('should return true for empty arrays', () => {
    expect(hasUniqueValues([])).toBe(true)
  })
})

describe('hasEvenNumber', () => {
  it('returns true when the array contains an even number', () => {
    const arr = [1, 3, 5, 2]
    expect(hasEvenNumber(arr)).toBe(true)
  })

  it('returns false when the array does not contain an even number', () => {
    const arr = [1, 3, 5, 7]
    expect(hasEvenNumber(arr)).toBe(false)
  })

  it('returns false when the array is empty', () => {
    const arr: number[] = []
    expect(hasEvenNumber(arr)).toBe(false)
  })
})

describe('lastNElements', () => {
  it('returns the last n elements from the array', () => {
    expect(lastNElements([1, 2, 3, 4, 5], 2)).toEqual([4, 5])
    expect(lastNElements(['a', 'b', 'c', 'd', 'e'], 3)).toEqual(['c', 'd', 'e'])
  })

  it('returns an empty array when n is 0', () => {
    expect(lastNElements([1, 2, 3, 4, 5], 0)).toEqual([])
  })

  it('returns the entire array when n is greater than the array length', () => {
    expect(lastNElements([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5])
  })
})

describe('intersection', () => {
  it('should return the intersection of two arrays', () => {
    const arr1 = [1, 2, 3, 4]
    const arr2 = [3, 4, 5, 6]
    const result = intersection(arr1, arr2)
    expect(result).toEqual([3, 4])
  })

  it('should return null if there is no intersection', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const result = intersection(arr1, arr2)
    expect(result).toBeNull()
  })
})
