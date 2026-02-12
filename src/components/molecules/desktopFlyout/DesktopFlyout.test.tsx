// src/components/molecules/DesktopFlyout/DesktopFlyout.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DesktopFlyout from "./DesktopFlyout";
import { MemoryRouter } from "react-router-dom";
import {
  Icons360Degrees,
  IconsHome,
  IconsChartPie,
} from "../../../assets/svgs/icons";

describe("DesktopFlyout", () => {
  const mockProps = {
    buttonText: "Guia",
    items: [
      {
        name: "Dress code",
        description: "Guia de vestimenta",
        href: "/dress-code",
        icon: IconsChartPie,
      },
      {
        name: "Clima",
        description: "Que llevar y como vestirse",
        href: "/clima",
        icon: Icons360Degrees,
      },
    ],
    callsToAction: [
      { name: "FAQ", href: "/faq", icon: IconsHome },
      { name: "Contacto", href: "/contacto", icon: Icons360Degrees },
    ],
  };

  it("renders the button with the correct text", () => {
    render(
      <MemoryRouter>
        <DesktopFlyout {...mockProps} />
      </MemoryRouter>,
    );
    expect(screen.getByText("Guia")).toBeInTheDocument();
  });

  it("renders all flyout items", () => {
    render(
      <MemoryRouter>
        <DesktopFlyout {...mockProps} />
      </MemoryRouter>,
    );
    expect(screen.getByText("Dress code")).toBeInTheDocument();
    expect(screen.getByText("Guia de vestimenta")).toBeInTheDocument();
    expect(screen.getByText("Clima")).toBeInTheDocument();
    expect(screen.getByText("Que llevar y como vestirse")).toBeInTheDocument();
  });

  it("renders all calls to action", () => {
    render(
      <MemoryRouter>
        <DesktopFlyout {...mockProps} />
      </MemoryRouter>,
    );
    expect(screen.getByText("FAQ")).toBeInTheDocument();
    expect(screen.getByText("Contacto")).toBeInTheDocument();
  });
});
