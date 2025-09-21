import { createAPIClient } from "@/app/shared/fetcher";
import { QuranChaptersResponse } from "../quranTypes";

// Server-side API client
const quranAPI = createAPIClient("http://localhost:4000");

/**
 * Server-side function to fetch chapters
 * This runs on the server during SSR
 */
export async function getChapters(): Promise<QuranChaptersResponse> {
  try {
    const response = await quranAPI.get<QuranChaptersResponse>(
      "/api/quran/chapters",
    );
    return response;
  } catch (error) {
    console.error("Failed to fetch chapters:", error);
    // Return empty chapters array as fallback
    return { chapters: [] };
  }
}
