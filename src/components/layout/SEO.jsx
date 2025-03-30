import { Helmet } from "react-helmet-async";

const SEO = () => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>GRAMLOK Fruits and Exports | Premium Quality Farm Fresh Fruits</title>
      <meta 
        name="description" 
        content="GRAMLOK Fruits and Exports delivers high-quality, naturally grown fruits for India and international markets. Trusted since 2018." 
      />
      <meta 
        name="keywords" 
        content="fruit exports, fresh fruits, organic farming, sustainable agriculture, premium fruits, farm-to-table, Indian fruit exporters" 
      />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content="GRAMLOK Fruits and Exports" />
      <meta 
        property="og:description" 
        content="Your trusted partner in premium fruit farming and exports. Discover farm-fresh fruits with global delivery." 
      />
      <meta property="og:image" content="https://www.gramlokfruits.com/images/fruit-banner.jpg" />
      <meta property="og:url" content="https://www.gramlokfruits.com" />
      <meta property="og:site_name" content="GRAMLOK Fruits and Exports" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="GRAMLOK Fruits and Exports" />
      <meta 
        name="twitter:description" 
        content="Discover premium, farm-fresh fruits from GRAMLOK Fruits and Exports. We export high-quality produce globally." 
      />
      <meta name="twitter:image" content="https://www.gramlokfruits.com/images/fruit-banner.jpg" />

      {/* JSON-LD Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "GRAMLOK Fruits and Exports",
          "url": "https://www.gramlokfruits.com",
          "logo": "https://www.gramlokfruits.com/logo.png",
          "description": "GRAMLOK Fruits and Exports delivers premium, naturally grown fruits globally. Established in 2018.",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+918317284314",
            "contactType": "customer service",
            "email": "gramlokfruits@gmail.com",
            "areaServed": "Worldwide",
            "availableLanguage": ["English", "Hindi", "Marathi"]
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Phaltan",
            "addressLocality": "Maharashtra",
            "addressCountry": "India"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
