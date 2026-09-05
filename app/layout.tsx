import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";
import { LanguageProvider } from "@/lib/language-context";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"]
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wijayaagussetiawan.vercel.app"),
  title: "Wijaya Agus Setiawan | Business Administration & Business Development",
  description:
    "Portfolio of Wijaya Agus Setiawan, Business Administration graduate with experience in Business Development, Administration, Operations, and Leadership.",
  openGraph: {
    title: "Wijaya Agus Setiawan | Business Administration & Business Development",
    description:
      "Portfolio of Wijaya Agus Setiawan, Business Administration graduate with experience in Business Development, Administration, Operations, and Leadership.",
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Wijaya Agus Setiawan | Business Administration & Business Development",
    description:
      "Portfolio of Wijaya Agus Setiawan, Business Administration graduate with experience in Business Development, Administration, Operations, and Leadership."
  }
};

const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('wijaya-portfolio-theme');
    var theme = stored;
    if (!theme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
