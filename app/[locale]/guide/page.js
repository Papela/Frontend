import StaticContentPage from '@/components/StaticContentPage';
import { getPageTranslations } from '@/lib/translations';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getPageTranslations(locale, 'guide');
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mcworldcompressor.vercel.app';
  return {
    title: `${t.title} | MC World Compressor`,
    description: t.intro || t.title,
    alternates: {
      canonical: `${siteUrl}/${locale}/guide`,
      languages: {
        es: `${siteUrl}/es/guide`,
        en: `${siteUrl}/en/guide`,
        hi: `${siteUrl}/hi/guide`,
        ar: `${siteUrl}/ar/guide`,
      },
    },
  };
}

export default async function GuidePage({ params }) {
  const { locale } = await params;
  const t = getPageTranslations(locale, 'guide');
  return <StaticContentPage data={t} />;
}
