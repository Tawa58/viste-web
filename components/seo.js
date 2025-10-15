import Head from "next/head";

const SEO = ({ 
  pageTitle = "Visionary Institute of Science, Technology and Mathematics Academy", 
  description = "VISTEM Academy - Leading boarding school in Norton, Nharira, Zimbabwe under Principal Caxton Buffalo Nyathi. Offering ZIMSEC, Cambridge & HEXCO qualifications with over 78% pass rates. Excellence in Science, Technology, Mathematics, Commerce & Arts.",
  keywords = "VISTEM Academy, boarding school Norton Zimbabwe, Nharira school, ZIMSEC results Norton, Cambridge education Zimbabwe, private school Norton, science technology mathematics academy, quality education Nharira, Caxton Buffalo Nyathi principal",
  image = "/assets/img/logo/logo.png",
  url = "https://viste-online.co.zw"
}) => (
  <>
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle} | VISTEM Academy Norton - Excellence in Education</title>
      <meta name="title" content={`${pageTitle} | VISTEM Academy Norton - Excellence in Education`} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Visionary Institute of Science, Technology and Mathematics Academy" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${pageTitle} | VISTEM Academy Norton`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:site_name" content="VISTEM Academy Norton" />
      <meta property="og:locale" content="en_ZW" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`${pageTitle} | VISTEM Academy Norton`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}${image}`} />
      
      {/* Additional Meta Tags */}
      <meta name="language" content="English" />
      <meta name="geo.region" content="ZW-MA" />
      <meta name="geo.country" content="Zimbabwe" />
      <meta name="geo.placename" content="Norton, Nharira, Zimbabwe" />
      <meta name="geo.position" content="-17.883;30.700" />
      <meta name="ICBM" content="-17.883, 30.700" />
      
      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Visionary Institute of Science, Technology and Mathematics Academy",
            "alternateName": ["VISTEM Academy", "VISTEM Academy Norton"],
            "url": url,
            "logo": `${url}${image}`,
            "description": description,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Norton",
              "addressRegion": "Nharira",
              "addressCountry": "Zimbabwe",
              "streetAddress": "Norton, Nharira"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-17.883",
              "longitude": "30.700"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+263789984774",
              "contactType": "Admissions",
              "areaServed": ["Norton", "Nharira", "Zimbabwe"]
            },
            "employee": {
              "@type": "Person",
              "name": "Caxton Buffalo Nyathi",
              "jobTitle": "Principal",
              "worksFor": {
                "@type": "EducationalOrganization",
                "name": "Visionary Institute of Science, Technology and Mathematics Academy"
              }
            },
            "educationalCredentialAwarded": ["ZIMSEC", "Cambridge", "HEXCO"],
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Secondary Education"
            },
            "foundingDate": "2020",
            "keywords": ["Science", "Technology", "Mathematics", "Boarding School", "Norton", "Nharira", "Caxton Buffalo Nyathi"]
          })
        }}
      />
      
      {/* Favicons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/logo/logo.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/logo/logo.png" />
      <link rel="apple-touch-icon" href="/assets/img/logo/logo.png" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://img.icons8.com" />
    </Head>
  </>
);

export default SEO;
