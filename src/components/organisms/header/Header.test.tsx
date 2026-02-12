/**
 * Test runner: Vitest
 * Install if needed:
 *   npm i -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom
 * Add setupFiles to include:
 *   import '@testing-library/jest-dom';
 */

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Header";
import type { HeaderItem } from "./header.types";
import { store } from "@/store/store";

// Simple stub icon for tests
const StubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 10 10" aria-hidden="true" {...props} />
);

const makeData = (): HeaderItem[] => [
  {
    id: 1,
    type: "desktopFlyout",
    buttonText: "Itinerario",
    items: [
      {
        name: "Itinerario del dia",
        description: "Horarios de ceremonia y celebracion",
        href: "/itinerario",
        icon: StubIcon,
      },
      {
        name: "Transporte",
        description: "Buses y traslados del dia",
        href: "/transporte",
        icon: StubIcon,
      },
    ],
    callsToAction: [{ name: "Contacto", href: "/contacto", icon: StubIcon }],
  },
  {
    id: 2,
    type: "navLink",
    link: { href: "/regalos", children: "Mesa de regalos" },
  },
];

const renderHeader = (data: HeaderItem[] = makeData()) =>
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header data={data} />
      </MemoryRouter>
    </Provider>,
  );

describe("Header", () => {
  it("renders the static links from data", () => {
    renderHeader();
    expect(
      screen.getByRole("link", { name: /mesa de regalos/i }),
    ).toBeInTheDocument();
  });

  it("renders flyout buttons from data", () => {
    renderHeader();
    expect(
      screen.getByRole("button", { name: /itinerario/i }),
    ).toBeInTheDocument();
  });

  it("opens a flyout and shows its items", async () => {
    const user = userEvent.setup();
    renderHeader();

    // Open the Itinerario flyout
    const flyoutButton = screen.getByRole("button", { name: /itinerario/i });
    await user.click(flyoutButton);

    // Now one of the flyout items should be visible
    expect(
      await screen.findByRole("link", { name: /itinerario del dia/i }),
    ).toBeInTheDocument();
  });
});
