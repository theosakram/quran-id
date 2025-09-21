import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/shared/components/ui/provider";
import { I18nProvider } from "@/features/i18n/I18nProvider";
import { Toaster } from "@/shared/components/ui/toaster";
import { QueryProvider } from "@/shared/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quran ID",
  description: "Indonesian Quran application with bilingual support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <I18nProvider>
          <Provider>
            <QueryProvider>
              {children}
              <Toaster />
            </QueryProvider>
          </Provider>
        </I18nProvider>
      </body>
    </html>
  );
}
