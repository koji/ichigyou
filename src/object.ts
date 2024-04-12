export const hasProperty = <T extends keyof any>(
  obj: Record<string, unknown>,
  prop: T
): boolean => prop in obj
