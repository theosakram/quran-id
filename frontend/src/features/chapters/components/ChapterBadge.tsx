import { Box, Text, VStack, HStack, Badge } from "@chakra-ui/react";
import { Chapter } from "@/shared/types/chapter";
import { getRevelationColorPalette } from "../utils";
import { REVELATION_PLACES } from "@/config/constants";

interface ChapterBadgeProps {
  chapter: Chapter;
  isInitialized: boolean;
  t: (key: string) => string;
}

export const ChapterBadge = ({
  chapter,
  isInitialized,
  t,
}: ChapterBadgeProps) => {
  const colorPalette = getRevelationColorPalette(chapter.revelation_place);

  return (
    <HStack w="full" justify="space-between">
      <Box
        bg="brand.solid"
        color="brand.contrast"
        px="1"
        py="0.5"
        borderRadius="full"
        fontSize="xs"
        fontWeight="bold"
        minW="5"
        textAlign="center"
      >
        {chapter.id}
      </Box>
      <Badge
        colorPalette={colorPalette}
        variant="solid"
        size="xs"
        fontSize="2xs"
        px="2"
        borderRadius="full"
      >
        {isInitialized
          ? t(
              chapter.revelation_place === REVELATION_PLACES.MAKKAH
                ? "makkah"
                : "madinah",
            )
          : chapter.revelation_place === REVELATION_PLACES.MAKKAH
          ? "Makkah"
          : "Madinah"}
      </Badge>
    </HStack>
  );
};
