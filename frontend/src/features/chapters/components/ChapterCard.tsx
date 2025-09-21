import { Card, VStack } from "@chakra-ui/react";
import { Chapter } from "@/shared/types/chapter";
import { ChapterBadge } from "./ChapterBadge";
import { ChapterContent } from "./ChapterContent";

interface ChapterCardProps {
  chapter: Chapter;
  currentLanguage: string;
  isInitialized: boolean;
  t: (key: string, options?: any) => string;
  onClick?: (chapter: Chapter) => void;
}

export const ChapterCard = ({
  chapter,
  currentLanguage,
  isInitialized,
  t,
  onClick,
}: ChapterCardProps) => {
  const handleClick = () => {
    onClick?.(chapter);
  };

  return (
    <Card.Root
      key={chapter.id}
      layerStyle="card.interactive"
      p="3"
      _hover={{
        shadow: "md",
        transform: "translateY(-1px)",
        borderColor: "brand.solid",
      }}
      transition="all 0.2s"
      cursor="pointer"
      onClick={handleClick}
    >
      <Card.Body>
        <VStack gap="2" align="start">
          <ChapterBadge chapter={chapter} isInitialized={isInitialized} t={t} />
          <ChapterContent
            chapter={chapter}
            currentLanguage={currentLanguage}
            isInitialized={isInitialized}
            t={t}
          />
        </VStack>
      </Card.Body>
    </Card.Root>
  );
};
