/**
 * Finds the maximum number in an array.
 * @param arr - The array to find the maximum number from.
 * @returns The maximum number in the array.
 */
export const findMax = (arr: number[]): number => Math.max(...arr)

/**
 * Finds the minimum number in an array.
 * @param arr - The array to find the minimum number from.
 * @returns The minimum number in the array.
 */
export const findMin = (arr: number[]): number => Math.min(...arr)

/**
 * Sorts an array of numbers in ascending order.
 * @param arr - The array to sort.
 * @returns A new array sorted in ascending order.
 */
export const sortNumAsc = (arr: number[]): number[] =>
  arr.slice().sort((a, b) => a - b)

/**
 * Sorts an array of numbers in descending order.
 * @param arr - The array to sort.
 * @returns A new array sorted in descending order.
 */
export const sortNumDesc = (arr: number[]): number[] =>
  arr.slice().sort((a, b) => b - a)

/**
 * Generates a random number between min (inclusive) and max (inclusive).
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random number between min and max.
 */
export const randomNum = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min

/**
 * Converts minutes to hours and minutes.
 *
 * @param mins - The number of minutes to be converted.
 * @returns An object with the number of hours and minutes.
 *
 * @example
 * ```typescript
 * const result = minsToHoursAndMins(90);
 * console.log(result); // { hours: 1, minutes: 30 }
 * ```
 */
type HoursAndMinutes = {
  hours: number
  minutes: number
}

export const minsToHoursAndMins = (mins: number): HoursAndMinutes => ({
  hours: Math.floor(mins / 60),
  minutes: mins % 60,
})

/**
 * Calculates the average of an array of numbers.
 * @param arr - The array of numbers.
 * @returns The average of the array of numbers.
 */
export const average = (arr: number[]): number =>
  arr.reduce((acc: number, val: number) => acc + val, 0) / arr.length

/**
 * Converts a binary number (as a string or number) to a decimal number.
 * @param binary - The binary number to be converted. Can be a string or a number.
 * @returns The decimal representation of the binary number.
 */
export const binaryToDecimal = (binary: string | number): number =>
  typeof binary === 'number'
    ? parseInt(binary.toString(), 2)
    : binary.length === 0
    ? 0
    : parseInt(binary, 2)

/**
 * Converts a length from feet to meters.
 * @param feet - The length in feet.
 * @returns The length in meters.
 */
export const feetToMeters = (feet: number): number => feet * 0.3048

/**
 * Converts a length from meters to feet.
 * @param meters - The length in meters.
 * @returns The length in feet.
 */
export const metersToFeet = (meters: number): number => meters / 0.3048

/**
 * Calculates the mean (average) of an array of numbers.
 * @param arr - The array of numbers.
 * @returns The mean of the array. If the array is empty, returns NaN.
 */
export const mean = (arr: number[]): number =>
  arr.reduce((acc, val) => acc + val, 0) / arr.length

/**
 * Function to check if a number is prime
 * @param num - The number to check
 * @returns boolean - Returns true if the number is prime, false otherwise
 */
export const isPrime = (num: number): boolean => {
  if (num <= 1) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

/**
 * Converts degrees to radians.
 * @param degrees - The angle in degrees.
 * @returns The angle in radians.
 */
export const degToRad = (degrees: number): number => degrees * (Math.PI / 180)

/**
 * Calculates the factorial of a given number.
 * @param num - The number to calculate the factorial of.
 * @returns The factorial of the input number.
 */
export const factorial = (num: number): number =>
  num === 0 || num === 1 ? 1 : num * factorial(num - 1)

/**
 * Checks if a number is odd.
 * @param num - The number to check.
 * @returns `true` if the number is odd, `false` otherwise.
 */
export const isOdd = (num: number): boolean => num % 2 !== 0

/**
 * Calculates the standard deviation of an array of numbers.
 * @param arr - The array of numbers to calculate the standard deviation for.
 * @returns The standard deviation of the array.
 */
export const standardDeviation = (arr: number[]): number =>
  Math.sqrt(
    arr.reduce(
      (acc, val, _, { length }) =>
        acc + Math.pow(val - arr.reduce((a, v) => a + v, 0) / length, 2),
      0
    ) / arr.length
  )

/**
 * Calculates the sum of all numbers in an array.
 * @param arr - An array of numbers to be summed.
 * @returns The sum of the array elements.
 */
export const sum = (arr: number[]): number =>
  arr.reduce((acc, val) => acc + val)

/**
 * Generates an array of random integers within a specified range.
 *
 * @param length - The number of elements in the resulting array.
 * @param minValue - The minimum value (inclusive) that can be generated.
 * @param maxValue - The maximum value (inclusive) that can be generated.
 * @returns An array of random integers between minValue and maxValue.
 *
 * @example
 * // Returns an array of 5 random numbers between 10 and 20.
 * genRandomArray(5, 10, 20);
 */
export const genRandomArray = (
  length: number,
  minValue: number,
  maxValue: number
) =>
  Array.from(
    { length },
    () => Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue
  )

/**
 * Calculates the greatest common divisor (GCD) of two numbers.
 *
 * @remarks
 * This function uses the Euclidean algorithm.
 *
 * @param num1 - The first input number.
 * @param num2 - The second input number.
 * @returns The GCD of `num1` and `num2`.
 */
export const gcd = (num1: number, num2: number): number =>
  num2 === 0 ? num1 : gcd(num2, num1 % num2)

/**
 * Converts seconds to a time format with hours, minutes, and seconds.
 *
 * @param seconds - The input time in seconds.
 * @returns An object with `hours`, `minutes`, and `seconds`.
 */
type TimeFormat = {
  hours: number
  minutes: number
  seconds: number
}
export const secondsToHoursMinsSecs = (seconds: number): TimeFormat => {
  return {
    hours: Math.floor(seconds / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: (seconds % 3600) % 60,
  }
}

/**
 * Calculates the least common multiple (LCM) of two numbers.
 *
 * @param num1 - The first input number.
 * @param num2 - The second input number.
 * @returns The LCM of `num1` and `num2`.
 */
export const lcm = (num1: number, num2: number) =>
  (num1 * num2) / gcd(num1, num2)

/**
 * Converts a binary string to its decimal equivalent.
 *
 * @param binary - The binary string to convert.
 * @returns The decimal value.
 *
 * @remarks
 * This function assumes that the input binary string is valid (contains only '0' and '1').
 * If an invalid binary string is provided, the result may be unexpected.
 *
 * @example
 * ```typescript
 * const decimalValue = binaryToDecimalWithoutParseInt('1101');
 * console.log(decimalValue); // Output: 13
 * ```
 */
export const binaryToDecimalWithoutParseInt = (binary: string): number =>
  binary
    .split('')
    .reverse()
    .reduce((dec, bit, index) => dec + (bit === '1' ? 2 ** index : 0), 0)
