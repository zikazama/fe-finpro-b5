// src/__tests__/IncreaseButton.test.jsx
import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import IncreaseButton from "../components/IncreaseButton";
import { useState } from "react";

describe("IncreaseButton", () => {
  test("renders", () => {
    render(<IncreaseButton />);
    expect(screen.getByText("Increase")).toBeDefined();
  });
});