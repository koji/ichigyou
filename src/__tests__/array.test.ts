import { describe, it, expect } from 'vitest'
import { first, last } from '../array'

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
    expect(result).toBe(8)
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
    expect(result).toBe(1)
  })

  it('should return the last element - obj array', () => {
    const result = first(mockObjArr)
    expect(result).toBe(mockOne)
  })
})
