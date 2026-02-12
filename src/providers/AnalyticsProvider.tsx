import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import posthog from "posthog-js";
import {
  initAnalytics,
  trackPageView,
  trackScrollDepth,
} from "@/utils/analytics";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const initialized = useRef(false);

  // Ensure we don't initialize during render; do it synchronously post-mount
  useLayoutEffect(() => {
    if (!initialized.current && !posthog.__loaded) {
      console.log("Initializing PostHog from provider (layout effect)...");
      initAnalytics();
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    // Verify PostHog is initialized
    const checkPostHog = () => {
      if (posthog.__loaded) {
        console.log("PostHog is ready to use");
      } else {
        console.warn("PostHog not properly initialized");
      }
    };

    checkPostHog();
  }, []);

  useEffect(() => {
    // Track page views on route changes
    trackPageView(location.pathname);
  }, [location]);

  useEffect(() => {
    // Set up scroll tracking
    const handleScroll = () => {
      requestAnimationFrame(() => {
        trackScrollDepth();
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return children;
}
