export const findMax = (arr: number[]): number => Math.max(...arr)

export const sortNumAsc = (arr: number[]) => arr.slice().sort((a, b) => a - b)

export const randomNum = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min
