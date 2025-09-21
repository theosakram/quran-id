import { Box, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { LuBookOpen, LuSearch, LuSettings } from "react-icons/lu";
import { ColorModeButton } from "@/components/ui/color-mode";
import { LanguageSwitcher } from "@/components/custom/LanguageSwitcher";
import { useTranslation, useI18n } from "@/providers/I18nProvider";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  const { t } = useTranslation("common");
  const { isInitialized } = useI18n();

  return (
    <Box minH="100vh" bg="bg.canvas">
      {/* Header Navigation */}
      <Flex
        as="header"
        align="center"
        justify="space-between"
        px="6"
        py="4"
        bg="bg.default"
        borderBottom="1px"
        borderColor="border.default"
        shadow="sm"
      >
        {/* Logo */}
        <HStack gap="2" align="center">
          <LuBookOpen size="24" color="var(--chakra-colors-quran-solid)" />
          <Text textStyle="heading.md" color="fg.default" mt="-1">
            {isInitialized ? t("appName") : "Quran ID"}
          </Text>
        </HStack>

        {/* Navigation Actions */}
        <HStack gap="2">
          <IconButton
            aria-label={isInitialized ? t("search") : "Search"}
            variant="ghost"
            size="sm"
            color="fg.muted"
            _hover={{ bg: "bg.muted", color: "fg.default" }}
          >
            <LuSearch size="18" />
          </IconButton>

          <IconButton
            aria-label={isInitialized ? t("settings") : "Settings"}
            variant="ghost"
            size="sm"
            color="fg.muted"
            _hover={{ bg: "bg.muted", color: "fg.default" }}
          >
            <LuSettings size="18" />
          </IconButton>

          {isInitialized && <LanguageSwitcher />}

          <ColorModeButton
            variant="ghost"
            size="sm"
            color="fg.muted"
            _hover={{ bg: "bg.muted" }}
          />
        </HStack>
      </Flex>

      {/* Main Content */}
      <Box as="main">{children}</Box>
    </Box>
  );
};
