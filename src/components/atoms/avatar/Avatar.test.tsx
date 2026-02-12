import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Avatar from "./Avatar";

describe("Avatar", () => {
  it("renders image with correct src and alt", () => {
    const src = "test-image.jpg";
    const alt = "Test avatar";
    render(<Avatar src={src} alt={alt} />);

    const img = screen.getByAltText(alt);
    expect(img).toHaveAttribute("src", src);
  });

  it("renders fallback when image fails to load", () => {
    const fallbackText = "JD";
    render(
      <Avatar
        src="invalid-url"
        alt="Test avatar"
        fallback={<span>{fallbackText}</span>}
      />
    );

    const img = screen.getByAltText("Test avatar");
    img.dispatchEvent(new Event("error"));

    expect(screen.getByText(fallbackText)).toBeInTheDocument();
  });

  it("applies correct size classes", () => {
    const { rerender } = render(<Avatar size="sm" src="test.jpg" alt="Test" />);
    expect(screen.getByRole("img").parentElement).toHaveClass("h-8", "w-8");

    rerender(<Avatar size="md" src="test.jpg" alt="Test" />);
    expect(screen.getByRole("img").parentElement).toHaveClass("h-10", "w-10");

    rerender(<Avatar size="lg" src="test.jpg" alt="Test" />);
    expect(screen.getByRole("img").parentElement).toHaveClass("h-12", "w-12");

    rerender(<Avatar size="xl" src="test.jpg" alt="Test" />);
    expect(screen.getByRole("img").parentElement).toHaveClass("h-14", "w-14");
  });

  it("shows online status when configured", () => {
    render(<Avatar src="test.jpg" alt="Test avatar" showStatus isOnline />);

    const statusIndicator = screen.getByTestId("status-indicator");
    expect(statusIndicator).toHaveClass("bg-green-400");
  });

  it("shows offline status when configured", () => {
    render(
      <Avatar src="test.jpg" alt="Test avatar" showStatus isOnline={false} />
    );

    const statusIndicator = screen.getByTestId("status-indicator");
    expect(statusIndicator).toHaveClass("bg-gray-400");
  });

  it("applies custom className", () => {
    const customClass = "custom-avatar";
    render(<Avatar src="test.jpg" alt="Test avatar" className={customClass} />);

    expect(screen.getByRole("img").parentElement).toHaveClass(customClass);
  });
});
