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

/**
 * Sorts an array of objects based on a specified property.
 *
 * @template T - The type of the objects in the array.
 * @param {T[]} arr - The array to sort.
 * @param {string} prop - The property to sort by.
 * @returns {T[]} - The sorted array.
 */
export function sortByProperty<T>(arr: T[], prop: string): T[] {
  return arr.sort((a: any, b: any) => a[prop] - b[prop])
}
