import React from 'react';

export const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Buddha's Hospital",
    "alternateName": "Buddha Medical Center",
    "url": "https://buddhashospital.com",
    "logo": "https://buddhashospital.com/logo.png",
    "description": "Buddha's Hospital provides world-class healthcare with state-of-the-art technology and compassionate medical expertise.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Healthcare Way, Medical District",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94103",
      "addressCountry": "US"
    },
    "telephone": "+1-234-567-890",
    "openingHours": "Mo-Su 00:00-23:59",
    "hasMap": "https://maps.google.com/?q=Buddhas+Hospital+San+Francisco",
    "medicalSpecialty": [
      "Cardiology",
      "Neurology",
      "Orthopedics",
      "Pediatrics",
      "Oncology"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
