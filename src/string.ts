export const isEmptyString = (str: string): boolean => str.trim().length === 0

export const countWords = (str: string): number =>
  str.trim().split(/\s+/).length

export const reverseString = (str: string) => str.split('').reverse().join('')

export const isNumeric = (str: string): boolean => !isNaN(Number(str))
