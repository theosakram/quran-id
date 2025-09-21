import { useState, useMemo } from "react";
import { Chapter, ChapterSearchOptions } from "@/types/chapter";
import { filterChapters } from "@/utils/chapterUtils";

export const useChaptersSearch = (
  chapters: Chapter[],
  language: string,
  isInitialized: boolean,
) => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const options: ChapterSearchOptions = {
      query,
      language,
      isInitialized,
    };

    return filterChapters(chapters, options);
  }, [chapters, query, language, isInitialized]);

  return {
    searchQuery: query,
    setSearchQuery: setQuery,
    filteredChapters: filtered,
  };
};
