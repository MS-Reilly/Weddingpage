import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageCarouselStack from "./ImageCarouselStack";

describe("ImageCarouselStack", () => {
  const images = [
    "https://example.com/a.webp",
    "https://example.com/b.webp",
    "https://example.com/c.webp",
    "https://example.com/d.webp",
    "https://example.com/e.webp",
  ];

  it("renders nothing when images is empty", () => {
    render(<ImageCarouselStack images={[]} />);
    expect(screen.queryAllByRole("img")).toHaveLength(0);
  });

  it("renders all provided images", () => {
    render(<ImageCarouselStack images={images} />);
    const imgs = screen.getAllByRole("img");
    expect(imgs).toHaveLength(images.length);
    imgs.forEach((img) => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).toMatch(/^carousel-img-\d+$/);
    });
  });

  it("sets eager decode attributes on images", () => {
    render(<ImageCarouselStack images={images} />);
    const first = screen.getAllByRole("img")[0] as HTMLImageElement;
    expect(first.getAttribute("loading")).toBe("eager");
    expect(first.getAttribute("decoding")).toBe("async");
  });

  it("supports fewer than five images safely", () => {
    const subset = images.slice(0, 2);
    render(<ImageCarouselStack images={subset} />);
    expect(screen.getAllByRole("img")).toHaveLength(subset.length);
  });
});
