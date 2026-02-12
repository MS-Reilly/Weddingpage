// src/components/atoms/NavLink/NavLink.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavLink from "./NavLink";
import { IconsInfo } from "../../../assets/svgs/icons";
import { MemoryRouter } from "react-router-dom";

describe("NavLink", () => {
  const defaultProps = {
    href: "/test-nav",
    icon: IconsInfo,
    children: "Test Link",
  };

  it("renders the text and icon correctly", () => {
    render(
      <MemoryRouter>
        <NavLink {...defaultProps} />
      </MemoryRouter>
    );
    expect(screen.getByText("Test Link")).toBeInTheDocument();
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });

  it("renders a link with the correct href", () => {
    render(
      <MemoryRouter>
        <NavLink {...defaultProps} />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: "Test Link" });
    expect(link).toHaveAttribute("href", "/test-nav");
  });
});
