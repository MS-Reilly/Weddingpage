import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from "./Modal";

describe("Modal", () => {
  const mockOnClose = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it("renders when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("doesn't render when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
    expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    render(
      <Modal isOpen={true} onClose={mockOnClose} title="Test Modal">
        <p>Modal content</p>
      </Modal>
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("renders image when provided", () => {
    const image = {
      src: "/test-image.jpg",
      alt: "Test image",
    };

    render(
      <Modal isOpen={true} onClose={mockOnClose} image={image}>
        <p>Modal content</p>
      </Modal>
    );

    const img = screen.getByAltText("Test image");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test-image.jpg");
  });

  it("positions image correctly based on imagePosition prop", () => {
    const image = {
      src: "/test-image.jpg",
      alt: "Test image",
    };

    const { rerender } = render(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        image={image}
        imagePosition="left"
      >
        <p>Modal content</p>
      </Modal>
    );

    // Check left position
    let gridContent = screen.getByRole("dialog").querySelector(".grid");
    expect(gridContent?.children[0]).toContainElement(
      screen.getByAltText("Test image")
    );

    // Rerender with right position
    rerender(
      <Modal
        isOpen={true}
        onClose={mockOnClose}
        image={image}
        imagePosition="right"
      >
        <p>Modal content</p>
      </Modal>
    );

    // Check right position
    gridContent = screen.getByRole("dialog").querySelector(".grid");
    expect(gridContent?.children[1]).toContainElement(
      screen.getByAltText("Test image")
    );
  });
});
