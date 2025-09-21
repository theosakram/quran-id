import { Box, Spinner, Text, VStack } from "@chakra-ui/react";

interface LoadingSpinnerProps {
  message?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const LoadingSpinner = ({
  message = "Loading...",
  size = "lg",
}: LoadingSpinnerProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="300px"
      w="full"
    >
      <VStack gap="4">
        <Spinner size={size} color="brand.solid" />
        <Text textStyle="body.md" color="fg.muted">
          {message}
        </Text>
      </VStack>
    </Box>
  );
};
