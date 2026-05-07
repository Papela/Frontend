export default function StaticContentPage({ data }) {
  const { title, intro, lastUpdated, effectiveDate, sections = [] } = data;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h1>

      {lastUpdated && effectiveDate && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          {lastUpdated}: {effectiveDate}
        </p>
      )}

      {intro && (
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-10">
          {intro}
        </p>
      )}

      <div className="space-y-8">
        {sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              {section.heading}
            </h2>
            <p className="leading-relaxed whitespace-pre-line text-gray-700 dark:text-gray-300">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
