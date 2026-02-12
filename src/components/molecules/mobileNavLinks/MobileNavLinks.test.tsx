// src/components/molecules/MobileNavLinks/MobileNavLinks.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileNavLinks from "./MobileNavLinks";
import { IconsInfo, IconsHome } from "../../../assets/svgs/icons";
import { MemoryRouter } from "react-router-dom";

describe("MobileNavLinks", () => {
  const mockNavigation = [
    { href: "/home", icon: IconsHome, children: "Home" },
    { href: "/about", icon: IconsInfo, children: "About" },
  ];

  it("renders all navigation links passed in the navigation prop", () => {
    render(
      <MemoryRouter>
        <MobileNavLinks navigation={mockNavigation} />
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(mockNavigation.length);
  });

  it("renders the sign-in and sign-up buttons", () => {
    render(
      <MemoryRouter>
        <MobileNavLinks navigation={mockNavigation} />
      </MemoryRouter>
    );
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
  });
});
