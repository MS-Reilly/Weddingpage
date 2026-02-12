import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from "./Alert";
import { MemoryRouter } from "react-router-dom";

describe("Alert", () => {
  it("renders title and message", () => {
    render(<Alert variant="info" title="Hello" message="World" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("World")).toBeInTheDocument();
  });

  it("applies role=alert and polite by default for info", () => {
    render(<Alert variant="info" title="T" message="M" />);
    const el = screen.getByRole("alert");
    expect(el).toHaveAttribute("aria-live", "polite");
  });

  it("uses assertive live region for error", () => {
    render(<Alert variant="error" title="Err" message="Oops" />);
    const el = screen.getByRole("alert");
    expect(el).toHaveAttribute("aria-live", "assertive");
  });

  it("renders internal link with <Link>", () => {
    render(
      <MemoryRouter>
        <Alert
          variant="success"
          title="Ok"
          message="Saved"
          showLink
          linkHref="/settings"
          linkText="Settings"
        />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: "Settings" });
    expect(link).toHaveAttribute("href", "/settings");
  });

  it("renders external link with <a target=_blank rel=noopener>", () => {
    render(
      <Alert
        variant="warning"
        title="Warn"
        message="Heads up"
        showLink
        linkHref="https://example.com"
        linkText="External"
        external
      />
    );
    const link = screen.getByRole("link", { name: "External" });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener");
  });
});
