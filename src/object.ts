/**
 * Checks if the specified property is an own property of the given object.
 *
 * @template T - The generic type parameter representing the property keys.
 * @param {Record<string, unknown>} obj - The object to check against.
 * @param {T} prop - The property to check for in the object.
 * @returns {boolean} - Returns `true` if the property is an own property of the object, otherwise `false`.
 */

export const hasProperty = <T extends keyof any>(
  obj: Record<string, unknown>,
  prop: T
): boolean => Object.prototype.hasOwnProperty.call(obj, prop)

/**
 * Checks if a given object is empty.
 * @param obj - The object to be checked.
 * @returns `true` if the object is empty, `false` otherwise.
 */
export const isEmptyObject = (obj: Object): boolean =>
  Object.keys(obj).length === 0
