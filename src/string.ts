/**
 * Checks if a string is empty after trimming.
 * @param str - The string to check.
 * @returns A boolean indicating whether the string is empty after trimming.
 */
export const isEmptyString = (str: string): boolean => str.trim().length === 0

/**
 * Counts the number of words in a string.
 * @param str - The string to count words in.
 * @returns The number of words in the string.
 */
export const countWords = (str: string): number =>
  str.trim().length === 0 ? 0 : str.trim().split(/\s+/).length

/**
 * Reverses a string.
 * @param str - The string to reverse.
 * @returns The reversed string.
 */
export const reverseString = (str: string) => str.split('').reverse().join('')

/**
 * Checks if a string can be converted to a number.
 * @param str - The string to check.
 * @returns A boolean indicating whether the string can be converted to a number.
 */
export const isNumeric = (str: string): boolean =>
  str.length === 0 ? false : !isNaN(Number(str))
