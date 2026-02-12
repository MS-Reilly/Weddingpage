// src/components/molecules/DesktopNavLinks/DesktopNavLinks.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DesktopNavLinks from "./DesktopNavLinks";
import { IconsInfo, IconsHome } from "../../../assets/svgs/icons";
import { MemoryRouter } from "react-router-dom";

describe("DesktopNavLinks", () => {
  const mockNavigation = [
    { href: "/home", icon: IconsHome, children: "Home" },
    { href: "/about", icon: IconsInfo, children: "About" },
  ];

  it("renders all navigation links passed in the navigation prop", () => {
    render(
      <MemoryRouter>
        <DesktopNavLinks navigation={mockNavigation} />
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(mockNavigation.length);
  });
});
