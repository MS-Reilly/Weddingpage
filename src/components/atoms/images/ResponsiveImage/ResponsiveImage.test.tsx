import { render, screen } from "@testing-library/react";
import { ResponsiveImage } from "./ResponsiveImage";

describe("ResponsiveImage", () => {
  const mockProps = {
    src: "/test-image.jpg",
    alt: "Test image",
  };

  it("renders with basic props", () => {
    render(<ResponsiveImage {...mockProps} />);
    const image = screen.getByAltText("Test image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      expect.stringContaining("/test-image.jpg")
    );
  });

  it("applies custom className", () => {
    const className = "custom-class";
    render(<ResponsiveImage {...mockProps} className={className} />);
    const image = screen.getByAltText("Test image");
    expect(image).toHaveClass(className);
  });

  it("sets width and height attributes", () => {
    render(<ResponsiveImage {...mockProps} width={300} height={200} />);
    const image = screen.getByAltText("Test image");
    expect(image).toHaveAttribute("width", "300");
    expect(image).toHaveAttribute("height", "200");
  });
});
