import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { LuBookOpen } from "react-icons/lu";

interface ChaptersHeaderProps {
  title: string;
  count: number;
  availableCountText: string;
}

export const ChaptersHeader = ({
  title,
  count,
  availableCountText,
}: ChaptersHeaderProps) => {
  return (
    <VStack gap="4" mb="8" textAlign="center">
      <HStack gap="2">
        <LuBookOpen size="28" color="var(--chakra-colors-quran-solid)" />
        <Text textStyle="heading.lg" color="fg.default" mt="-1">
          {title}
        </Text>
      </HStack>
      <Text textStyle="body.md" color="fg.muted">
        {availableCountText}
      </Text>
    </VStack>
  );
};
