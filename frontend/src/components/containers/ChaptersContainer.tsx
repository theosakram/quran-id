"use client";

import { ChaptersDisplay } from "@/components/custom/ChaptersDisplay";
import { LoadingSpinner } from "@/components/custom/LoadingSpinner";
import { ErrorDisplay } from "@/components/custom/ErrorDisplay";
import { useGetChapters } from "@/modules/quran/quranHooks";
import { Chapter } from "@/types/chapter";

export const ChaptersContainer = () => {
  const { data: chapters, isLoading, error, refetch } = useGetChapters();

  if (isLoading) {
    return <LoadingSpinner message="Loading Quran chapters..." />;
  }

  if (error) {
    return (
      <ErrorDisplay
        title="Failed to load chapters"
        message="Unable to fetch Quran chapters. Please check your connection and try again."
        error={error}
        onRetry={() => refetch()}
        showDetails={true}
      />
    );
  }

  if (!chapters || chapters.chapters.length === 0) {
    return (
      <ErrorDisplay
        title="No chapters found"
        message="No Quran chapters are available at the moment."
        onRetry={() => refetch()}
      />
    );
  }

  return <ChaptersDisplay chapters={chapters.chapters} />;
};
