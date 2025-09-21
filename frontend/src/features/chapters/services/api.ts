import { createAPIClient } from "@/shared/services/fetcher";

// Get API URL from environment or fallback to localhost
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// Centralized API client for Quran module
export const quranAPI = createAPIClient(API_URL);
