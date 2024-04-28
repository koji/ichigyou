/**
 * Removes duplicates from an array of numbers or strings.
 * @param arr - The array to remove duplicates from.
 * @returns A new array with duplicates removed.
 */
export const removeDuplicated = <T extends number | string>(arr: T[]): T[] => [
  ...new Set(arr),
]

/**
 * Gets the last element of an array.
 * @param arr - The array to get the last element from.
 * @returns The last element of the array.
 */
export const last = <T>(arr: T[]): T => arr[arr.length - 1]

/**
 * Gets the first element of an array.
 * @param arr - The array to get the first element from.
 * @returns The first element of the array.
 */
export const first = <T>(arr: T[]): T => arr[0]

/**
 * Converts an array to a string.
 *
 * @param arr - The array to be converted.
 * @returns The input array converted to a string, with elements separated by commas.
 *
 * @example
 * ```typescript
 * const result = arrToString(['hello', 'world']);
 * console.log(result); // 'hello,world'
 * ```
 */
export const arrToString = (arr: Array<any>): string => arr.join(',')

/**
 * Finds the index of a given element in an array.
 *
 * @param arr - The array in which to find the element.
 * @param element - The element to find.
 * @returns The index of the element in the array, or -1 if the element is not found.
 *
 * @example
 * ```typescript
 * const arr = [1, 2, 3, 4, 5];
 * const element = 3;
 * const index = findIndex(arr, element);
 * console.log(index); // 2
 * ```
 */
export const findIndex = <T>(arr: T[], element: T): number =>
  arr.indexOf(element)

/**
 * Checks if an array is sorted in ascending or descending order.
 *
 * @param {T[]} arr - The array to check.
 * @param {SortType} sortType - The type of sort ('asc' or 'desc').
 * @returns {boolean} Returns true if the array is sorted according to the sortType, otherwise false.
 */
type SortType = 'asc' | 'desc'
export const isSorted = <T>(arr: T[], sortType: SortType): boolean =>
  sortType === 'asc'
    ? arr.every(
        (element: T, index: number) => index === 0 || element > arr[index - 1]
      )
    : arr.every(
        (element: T, index: number) => index === 0 || element < arr[index - 1]
      )

/**
 * Removes a specific element from an array.
 * @param arr - The array from which to remove the element.
 * @param element - The element to remove.
 * @returns A new array with the specified element removed.
 */
export const removeElement = <T>(arr: T[], element: T): T[] =>
  arr.filter((elm: T) => elm !== element)

/**
 * Checks if an array has unique values.
 * @param arr - The array to be checked.
 * @returns True if all values in the array are unique, false otherwise.
 */
export const hasUniqueValues = <T>(arr: T[]): boolean =>
  new Set(arr).size === arr.length

/**
 * Checks if an array contains an even number.
 * @param arr - The array of numbers to check.
 * @returns True if the array contains at least one even number, false otherwise.
 */
export const hasEvenNumber = (arr: number[]): boolean =>
  arr.some((num: number) => num % 2 === 0)

/**
 * Returns the first 'n' elements of an array.
 * @param arr - The array from which to extract elements.
 * @param n - The number of elements to extract from the start of the array.
 * @returns A new array containing the first 'n' elements from the input array.
 */
export const firstNElements = <T>(arr: T[], n: number): T[] => arr.slice(0, n)

/**
 * Returns the last 'n' elements from the given array.
 * @param arr - The array from which to extract elements.
 * @param n - The number of elements to extract from the end of the array.
 * @returns A new array containing the last 'n' elements from the input array.
 */
export const lastNElements = <T>(arr: T[], n: number): T[] =>
  n === 0 ? [] : arr.slice(-n)

/**
 * Returns the intersection of two arrays or null if there is no intersection.
 * @param arr1 - The first array.
 * @param arr2 - The second array.
 * @returns An array that contains the intersection of `arr1` and `arr2`, or `null` if there is no intersection.
 */
export const intersection = <T>(arr1: T[], arr2: T[]): T[] | null =>
  arr1.filter((val) => arr2.includes(val)).length === 0
    ? null
    : arr1.filter((val) => arr2.includes(val))
