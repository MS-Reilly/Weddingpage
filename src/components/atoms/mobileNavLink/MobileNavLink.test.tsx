// src/components/atoms/MobileNavLink/MobileNavLink.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileNavLink from "./MobileNavLink";
import { IconsInfo } from "../../../assets/svgs/icons";
import { MemoryRouter } from "react-router-dom";

describe("MobileNavLink", () => {
  const defaultProps = {
    href: "/test-link",
    icon: IconsInfo,
    children: "Test Link",
  };

  it("renders a link with the correct href and text", () => {
    render(
      <MemoryRouter>
        <MobileNavLink {...defaultProps} />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /Test Link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test-link");
  });

  it("renders the icon when it's provided", () => {
    render(
      <MemoryRouter>
        <MobileNavLink {...defaultProps} />
      </MemoryRouter>
    );
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });

  it("does not render an icon when it's not provided", () => {
    render(
      <MemoryRouter>
        <MobileNavLink href="/test-no-icon">No Icon Link</MobileNavLink>
      </MemoryRouter>
    );
    expect(screen.queryByRole("img", { hidden: true })).not.toBeInTheDocument();
  });

  it("applies different size classes", () => {
    render(
      <MemoryRouter>
        <MobileNavLink href="/test" size="lg">
          Large Link
        </MobileNavLink>
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: "Large Link" });
    expect(link.className).toMatch(/text-lg/);
  });
});
