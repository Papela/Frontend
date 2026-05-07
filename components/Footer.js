import Link from 'next/link';
import { getPageTranslations } from '@/lib/translations';

export default function Footer({ locale = 'en' }) {
  const t = getPageTranslations(locale, 'footer');
  const currentYear = new Date().getFullYear();

  const linkClass =
    "text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors";

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-10 mt-auto">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">MC World Compressor</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              <a href="mailto:srkktua@protonmail.com?subject=MCWCompressor" className={linkClass}>
                srkktua@protonmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
              {t.project}
            </h3>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/about`} className={linkClass}>{t.about}</Link></li>
              <li><Link href={`/${locale}/guide`} className={linkClass}>{t.guide}</Link></li>
              <li>
                <a href="https://github.com/MC-World-Compressor/" target="_blank" rel="noopener noreferrer" className={linkClass}>
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-3">
              {t.legal}
            </h3>
            <ul className="space-y-2">
              <li><Link href={`/${locale}/privacy`} className={linkClass}>{t.privacy}</Link></li>
              <li><Link href={`/${locale}/terms`} className={linkClass}>{t.terms}</Link></li>
            </ul>
          </div>

          <div className="md:text-right text-sm text-gray-600 dark:text-gray-400">
            <p>
              {t.developedBy}{' '}
              <a href="https://github.com/Papela" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors underline">
                Papela
              </a>
            </p>
            <p className="mt-1">&copy; {currentYear} MC World Compressor.</p>
            <p className="mt-1">{t.rights}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
