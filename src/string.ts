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
export const reverseString = (str: string): string =>
  str.split('').reverse().join('')

/**
 * Checks if a string can be converted to a number.
 * @param str - The string to check.
 * @returns A boolean indicating whether the string can be converted to a number.
 */
export const isNumeric = (str: string): boolean =>
  str.length === 0 ? false : !isNaN(Number(str))

/**
 * Converts a string to title case.
 *
 * @param str - The string to be converted.
 * @returns The input string converted to title case.
 *
 * @example
 * ```typescript
 * const result = toTitleCase('hello world');
 * console.log(result); // 'Hello World'
 * ```
 */
export const toTitleCase = (str: string): string =>
  str.replace(/\b\w/g, (match) => match.toUpperCase())

/**
 * Truncates a string to a specified maximum length and appends '...' if the string was truncated.
 * @param str - The string to truncate.
 * @param maxLength - The maximum length of the string after truncation.
 * @returns The truncated string, or the original string if it was shorter than the maximum length.
 */
export const truncateString = (str: string, maxLength: number): string =>
  str.length > maxLength ? `${str.slice(0, maxLength)}...` : str

/**
 * Checks if a string is a valid email.
 * @param email - The string to be checked.
 * @returns True if the string is a valid email, false otherwise.
 */
export const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

/**
 * This function counts the number of rows in a given text.
 * @param value - The input string.
 * @returns The number of rows in the input string.
 */
export const countTextRows = (value: string): number =>
  value === '' ? 0 : value.split('\n').length

/**
 * Checks if a given string is a valid URL.
 * @param url - The string to be checked.
 * @returns A promise that resolves to `true` if the URL is valid, `false` otherwise.
 */
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch (error) {
    return false
  }
}

/**
 * Removes all whitespace characters from a given string.
 * @param str - The string to remove whitespace from.
 * @returns The input string with all whitespace characters removed.
 */
export const removeWhitespace = (str: string): string => str.replace(/\s/g, '')

/**
 * Checks if a given string is a palindrome considering case sensitivity.
 *
 * @param str - The string to be checked.
 * @returns {boolean} - `true` if `str` is a palindrome, `false` otherwise.
 */
export const isPalindromeCaseSensitive = (str: string): boolean =>
  str === str.split('').reverse().join('')

/**
 * Finds the longest word in a given string.
 *
 * @param str - The input string.
 * @returns The longest word found in the string.
 */
export const findLongestWord = (str: string): string =>
  str
    .split(' ')
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ''
    )

/**
 * Counts the occurrences of a target character in a given string.
 *
 * @param str - The input string.
 * @param targetChar - The character to count occurrences of.
 * @returns The number of occurrences of `targetChar` in `str`.
 */
export const countOccurrences = (str: string, targetChar: string): number =>
  str.split(targetChar).length - 1

/**
 * Removes duplicated characters from a string.
 *
 * @param str - The input string.
 * @returns A new string with duplicated characters removed.
 */
export const removeDuplicatedChars = (str: string): string =>
  [...new Set(str.split(''))].join('')

/**
 * Reverses the order of words in a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with the order of words reversed.
 */
export const reverseWords = (str: string): string =>
  str.split(' ').reverse().join(' ')

/**
 * Shuffles the characters in a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with its characters shuffled.
 */
export const shuffleCharacters = (str: string): string =>
  str
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('')
