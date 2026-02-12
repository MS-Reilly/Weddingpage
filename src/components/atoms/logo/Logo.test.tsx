import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders with default label", () => {
    render(<Logo />);
    // In `auto` mode there are actually two elements (light + dark). Query by label gets the first.
    expect(screen.getAllByLabelText("Brand").length).toBeGreaterThan(0);
  });

  it("applies className for sizing", () => {
    render(<Logo className="h-10 w-auto" theme="light" />);
    const el = screen.getByLabelText("Brand");
    expect(el).toHaveClass("h-10");
  });

  it("renders dark variant when theme='dark'", () => {
    render(<Logo theme="dark" />);
    const el = screen.getByLabelText("Brand");
    expect(el).toBeInTheDocument();
  });

  it("renders mark when kind='mark'", () => {
    render(<Logo kind="mark" theme="light" />);
    // just ensure one is present; specific path shapes belong to the SVG file
    const el = screen.getByLabelText("Brand");
    expect(el).toBeInTheDocument();
  });

  it("uses custom accessible label when provided", () => {
    render(<Logo label="Brand logo" theme="light" />);
    expect(screen.getByLabelText("Brand logo")).toBeInTheDocument();
  });
});
