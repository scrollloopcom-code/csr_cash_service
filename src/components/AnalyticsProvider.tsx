import React from "react";

// Dynamically import to avoid SSR/Next-specific imports and keep bundle clean.
const AnalyticsLazy = React.lazy(async () => {
  const mod = await import("@vercel/analytics/react");
  return { default: mod.Analytics };
});

const AnalyticsProvider: React.FC = () => {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    // Use requestIdleCallback if available; fallback to a small timeout
    const schedule = (cb: () => void) => {
      if (typeof window.requestIdleCallback === "function") {
        const id = window.requestIdleCallback(cb, { timeout: 1200 });
        return () => window.cancelIdleCallback && window.cancelIdleCallback(id);
      } else {
        const id = window.setTimeout(cb, 600);
        return () => window.clearTimeout(id);
      }
    };

    const cancel = schedule(() => setReady(true));
    return cancel;
  }, []);

  if (!ready) return null;

  return (
    <React.Suspense fallback={null}>
      <AnalyticsLazy />
    </React.Suspense>
  );
};

export default AnalyticsProvider;