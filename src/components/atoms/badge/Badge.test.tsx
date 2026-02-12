import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Badge from "./Badge";

describe("Badge", () => {
  it("renders children correctly", () => {
    const text = "Test Badge";
    render(<Badge>{text}</Badge>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(<Badge variant="primary">Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass(
      "bg-brand-100",
      "text-brand-800"
    );

    rerender(<Badge variant="success">Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass(
      "bg-success-100",
      "text-success-800"
    );

    rerender(<Badge variant="error">Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass(
      "bg-error-100",
      "text-error-800"
    );
  });

  it("applies size classes correctly", () => {
    const { rerender } = render(<Badge size="sm">Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass("text-xs", "px-2", "py-0.5");

    rerender(<Badge size="md">Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass("text-sm", "px-2.5", "py-0.5");

    rerender(<Badge size="lg">Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass("text-base", "px-3", "py-1");
  });

  it("applies rounded class when rounded prop is true", () => {
    render(<Badge rounded>Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass("rounded-full");
  });

  it("applies custom className", () => {
    const customClass = "custom-badge";
    render(<Badge className={customClass}>Test</Badge>);
    expect(screen.getByText("Test")).toHaveClass(customClass);
  });
});
