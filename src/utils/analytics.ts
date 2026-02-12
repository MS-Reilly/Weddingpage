import posthog from "posthog-js";

// Initialize PostHog with your project API key
export const initAnalytics = () => {
  // Check if PostHog is already initialized
  if (posthog.__loaded) {
    console.log("PostHog already initialized, skipping...");
    return;
  }

  const isProd = import.meta.env.PROD;
  console.log(
    "Initializing PostHog with key:",
    import.meta.env.VITE_PUBLIC_POSTHOG_KEY
  );
  console.log("Environment:", isProd ? "production" : "development");

  posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
    autocapture: true,
    capture_pageview: true,
    capture_pageleave: true,
    debug: !isProd, // Enable debug mode in development
    loaded: () => {
      // Fire a one-time health check event so you can verify ingestion
      posthog.capture("health_check", {
        source: "init",
        env: isProd ? "prod" : "dev",
      });
      if (!isProd) {
        console.log("PostHog loaded in development mode with debug enabled");
      }
    },
  });
};

// Track custom events
export const trackEvent = (
  eventName: string,
  properties?: Record<string, unknown>
) => {
  console.log("Tracking event:", eventName, properties);
  posthog.capture(eventName, properties);
};

// Track page views manually if needed
export const trackPageView = (pageName: string) => {
  posthog.capture("$pageview", { pageName });
};

// Track form submissions
export const trackFormSubmission = (
  formName: string,
  success: boolean,
  data?: Record<string, unknown>
) => {
  posthog.capture("form_submission", {
    form: formName,
    success,
    ...(data || {}),
  });
};

// Track video interactions
export const trackVideoInteraction = (
  action: "play" | "pause" | "end",
  videoId: string,
  currentTime?: number
) => {
  posthog.capture("video_interaction", {
    action,
    videoId,
    currentTime,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, section: string) => {
  posthog.capture("button_click", {
    button: buttonName,
    section,
  });
};

// Track link clicks
export const trackLinkClick = (
  linkText: string,
  href: string,
  section: string
) => {
  posthog.capture("link_click", {
    linkText,
    href,
    section,
  });
};

// Track scroll depth
export let lastScrollDepth = 0;
export const trackScrollDepth = () => {
  const scrollDepth = Math.round(
    ((window.scrollY + window.innerHeight) /
      document.documentElement.scrollHeight) *
      100
  );

  if (scrollDepth > lastScrollDepth && scrollDepth % 25 === 0) {
    posthog.capture("scroll_milestone", {
      depth: scrollDepth,
    });
    lastScrollDepth = scrollDepth;
  }
};
