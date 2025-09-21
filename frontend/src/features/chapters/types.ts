export interface QuranChaptersResponse {
  chapters: Chapter[];
}

export interface ChaptersDisplayProps {
  chapters: Chapter[];
}

export interface Chapter {
  id: number;
  revelation_place: "makkah" | "madinah";
  revelation_order: number;
  bismillah_pre: boolean;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  pages: number[];
  translated_name: TranslatedName;
}

export interface TranslatedName {
  language_name: string;
  name: string;
}
