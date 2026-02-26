/**
 * JsonLd - Composant pour injecter les structured data (JSON-LD)
 * Optimisé pour le SEO et les rich snippets Google
 */

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

/**
 * JsonLdMultiple - Pour injecter plusieurs blocs JSON-LD
 */
interface JsonLdMultipleProps {
  data: Record<string, unknown>[];
}

export function JsonLdMultiple({ data }: JsonLdMultipleProps) {
  return (
    <>
      {data.map((item, index) => (
        <JsonLd key={index} data={item} />
      ))}
    </>
  );
}
