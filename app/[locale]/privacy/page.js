import StaticContentPage from '@/components/StaticContentPage';
import { getPageTranslations } from '@/lib/translations';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getPageTranslations(locale, 'privacy');
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mcworldcompressor.vercel.app';
  return {
    title: `${t.title} | MC World Compressor`,
    description: t.intro || t.title,
    alternates: {
      canonical: `${siteUrl}/${locale}/privacy`,
      languages: {
        es: `${siteUrl}/es/privacy`,
        en: `${siteUrl}/en/privacy`,
        hi: `${siteUrl}/hi/privacy`,
        ar: `${siteUrl}/ar/privacy`,
      },
    },
  };
}

export default async function PrivacyPage({ params }) {
  const { locale } = await params;
  const t = getPageTranslations(locale, 'privacy');
  return <StaticContentPage data={t} />;
}
