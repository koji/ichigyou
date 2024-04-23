import { describe, it, expect } from "vitest";
import { calcDifferenceInDays, currentMonth } from "./../other";

describe("calcDifferenceInDays", () => {
  it("should return 0 for the same date", () => {
    const date = new Date();
    expect(calcDifferenceInDays(date, date)).toBe(0);
  });

  it("should return 1 for consecutive days", () => {
    const date1 = new Date(2024, 3, 18);
    const date2 = new Date(2024, 3, 19);
    expect(calcDifferenceInDays(date1, date2)).toBe(1);
  });

  it("should return the correct number of days for random dates", () => {
    const date1 = new Date(2024, 3, 18);
    const date2 = new Date(2024, 4, 18);
    expect(calcDifferenceInDays(date1, date2)).toBe(30);
  });
});

describe("currentMonth", () => {
  it("returns the current month correctly", () => {
    const actualMonth = new Date().getMonth() + 1;
    expect(currentMonth()).toEqual(actualMonth);
  });
});
