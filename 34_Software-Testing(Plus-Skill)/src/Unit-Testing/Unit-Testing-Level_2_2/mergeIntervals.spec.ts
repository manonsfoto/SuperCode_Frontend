import { mergeIntervals } from "./mergeIntervals";

describe("mergeIntervals", () => {
  it("should return an empty array for an empty input", () => {
    expect(mergeIntervals([])).toEqual([]);
  });

  it("should return the same intervals for a single interval", () => {
    expect(mergeIntervals([[1, 3]])).toEqual([[1, 3]]);
  });

  it("should merge overlapping intervals", () => {
    expect(
      mergeIntervals([
        [1, 5],
        [2, 6],
        [8, 10],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
    ]);
  });

  it("should handle non-overlapping intervals", () => {
    expect(
      mergeIntervals([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  it("should merge intervals with multiple overlaps", () => {
    expect(
      mergeIntervals([
        [1, 4],
        [2, 5],
        [3, 6],
      ])
    ).toEqual([[1, 6]]);
  });

  it("should handle intervals that touch but do not overlap", () => {
    expect(
      mergeIntervals([
        [1, 2],
        [2, 3],
        [3, 4],
      ])
    ).toEqual([[1, 4]]);
  });

  it("should handle unsorted input intervals", () => {
    expect(
      mergeIntervals([
        [5, 7],
        [1, 3],
        [2, 4],
      ])
    ).toEqual([
      [1, 4],
      [5, 7],
    ]);
  });

  it("should handle intervals with the same start and end points", () => {
    expect(
      mergeIntervals([
        [1, 4],
        [1, 4],
        [1, 4],
      ])
    ).toEqual([[1, 4]]);
  });

  it("should merge a mix of overlapping and non-overlapping intervals", () => {
    expect(
      mergeIntervals([
        [1, 3],
        [2, 4],
        [5, 7],
        [6, 8],
      ])
    ).toEqual([
      [1, 4],
      [5, 8],
    ]);
  });

  it("should handle large ranges of intervals", () => {
    expect(
      mergeIntervals([
        [1, 10],
        [2, 5],
        [15, 20],
        [19, 30],
      ])
    ).toEqual([
      [1, 10],
      [15, 30],
    ]);
  });

  it("should return intervals without modification when there is no overlap", () => {
    expect(
      mergeIntervals([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });
});
