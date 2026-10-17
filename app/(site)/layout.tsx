import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import SiteEffects from "@/components/SiteEffects";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import { getAllPillars, getLatestCaseStudy, getSiteSettings } from "@/lib/payload";
import { extractScriptContent } from "@/lib/seo";

export const revalidate = 60;

// One typeface sitewide. Inter is a variable font, so every weight from the
// light italic headline accents (300) to the extrabold headings is one file.
const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const FALLBACK_METADATA: Metadata = {
  title: "NotEcommerce: Ecommerce Intelligence & Growth Consultancy",
  description:
    "NotEcommerce is a data-led ecommerce intelligence and growth consultancy for D2C, marketplace, and quick commerce leaders. Proprietary research, senior-led advisory, and hands-on execution.",
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: settings.meta?.title || FALLBACK_METADATA.title,
    description: settings.meta?.description || FALLBACK_METADATA.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [pillars, settings, latestArticle] = await Promise.all([
    getAllPillars(),
    getSiteSettings(),
    getLatestCaseStudy(),
  ]);
  const headerCode = extractScriptContent(settings.headerCode);
  const bodyCode = extractScriptContent(settings.bodyCode);

  return (
    <html
      lang="en"
      className={`${body.variable} h-full antialiased`}
      // The theme script below sets the "dark" class before React hydrates
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-[color:var(--background)] text-navy-900 overflow-x-hidden">
        {headerCode && (
          <Script id="site-header-code" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: headerCode }} />
        )}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <SiteEffects />
          <Header
            pillars={pillars.map((p) => ({ title: p.title, slug: p.slug, description: p.description }))}
            announcement={
              latestArticle ? { title: latestArticle.title, href: `/articles/${latestArticle.slug}` } : null
            }
          />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer pillars={pillars} siteSettings={settings} />
        </MotionProvider>
        {bodyCode && (
          <Script id="site-body-code" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: bodyCode }} />
        )}
      </body>
    </html>
  );
}
