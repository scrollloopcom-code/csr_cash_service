import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import LoadingScreen from "@/components/LoadingScreen";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Helmet } from "react-helmet-async";
import socialImage from "@/assets/dp.png";

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for assets, etc.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const title = "CSR CASH SERVICE";
  const description = "1xBet | Melbet | 888Starz සඳහා ඉක්මන් මුදල් තැන්පතු සහ ලබාගැනීම්.";
  // Construct absolute URLs for crawlers
  const siteUrl = window.location.origin;
  const imageUrl = siteUrl + socialImage;

  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <AnalyticsProvider />
        <SpeedInsights />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;