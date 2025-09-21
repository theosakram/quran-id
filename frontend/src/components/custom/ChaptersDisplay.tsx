import { Box } from "@chakra-ui/react";
import { useTranslation, useI18n } from "@/providers/I18nProvider";
import { Chapter } from "@/types/chapter";
import { useChaptersSearch } from "@/hooks/useChaptersSearch";
import { ChaptersHeader } from "./ChaptersHeader";
import { ChaptersSearch } from "./ChaptersSearch";
import { EmptyState } from "./EmptyState";
import { ChaptersGrid } from "./ChaptersGrid";
import { ResultsCount } from "./ResultsCount";

interface ChaptersDisplayProps {
  chapters: Chapter[];
}

export const ChaptersDisplay = ({ chapters }: ChaptersDisplayProps) => {
  const { t } = useTranslation("chapters");
  const { t: tCommon } = useTranslation("common");
  const { isInitialized, currentLanguage } = useI18n();

  const { searchQuery, setSearchQuery, filteredChapters } = useChaptersSearch(
    chapters,
    currentLanguage,
    isInitialized,
  );
  const displayData = {
    title: isInitialized ? t("title") : "Quran Chapters",
    availableCountText: isInitialized
      ? t("availableCount", { count: chapters.length })
      : `${chapters.length} chapters available`,
    searchPlaceholder: isInitialized
      ? t("searchPlaceholder")
      : "Search chapters...",
    noResultsMessage: isInitialized
      ? tCommon("noResultsFound", { query: searchQuery })
      : `No chapters found for "${searchQuery}"`,
  };

  const handleChapterClick = (chapter: Chapter) => {
    // TODO: Implement chapter navigation
    console.log("Chapter clicked:", chapter);
  };

  return (
    <Box w="full" p="6" pt="8">
      <ChaptersHeader
        title={displayData.title}
        count={chapters.length}
        availableCountText={displayData.availableCountText}
      />

      <ChaptersSearch
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder={displayData.searchPlaceholder}
      />

      {filteredChapters.length === 0 && searchQuery && (
        <EmptyState message={displayData.noResultsMessage} />
      )}

      <ChaptersGrid
        chapters={filteredChapters}
        currentLanguage={currentLanguage}
        isInitialized={isInitialized}
        t={t}
        onChapterClick={handleChapterClick}
      />

      <ResultsCount
        searchQuery={searchQuery}
        filteredCount={filteredChapters.length}
        totalCount={chapters.length}
        isInitialized={isInitialized}
        tCommon={tCommon}
      />
    </Box>
  );
};
