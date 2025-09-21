import { SimpleGrid } from "@chakra-ui/react";
import { Chapter } from "@/types/chapter";
import { ChapterCard } from "./ChapterCard";
import { GRID_COLUMNS } from "@/constants";

interface ChaptersGridProps {
  chapters: Chapter[];
  currentLanguage: string;
  isInitialized: boolean;
  t: (key: string, options?: any) => string;
  onChapterClick?: (chapter: Chapter) => void;
}

export const ChaptersGrid = ({
  chapters,
  currentLanguage,
  isInitialized,
  t,
  onChapterClick,
}: ChaptersGridProps) => {
  return (
    <SimpleGrid columns={GRID_COLUMNS} gap="3">
      {chapters.map((chapter) => (
        <ChapterCard
          key={chapter.id}
          chapter={chapter}
          currentLanguage={currentLanguage}
          isInitialized={isInitialized}
          t={t}
          onClick={onChapterClick}
        />
      ))}
    </SimpleGrid>
  );
};
