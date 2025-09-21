import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { LuX, LuRefreshCw } from "react-icons/lu";

interface ErrorDisplayProps {
  title: string;
  message: string;
  error?: any;
  onRetry?: () => void;
  showDetails?: boolean;
}

export const ErrorDisplay = ({
  title,
  message,
  error,
  onRetry,
  showDetails = false,
}: ErrorDisplayProps) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="300px"
      w="full"
      p="6"
    >
      <VStack gap="4" textAlign="center" maxW="400px">
        <Box p="3" bg="red.muted" borderRadius="full">
          <LuX size="24" color="var(--chakra-colors-red-solid)" />
        </Box>

        <VStack gap="2">
          <Text textStyle="heading.md" color="fg.default">
            {title}
          </Text>

          <Text textStyle="body.md" color="fg.muted">
            {message}
          </Text>
        </VStack>

        {onRetry && (
          <Button
            onClick={onRetry}
            variant="outline"
            colorPalette="brand"
            size="sm"
          >
            <LuRefreshCw size="16" />
            Try Again
          </Button>
        )}

        {showDetails && error && (
          <Box
            as="pre"
            p="3"
            bg="bg.muted"
            borderRadius="md"
            textStyle="body.xs"
            color="fg.muted"
            maxW="full"
            overflow="auto"
            borderWidth="1px"
            borderColor="border.default"
            fontFamily="mono"
          >
            {JSON.stringify(error, null, 2)}
          </Box>
        )}
      </VStack>
    </Box>
  );
};
