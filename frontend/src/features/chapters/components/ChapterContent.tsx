import { Box, Text, VStack } from "@chakra-ui/react";
import { Chapter } from "@/shared/types/chapter";
import { getDisplayName, getVersesText } from "../utils";

interface ChapterContentProps {
  chapter: Chapter;
  currentLanguage: string;
  isInitialized: boolean;
  t: (key: string, options?: any) => string;
}

export const ChapterContent = ({
  chapter,
  currentLanguage,
  isInitialized,
  t,
}: ChapterContentProps) => {
  const displayName = getDisplayName(chapter, currentLanguage, isInitialized);

  const versesText = getVersesText(chapter.verses_count, t, isInitialized);

  return (
    <>
      {/* Arabic Name */}
      <Box w="full" textAlign="center" py="2">
        <Text
          fontSize="lg"
          fontFamily="arabic"
          color="fg.emphasized"
          lineHeight="1.2"
          fontWeight="medium"
        >
          {chapter.name_arabic}
        </Text>
      </Box>

      {/* Names and Translation */}
      <VStack gap="1" align="start" w="full">
        <Text
          fontSize="xs"
          fontWeight="bold"
          color="brand.solid"
          truncate
          textTransform="capitalize"
        >
          {chapter.name_simple}
        </Text>
        <Text fontSize="xs" color="fg.muted" truncate>
          {displayName}
        </Text>
      </VStack>

      {/* Verses Count */}
      <Box w="full" pt="1">
        <Text fontSize="xs" color="fg.subtle" textAlign="center">
          {chapter.verses_count} {versesText}
        </Text>
      </Box>
    </>
  );
};
