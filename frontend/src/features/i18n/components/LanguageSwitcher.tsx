"use client";

import { Button } from "@chakra-ui/react";
import { LuGlobe } from "react-icons/lu";
import { useI18n, useTranslation } from "../I18nProvider";

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, languages, isInitialized } =
    useI18n();
  const { t } = useTranslation("common");

  if (!isInitialized) {
    return (
      <Button
        variant="ghost"
        size="sm"
        color="fg.muted"
        _hover={{ bg: "bg.muted", color: "fg.default" }}
        disabled
      >
        <LuGlobe size="18" />
        EN
      </Button>
    );
  }

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "id" : "en";
    changeLanguage(newLanguage);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      color="fg.muted"
      _hover={{ bg: "bg.muted", color: "fg.default" }}
      onClick={toggleLanguage}
    >
      <LuGlobe size="18" />
      {currentLanguage === "en" ? "EN" : "ID"}
    </Button>
  );
};
