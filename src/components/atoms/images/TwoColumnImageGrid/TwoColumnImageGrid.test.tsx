import { render, screen } from "@testing-library/react";
import { TwoColumnImageGrid } from "./TwoColumnImageGrid";

describe("TwoColumnImageGrid", () => {
  const mockImages = [
    { src: "/image1.jpg", alt: "Image 1" },
    { src: "/image2.jpg", alt: "Image 2" },
  ];

  it("renders all images", () => {
    render(<TwoColumnImageGrid images={mockImages} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute(
      "src",
      expect.stringContaining("/image1.jpg")
    );
    expect(images[1]).toHaveAttribute(
      "src",
      expect.stringContaining("/image2.jpg")
    );
  });

  it("applies custom className", () => {
    const className = "custom-grid";
    render(<TwoColumnImageGrid images={mockImages} className={className} />);
    const grid = screen.getByTestId("two-column-grid");
    expect(grid).toHaveClass(className);
  });
});
