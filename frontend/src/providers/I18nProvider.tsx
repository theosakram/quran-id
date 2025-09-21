"use client";

import { createContext, useContext, useState, useEffect } from "react";
import i18n from "i18next";
import {
  I18nextProvider,
  initReactI18next,
  useTranslation as useI18nextTranslation,
} from "react-i18next";

// Import translation files directly
const resources = {
  en: {
    common: {
      appName: "Quran ID",
      search: "Search",
      settings: "Settings",
      language: "Language",
      english: "English",
      indonesian: "Indonesian",
      noResultsFound: 'No chapters found for "{{query}}"',
      showing: "Showing {{count}} of {{total}} chapters",
    },
    chapters: {
      title: "Quran Chapters",
      availableCount: "{{count}} chapters available",
      searchPlaceholder: "Search chapters...",
      verses: "verses",
      verses_one: "verse",
      verses_other: "verses",
      makkah: "Makkah",
      madinah: "Madinah",
    },
  },
  id: {
    common: {
      appName: "Quran ID",
      search: "Cari",
      settings: "Pengaturan",
      language: "Bahasa",
      english: "English",
      indonesian: "Indonesia",
      noResultsFound: 'Tidak ada surat yang ditemukan untuk "{{query}}"',
      showing: "Menampilkan {{count}} dari {{total}} surat",
    },
    chapters: {
      title: "Surat Al-Quran",
      availableCount: "{{count}} surat tersedia",
      searchPlaceholder: "Cari surat...",
      verses: "ayat",
      verses_one: "ayat",
      verses_other: "ayat",
      makkah: "Makkah",
      madinah: "Madinah",
    },
  },
};

interface I18nContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  languages: { code: string; name: string }[];
  isInitialized: boolean;
  i18nInstance: typeof i18n;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: React.ReactNode;
}

// Create and initialize i18next instance
const createI18nInstance = () => {
  const instance = i18n.createInstance();

  instance.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",

    ns: ["common", "chapters"],
    defaultNS: "common",

    resources,

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

  return instance;
};

export const I18nProvider = ({ children }: I18nProviderProps) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isInitialized, setIsInitialized] = useState(false);
  const [i18nInstance] = useState(() => createI18nInstance());

  const languages = [
    { code: "en", name: "English" },
    { code: "id", name: "Indonesia" },
  ];

  useEffect(() => {
    const initI18n = () => {
      try {
        // Load saved language preference (only on client side)
        if (typeof window !== "undefined") {
          const savedLanguage = localStorage.getItem("language");
          if (
            savedLanguage &&
            languages.some((lang) => lang.code === savedLanguage)
          ) {
            i18nInstance.changeLanguage(savedLanguage);
            setCurrentLanguage(savedLanguage);
          }
        }

        setIsInitialized(true);
      } catch (error) {
        console.error("Failed to initialize i18n:", error);
        // Still set as initialized to show fallback text
        setIsInitialized(true);
      }
    };

    initI18n();
  }, [i18nInstance]);

  const changeLanguage = (lang: string) => {
    try {
      i18nInstance.changeLanguage(lang);
      setCurrentLanguage(lang);
      if (typeof window !== "undefined") {
        localStorage.setItem("language", lang);
      }
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  return (
    <I18nextProvider i18n={i18nInstance}>
      <I18nContext.Provider
        value={{
          currentLanguage,
          changeLanguage,
          languages,
          isInitialized,
          i18nInstance,
        }}
      >
        {children}
      </I18nContext.Provider>
    </I18nextProvider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};

export const useTranslation = (namespace?: string) => {
  return useI18nextTranslation(namespace);
};
