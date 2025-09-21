"use client";

import { ChaptersContainer } from "@/features/chapters/components/ChaptersContainer";
import { Header } from "@/shared/components/layout/Header";

export default function Home() {
  return (
    <Header>
      <ChaptersContainer />
    </Header>
  );
}
