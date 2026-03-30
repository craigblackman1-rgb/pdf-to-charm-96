import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noIndex?: boolean;
  publishedAt?: string;
  modifiedAt?: string;
  author?: string;
  schema?: object | object[];
}

const SITE_NAME = "Eternal Fitness";
const SITE_URL = "https://eternalfitness.co.uk";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const SEO = ({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  publishedAt,
  modifiedAt,
  author = "Esther Fair",
  schema,
}: SEOProps) => {
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME}`;

  const canonicalUrl = canonical
    ? `${SITE_URL}${canonical}`
    : undefined;

  const schemas = schema
    ? Array.isArray(schema)
      ? schema
      : [schema]
    : [];

  return (
    <Helmet>
      {/* Primary */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"}
      />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:locale" content="en_GB" />

      {/* Article-specific */}
      {ogType === "article" && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {ogType === "article" && modifiedAt && (
        <meta property="article:modified_time" content={modifiedAt} />
      )}
      {ogType === "article" && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* Geo */}
      <meta name="geo.region" content="GB-WSX" />
      <meta name="geo.placename" content="Worthing, West Sussex" />

      {/* Structured Data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
