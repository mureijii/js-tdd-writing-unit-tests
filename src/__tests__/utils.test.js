// Your tests here
// src/__tests__/utils.test.js

import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";
    const points = pointsForWord(word);
    expect(points).toBe(7);
  });

  it("returns 0 for an empty string", () => {
    const word = "";
    const points = pointsForWord(word);
    expect(points).toBe(0);
  });

  it("correctly ignores numbers and symbols as consonants", () => {
    const word = "t3st!";
    const points = pointsForWord(word);
    // t (2) + 3 (2) + s (2) + t (2) + ! (2) = 10
    expect(points).toBe(10);
  });

  it("returns 0 if non-string input is given", () => {
    const points = pointsForWord(1234);
    expect(points).toBe(0);
  });
});
