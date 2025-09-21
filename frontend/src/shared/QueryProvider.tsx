"use client";

import {
  QueryClient,
  QueryClientProvider,
  QueryCache,
  MutationCache,
} from "@tanstack/react-query";
import { useState } from "react";
import { toaster } from "./components/ui/toaster";

// Lazy import devtools only in development
const DevTools =
  process.env.NODE_ENV === "development"
    ? require("@tanstack/react-query-devtools").ReactQueryDevtools
    : () => null;

// Global error handler
const handleGlobalError = (error: any) => {
  console.error("Query Error:", error);

  // Don't show toast for cancelled queries
  if (error?.name === "AbortError" || error?.message?.includes("cancelled")) {
    return;
  }

  let title = "Something went wrong";
  let description = "Please try again later";

  // Handle different error types
  if (error?.status) {
    switch (error.status) {
      case 400:
        title = "Invalid Request";
        description = "Please check your input and try again";
        break;
      case 401:
        title = "Authentication Required";
        description = "Please log in to continue";
        break;
      case 403:
        title = "Access Denied";
        description = "You don't have permission to access this resource";
        break;
      case 404:
        title = "Not Found";
        description = "The requested content could not be found";
        break;
      case 429:
        title = "Too Many Requests";
        description = "Please wait a moment before trying again";
        break;
      case 500:
        title = "Server Error";
        description =
          "Our servers are experiencing issues. Please try again later";
        break;
      case 503:
        title = "Service Unavailable";
        description =
          "The service is temporarily unavailable. Please try again later";
        break;
      default:
        if (error.status >= 400 && error.status < 500) {
          title = "Request Error";
          description =
            error.message || "There was a problem with your request";
        } else if (error.status >= 500) {
          title = "Server Error";
          description = "Our servers are having issues. Please try again later";
        }
    }
  } else if (error?.message) {
    // Network or other errors
    if (error.message.includes("fetch")) {
      title = "Network Error";
      description = "Please check your internet connection and try again";
    } else {
      description = error.message;
    }
  }

  // Show toast notification
  toaster.create({
    title,
    description,
    type: "error",
    duration: 5000,
  });
};

// Create a function to generate QueryClient with optimized settings
const createQueryClient = () => {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: handleGlobalError,
    }),
    mutationCache: new MutationCache({
      onError: handleGlobalError,
    }),
    defaultOptions: {
      queries: {
        // Quran data doesn't change often, so longer stale times are good
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)

        // Retry configuration
        retry: (failureCount, error: any) => {
          // Don't retry on 4xx errors (client errors)
          if (error?.status >= 400 && error?.status < 500) {
            return false;
          }
          // Retry up to 3 times for 5xx errors
          return failureCount < 3;
        },
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),

        // Background refetching - good for Quran app since data is mostly static
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,

        // Network mode - important for offline reading
        networkMode: "online",
      },
      mutations: {
        // Retry mutations (for bookmarks, notes, etc.)
        retry: 1,
        retryDelay: 1000,
        networkMode: "online",
      },
    },
  });
};

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  // Create QueryClient only once per component lifecycle
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
