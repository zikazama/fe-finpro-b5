// src/__tests__/IncreaseButton.test.jsx
import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import IncreaseButton from "../components/IncreaseButton";
import { useState } from "react";
import App from "../App";

describe("App", () => {
  test("click", () => {
    render(<App />);
    expect(screen.getByText("count is 0")).toBeDefined();
    fireEvent.click(screen.getByText("count is 0"));
    expect(screen.getByText("count is 1")).toBeDefined();
  });
});