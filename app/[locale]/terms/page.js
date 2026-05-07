import StaticContentPage from '@/components/StaticContentPage';
import { getPageTranslations } from '@/lib/translations';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getPageTranslations(locale, 'terms');
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mcworldcompressor.vercel.app';
  return {
    title: `${t.title} | MC World Compressor`,
    description: t.intro || t.title,
    alternates: {
      canonical: `${siteUrl}/${locale}/terms`,
      languages: {
        es: `${siteUrl}/es/terms`,
        en: `${siteUrl}/en/terms`,
        hi: `${siteUrl}/hi/terms`,
        ar: `${siteUrl}/ar/terms`,
      },
    },
  };
}

export default async function TermsPage({ params }) {
  const { locale } = await params;
  const t = getPageTranslations(locale, 'terms');
  return <StaticContentPage data={t} />;
}
