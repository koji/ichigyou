export const removeDuplicated = <T extends number | string>(arr: T[]): T[] => [
  ...new Set(arr),
]

export const last = (arr: Array<any>) => arr[arr.length - 1]

export const first = (arr: Array<any>) => arr[0]
