"use client";

import { ChaptersContainer } from "@/components/containers/ChaptersContainer";
import { Header } from "@/components/custom/Header";

export default function Home() {
  return (
    <Header>
      <ChaptersContainer />
    </Header>
  );
}
