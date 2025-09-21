"use client";

import { ChaptersDisplay } from "./ChaptersDisplay";
import { LoadingSpinner } from "@/shared/components/feedback/LoadingSpinner";
import { ErrorDisplay } from "@/shared/components/feedback/ErrorDisplay";
import { useGetChapters } from "../hooks/useChapters";

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
