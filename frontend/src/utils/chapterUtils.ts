import { Chapter, ChapterSearchOptions } from "@/types/chapter";
import { getTranslatedSurahName } from "@/utils/surahTranslations";
import { REVELATION_PLACES, LANGUAGES } from "@/constants";

export const filterChapters = (
  chapters: Chapter[],
  options: ChapterSearchOptions,
): Chapter[] => {
  const { query, language, isInitialized } = options;

  if (!query.trim()) {
    return chapters;
  }

  const normalizedQuery = query.toLowerCase();

  return chapters.filter((chapter) => {
    const searchTerms = getSearchTerms(chapter, language, isInitialized);
    return searchTerms.some((term) =>
      term.toLowerCase().includes(normalizedQuery),
    );
  });
};

const getSearchTerms = (
  chapter: Chapter,
  language: string,
  isInitialized: boolean,
): string[] => {
  const terms = [
    chapter.name_simple,
    chapter.name_arabic,
    chapter.translated_name.name,
  ];

  if (isInitialized && language === LANGUAGES.INDONESIAN) {
    const indonesianName = getTranslatedSurahName(
      chapter.translated_name.name,
      language,
    );
    terms.push(indonesianName);
  }

  return terms.filter(Boolean);
};

export const getDisplayName = (
  chapter: Chapter,
  language: string,
  isInitialized: boolean,
): string => {
  if (isInitialized && language === LANGUAGES.INDONESIAN) {
    return getTranslatedSurahName(chapter.translated_name.name, language);
  }
  return chapter.translated_name.name;
};

export const getRevelationColorPalette = (revelationPlace: string): string => {
  return revelationPlace === REVELATION_PLACES.MAKKAH ? "accent" : "quran";
};

export const getVersesText = (
  count: number,
  t: (key: string, options?: any) => string,
  isInitialized: boolean,
): string => {
  if (isInitialized) {
    return t("verses", { count });
  }
  return count === 1 ? "verse" : "verses";
};
