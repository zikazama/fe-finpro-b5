import { expect, test } from "vitest";
import { sum } from "./sum.js";

// Test Case
test("adds 1 + 2 to equal 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
