import { describe, it, expect } from 'vitest'
import { hasProperty, isEmptyObject } from '../object'

describe('hasProperty', () => {
  it('should return true if property exists in the object', () => {
    const obj = { name: 'Copilot', version: '1.0' }
    expect(hasProperty(obj, 'name')).toBeTruthy()
  })

  it('should return false if property does not exist in the object', () => {
    const obj = { name: 'Copilot', version: '1.0' }
    expect(hasProperty(obj, 'age')).toBeFalsy()
  })

  it('should handle properties with undefined as value correctly', () => {
    const obj = { name: 'Copilot', version: undefined }
    expect(hasProperty(obj, 'version')).toBeTruthy()
  })

  it('should return false for properties not existing even in prototype chain', () => {
    const obj = { name: 'Copilot' }
    expect(hasProperty(obj, 'toString')).toBeFalsy()
  })
})

describe('isEmptyObject', () => {
  it('should return true for an empty object', () => {
    const obj = {}
    const result = isEmptyObject(obj)
    expect(result).toBe(true)
  })

  it('should return false for a non-empty object', () => {
    const obj = { key: 'value' }
    const result = isEmptyObject(obj)
    expect(result).toBe(false)
  })
})
