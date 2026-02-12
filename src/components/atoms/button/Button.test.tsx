import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "./Button";

describe("Button", () => {
  it("renders children text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  it("applies size classes", () => {
    render(<Button size="lg">Big</Button>);
    const btn = screen.getByRole("button", { name: "Big" });
    expect(btn.className).toMatch(/px-5/);
  });

  it("applies variant classes", () => {
    render(<Button variant="outline">Outline</Button>);
    const btn = screen.getByRole("button", { name: "Outline" });
    expect(btn.className).toMatch(/border/);
  });

  it("shows loading and sets aria-busy", () => {
    render(<Button isLoading>Save</Button>);
    const btn = screen.getByRole("button", { name: "Save" });
    expect(btn).toHaveAttribute("aria-busy", "true");
  });

  it("fires onClick when enabled", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();
    render(<Button onClick={fn}>Do it</Button>);
    await user.click(screen.getByRole("button", { name: "Do it" }));
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("does not fire onClick when disabled", async () => {
    const user = userEvent.setup();
    const fn = vi.fn();
    render(
      <Button onClick={fn} disabled>
        Nope
      </Button>
    );
    await user.click(screen.getByRole("button", { name: "Nope" }));
    expect(fn).not.toHaveBeenCalled();
  });

  it("renders as link when as='a'", () => {
    render(
      <Button as="a" href="/docs">
        Docs
      </Button>
    );
    const link = screen.getByRole("link", { name: "Docs" });
    expect(link).toHaveAttribute("href", "/docs");
  });

  it("icon only needs aria-label", () => {
    render(
      <Button iconOnly startIcon={<span data-testid="i" />} aria-label="Menu" />
    );
    const btn = screen.getByLabelText("Menu");
    expect(btn).toBeInTheDocument();
  });
});
