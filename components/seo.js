import Head from "next/head";

const SEO = ({ 
  pageTitle = "VISTE SENIOR ACADEMY - Premier STEM Education in Norton, Zimbabwe", 
  description = "VISTE SENIOR ACADEMY (Visionary Institute of Science & Technology) - Zimbabwe's leading STEM boarding school in Norton, Nharira. 76%+ pass rates in ZIMSEC & Cambridge. Excellence in Science, Technology, Engineering, Mathematics. Principal Caxton Buffalo Nyathi.",
  keywords = "VISTE SENIOR ACADEMY, VISTE Academy Zimbabwe, Norton boarding school, STEM education Zimbabwe, science technology mathematics Norton, ZIMSEC Cambridge results Norton, best schools Norton Zimbabwe, Nharira boarding school, Caxton Buffalo Nyathi principal, private schools Zimbabwe, engineering mathematics education",
  image = "/assets/img/logo/logo.png",
  url = "https://www.viste-online.co.zw"
}) => (
  <>
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle} | VISTE SENIOR ACADEMY Norton - Excellence in Education</title>
      <meta name="title" content={`${pageTitle} | VISTE SENIOR ACADEMY Norton - Excellence in Education`} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Visionary Institute of Science, Technology and Mathematics Academy" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      
      {/* Advanced SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="theme-color" content="#1a237e" />
      <meta name="msapplication-TileColor" content="#1a237e" />
      
      {/* Geographic targeting */}
      <meta name="geo.region" content="ZW-MA" />
      <meta name="geo.placename" content="Norton, Zimbabwe" />
      <meta name="geo.position" content="-17.8833;30.7000" />
      <meta name="ICBM" content="-17.8833, 30.7000" />
      
      {/* Education specific */}
      <meta name="category" content="education" />
      <meta name="coverage" content="Zimbabwe" />
      <meta name="target" content="students, parents, education" />
      <meta name="audience" content="students, parents, educators" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={`${pageTitle} | VISTE SENIOR ACADEMY Norton`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}${image}`} />
      <meta property="og:site_name" content="VISTE SENIOR ACADEMY Norton" />
      <meta property="og:locale" content="en_ZW" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={`${pageTitle} | VISTE SENIOR ACADEMY Norton`} />
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
            "@type": ["EducationalOrganization", "School"],
            "name": "VISTE SENIOR ACADEMY",
            "legalName": "Visionary Institute of Science, Technology and Mathematics Academy", 
            "alternateName": ["VISTE", "VISTE Academy", "VISTE SENIOR ACADEMY Norton", "Visionary Institute"],
            "url": url,
            "logo": `${url}${image}`,
            "image": `${url}${image}`,
            "description": description,
            "slogan": "Excellence in STEM Education",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Norton",
              "addressRegion": "Mashonaland West",
              "addressCountry": "ZW",
              "streetAddress": "Norton, Nharira",
              "postalCode": "Norton"
            },
            "geo": {
              "@type": "GeoCoordinates", 
              "latitude": "-17.8833",
              "longitude": "30.7000"
            },
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+263789984774",
              "contactType": "Admissions",
              "areaServed": ["Norton", "Nharira", "Zimbabwe", "Mashonaland West"],
              "availableLanguage": ["English", "Shona"],
              "contactOption": "TollFree"
            }],
            "founder": {
              "@type": "Person", 
              "name": "Caxton Buffalo Nyathi"
            },
            "employee": [{
              "@type": "Person",
              "name": "Caxton Buffalo Nyathi",
              "jobTitle": "Principal",
              "worksFor": {
                "@type": "EducationalOrganization",
                "name": "VISTE SENIOR ACADEMY"
              }
            }],
            "educationalLevel": "Secondary Education",
            "educationalCredentialAwarded": ["ZIMSEC O-Level", "ZIMSEC A-Level", "Cambridge IGCSE", "Cambridge A-Level", "HEXCO"],
            "hasCredential": {
              "@type": "EducationalOccupationalCredential",
              "credentialCategory": "Secondary Education",
              "educationalLevel": "SecondarySchool"
            },
            "foundingDate": "2020",
            "numberOfStudents": "500+",
            "priceRange": "Affordable",
            "areaServed": {
              "@type": "Place",
              "name": "Zimbabwe"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "EducationalOccupationalProgram", 
                "name": "STEM Education Program",
                "description": "Science, Technology, Engineering and Mathematics education"
              }
            },
            "keywords": ["VISTE", "STEM education", "boarding school", "Norton Zimbabwe", "science technology mathematics", "Caxton Buffalo Nyathi", "ZIMSEC Cambridge"],
            "sameAs": [
              `${url}`,
              `${url}/about`,
              `${url}/principal-message`
            ]
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
