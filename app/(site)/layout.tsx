import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { getAllPillars, getSiteSettings } from "@/lib/payload";
import { extractScriptContent } from "@/lib/seo";

export const revalidate = 60;

const heading = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  const [pillars, settings] = await Promise.all([getAllPillars(), getSiteSettings()]);
  const headerCode = extractScriptContent(settings.headerCode);
  const bodyCode = extractScriptContent(settings.bodyCode);

  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900 overflow-x-hidden">
        {headerCode && (
          <Script id="site-header-code" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: headerCode }} />
        )}
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer pillars={pillars} />
        </MotionProvider>
        {bodyCode && (
          <Script id="site-body-code" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: bodyCode }} />
        )}
      </body>
    </html>
  );
}
