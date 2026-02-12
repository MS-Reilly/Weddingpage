import { render, screen } from "@testing-library/react";
import { ThreeColumnImageGrid } from "./ThreeColumnImageGrid";

describe("ThreeColumnImageGrid", () => {
  const mockImages = [
    { src: "/image1.jpg", alt: "Image 1" },
    { src: "/image2.jpg", alt: "Image 2" },
    { src: "/image3.jpg", alt: "Image 3" },
  ];

  it("renders all images", () => {
    render(<ThreeColumnImageGrid images={mockImages} />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(3);
    expect(images[0]).toHaveAttribute(
      "src",
      expect.stringContaining("/image1.jpg")
    );
    expect(images[1]).toHaveAttribute(
      "src",
      expect.stringContaining("/image2.jpg")
    );
    expect(images[2]).toHaveAttribute(
      "src",
      expect.stringContaining("/image3.jpg")
    );
  });

  it("applies custom className", () => {
    const className = "custom-grid";
    render(<ThreeColumnImageGrid images={mockImages} className={className} />);
    const grid = screen.getByTestId("three-column-grid");
    expect(grid).toHaveClass(className);
  });
});
