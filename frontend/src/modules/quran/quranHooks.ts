import { useQuery } from "@tanstack/react-query";
import { Chapter, QuranChaptersResponse } from "./quranTypes";
import { createAPIClient } from "@/shared/fetcher";

// Create API client for your backend
const quranAPI = createAPIClient("http://localhost:4000");

// Query keys for better cache management
export const quranKeys = {
  all: ["quran"] as const,
  chapters: () => [...quranKeys.all, "chapters"] as const,
  chapter: (id: number) => [...quranKeys.all, "chapter", id] as const,
  verses: (chapterId: number, from?: number, to?: number) =>
    [...quranKeys.all, "verses", chapterId, from, to] as const,
};

/**
 * Hook to fetch all Quran chapters
 * @returns Query result with chapters data, loading state, and error
 */
export const useGetChapters = () => {
  return useQuery({
    queryKey: quranKeys.chapters(),
    queryFn: () =>
      quranAPI.get<{
        success: boolean;
        data: QuranChaptersResponse;
        timestamp: string;
      }>("/api/quran/chapters"),
    select: (response) => response.data, // Extract chapters from response.data
    staleTime: 1000 * 60 * 60, // 1 hour - chapters don't change often
    gcTime: 1000 * 60 * 60 * 24, // 24 hours - keep in cache longer
  });
};

/**
 * Hook to search chapters by name
 * @param searchTerm - The search term to filter chapters
 * @returns Filtered chapters based on search term
 */
export const useGetChapterSearch = (searchTerm: string) => {
  const { data: chapters, ...rest } = useGetChapters();

  const filteredChapters = chapters?.chapters.filter((chapter) => {
    if (!searchTerm) return true;

    const term = searchTerm.toLowerCase();
    return (
      chapter.name_simple.toLowerCase().includes(term) ||
      chapter.name_complex.toLowerCase().includes(term) ||
      chapter.translated_name.name.toLowerCase().includes(term) ||
      chapter.name_arabic.includes(searchTerm) // Arabic search as-is
    );
  });

  return {
    ...rest,
    data: filteredChapters,
    chapters: filteredChapters, // Alias for convenience
  };
};

/**
 * Hook to get a specific chapter by ID
 * @param chapterId - The ID of the chapter to fetch
 * @returns Single chapter data
 */
export const useGetChapter = (chapterId: number) => {
  return useQuery({
    queryKey: quranKeys.chapter(chapterId),
    queryFn: () =>
      quranAPI.get<{ chapter: Chapter }>(`/api/quran/chapters/${chapterId}`),
    select: (data) => data.chapter, // Extract just the chapter object
    staleTime: 1000 * 60 * 60, // 1 hour - chapter data doesn't change often
    gcTime: 1000 * 60 * 60 * 24, // 24 hours - keep in cache longer
    enabled: !!chapterId, // Only run query if chapterId is provided
  });
};
