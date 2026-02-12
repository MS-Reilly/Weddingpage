import { render, screen } from "@testing-library/react";
import { AspectRatioVideo } from "./AspectRatioVideo";

describe("AspectRatioVideo", () => {
  const defaultProps = {
    src: "/test-video.mp4",
  };

  it("renders video element with default props", () => {
    render(<AspectRatioVideo {...defaultProps} />);
    const video = screen.getByTestId("aspect-ratio-video");
    expect(video).toBeInTheDocument();
    expect(video.tagName.toLowerCase()).toBe("video");
    expect(video).toHaveAttribute("src", "/test-video.mp4");
  });

  it("applies 16:9 aspect ratio class by default", () => {
    render(<AspectRatioVideo {...defaultProps} />);
    const container = screen.getByTestId("video-container");
    expect(container).toHaveClass("aspect-w-16 aspect-h-9");
  });

  it("applies correct aspect ratio classes when specified", () => {
    const ratios = {
      "21:9": "aspect-w-21 aspect-h-9",
      "4:3": "aspect-w-4 aspect-h-3",
      "1:1": "aspect-w-1 aspect-h-1",
    };

    Object.entries(ratios).forEach(([ratio, className]) => {
      const { container } = render(
        <AspectRatioVideo {...defaultProps} aspectRatio={ratio as any} />
      );
      const videoContainer = container.querySelector(
        '[data-testid="video-container"]'
      );
      expect(videoContainer).toHaveClass(className);
    });
  });

  it("applies custom className", () => {
    const className = "custom-class";
    render(<AspectRatioVideo {...defaultProps} className={className} />);
    const container = screen.getByTestId("video-container");
    expect(container).toHaveClass(className);
  });

  it("sets video attributes correctly", () => {
    render(
      <AspectRatioVideo
        {...defaultProps}
        autoPlay
        muted
        loop
        controls
        playbackRate={1.5}
        playsInline
        poster="/test-poster.jpg"
        preload="metadata"
      />
    );

    const video = screen.getByTestId("aspect-ratio-video");
    expect(video).toHaveAttribute("autoplay");
    expect(video).toHaveAttribute("muted");
    expect(video).toHaveAttribute("loop");
    expect(video).toHaveAttribute("controls");
    expect(video).toHaveAttribute("poster", "/test-poster.jpg");
    expect(video).toHaveAttribute("preload", "metadata");
    expect(video).toHaveAttribute("playsinline");
  });
});
