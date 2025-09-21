import { Box, Text } from "@chakra-ui/react";

interface ResultsCountProps {
  searchQuery: string;
  filteredCount: number;
  totalCount: number;
  isInitialized: boolean;
  tCommon: (key: string, options?: any) => string;
}

export const ResultsCount = ({
  searchQuery,
  filteredCount,
  totalCount,
  isInitialized,
  tCommon,
}: ResultsCountProps) => {
  if (!searchQuery) return null;

  return (
    <Box textAlign="center" mt="6">
      <Text textStyle="body.sm" color="fg.subtle">
        {isInitialized
          ? tCommon("showing", {
              count: filteredCount,
              total: totalCount,
            })
          : `Showing ${filteredCount} of ${totalCount} chapters`}
      </Text>
    </Box>
  );
};
