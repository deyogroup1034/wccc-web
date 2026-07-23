"use client";

import Script from "next/script";
import { useCallback, useRef, useState } from "react";

/**
 * Cloudflare Turnstile widget (fleet-standard bot protection for forms).
 *
 * Renders nothing until NEXT_PUBLIC_TURNSTILE_SITE_KEY is configured — same
 * ship-ahead pattern as the analytics beacon — so the code can deploy before
 * the widget exists. The companion server-side check lives in the contact
 * action (TURNSTILE_SECRET_KEY): tokens are verified against siteverify
 * there, never in the browser.
 */

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type TurnstileApi = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string;
      action?: string;
      theme?: "light" | "dark" | "auto";
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    },
  ) => string;
  reset: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function turnstileConfigured(): boolean {
  return Boolean(SITE_KEY);
}

/** Reset the page's widget (after a successful submit consumes the token). */
export function resetTurnstile(): void {
  try {
    window.turnstile?.reset();
  } catch {
    // Widget not rendered — nothing to reset.
  }
}

export function Turnstile({ onToken }: { onToken: (token: string | null) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendered = useRef(false);
  const [failed, setFailed] = useState(false);

  const renderWidget = useCallback(() => {
    if (!SITE_KEY || rendered.current || !containerRef.current || !window.turnstile) return;
    rendered.current = true;
    window.turnstile.render(containerRef.current, {
      sitekey: SITE_KEY,
      action: "turnstile-spin-v1",
      theme: "light",
      callback: (token) => onToken(token),
      "expired-callback": () => onToken(null),
      "error-callback": () => setFailed(true),
    });
  }, [onToken]);

  if (!SITE_KEY) return null;

  return (
    <div>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={renderWidget}
      />
      <div ref={containerRef} />
      {failed && (
        <p className="mt-1.5 font-sans text-[13px] text-red">
          The security check couldn&apos;t load. Please refresh and try again.
        </p>
      )}
    </div>
  );
}
