export const moveToTop = () => window.scrollTo(0, 0)

/**
 * Calculates the difference between two dates in days.
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns The absolute difference between date1 and date2 in days.
 */
export const calcDifferenceInDays = (date1: Date, date2: Date): number => {
  return Math.abs(
    Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24))
  )
}

/**
 * Gets the current month number.
 * @returns The current month as a number (1 for January, 2 for February, ..., 12 for December).
 */
export const currentMonth = (): number => new Date().getMonth() + 1
