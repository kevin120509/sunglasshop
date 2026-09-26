export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Optician",
    "name": "Sunglass Shop Óptica",
    "image": "https://www.opticasunglasshop.com.mx/images/og_sunglass_shop.png",
    "@id": "https://www.opticasunglasshop.com.mx/#optica",
    "url": "https://www.opticasunglasshop.com.mx/",
    "telephone": "+529999874504",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle 50 No. 143 x 15 y 19 Nueva Hidalgo, Loc. 64, Entrada 3 por Soriana",
      "addressLocality": "Mérida",
      "addressRegion": "Yucatán",
      "postalCode": "97220",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.9926,
      "longitude": -89.6583
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "20:00"
    },
    "department": [
      {
        "@type": "LocalBusiness",
        "name": "Hospital de Lentes",
        "description": "Servicio de ajustes, reparación y refacciones para lentes y armazones."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
