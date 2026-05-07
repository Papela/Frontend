import StaticContentPage from '@/components/StaticContentPage';
import { getPageTranslations } from '@/lib/translations';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getPageTranslations(locale, 'about');
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mcworldcompressor.vercel.app';
  return {
    title: `${t.title} | MC World Compressor`,
    description: t.intro || t.title,
    alternates: {
      canonical: `${siteUrl}/${locale}/about`,
      languages: {
        es: `${siteUrl}/es/about`,
        en: `${siteUrl}/en/about`,
        hi: `${siteUrl}/hi/about`,
        ar: `${siteUrl}/ar/about`,
      },
    },
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const t = getPageTranslations(locale, 'about');
  return <StaticContentPage data={t} />;
}
