import { Box, Text } from "@chakra-ui/react";

interface EmptyStateProps {
  message: string;
}

export const EmptyState = ({ message }: EmptyStateProps) => {
  return (
    <Box textAlign="center" py="10">
      <Text color="fg.muted">{message}</Text>
    </Box>
  );
};
