import { useEffect } from "react";

const StructuredData = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Apna Business",
      image: "https://umashankar04.github.io/apna-business-website/logo.png",
      description:
        "Digital Growth Agency helping startups and local businesses grow online with website development, social media management, branding, SEO, and AI solutions.",
      url: "https://umashankar04.github.io/apna-business-website/",
      telephone: "+91-YOUR-PHONE-NUMBER",
      email: "info@apnabusiness.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Business Address",
        addressLocality: "India",
        postalCode: "000000",
        addressCountry: "IN",
      },
      priceRange: "₹₹",
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      sameAs: [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.linkedin.com/",
        "https://www.youtube.com/",
      ],
      serviceType: [
        "Website Development",
        "Social Media Management",
        "SEO Optimization",
        "Digital Marketing",
        "E-commerce Solutions",
        "Branding & Logo Design",
        "AI Chatbots",
        "WhatsApp Automation",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "120",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Also add Organization Schema
    const organizationData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Apna Business",
      url: "https://umashankar04.github.io/apna-business-website/",
      logo: "https://umashankar04.github.io/apna-business-website/logo.png",
      description: "Digital Growth Agency for startups and businesses",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Service",
        telephone: "+91-YOUR-PHONE-NUMBER",
        email: "info@apnabusiness.com",
      },
    };

    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.innerHTML = JSON.stringify(organizationData);
    document.head.appendChild(orgScript);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      if (orgScript.parentNode) orgScript.parentNode.removeChild(orgScript);
    };
  }, []);

  return null;
};

export default StructuredData;
