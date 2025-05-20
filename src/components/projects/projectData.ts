export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  company: "We For Media" | "Feer McQueen";
}

export const projects: Project[] = [
  // We For Media Projects
  {
    id: "bachir-hanbali",
    title: "Bachir Hanbali",
    description: "A custom WordPress website with modern design and exceptional performance.",
    tags: ["WordPress", "Custom Theme", "Responsive"],
    url: "https://www.bachirhanbali.com/",
    company: "We For Media"
  },
  {
    id: "sda-lebanon",
    title: "SDA Lebanon",
    description: "Non-profit organization website with donation system and event management.",
    tags: ["WordPress", "Donation System", "Event Management"],
    url: "https://sda-lb.org/",
    company: "We For Media"
  },
  {
    id: "tg-forwarding",
    title: "TG Forwarding",
    description: "Logistics and shipping company website with tracking functionality.",
    tags: ["WordPress", "API Integration", "Tracking System"],
    url: "https://www.tgforwarding.com/",
    company: "We For Media"
  },
  {
    id: "nutrivie-lb",
    title: "Nutrivie LB",
    description: "Nutrition and health products e-commerce website.",
    tags: ["WordPress", "WooCommerce", "E-commerce"],
    url: "http://nutrivie-lb.com/",
    company: "We For Media"
  },
  {
    id: "tru-and-beyond",
    title: "Tru & Beyond",
    description: "Corporate website with portfolio showcase and client testimonials.",
    tags: ["WordPress", "Portfolio", "Custom Design"],
    url: "https://www.truandbeyond.com/",
    company: "We For Media"
  },
  {
    id: "boost-dxb",
    title: "Boost DXB",
    description: "Dubai-based business consulting firm with service booking system.",
    tags: ["WordPress", "Booking System", "Business"],
    url: "https://www.boostdxb.com/",
    company: "We For Media"
  },
  {
    id: "levant-outsourcing",
    title: "Levant Outsourcing",
    description: "Corporate website with complex custom functionality and multi-language support.",
    tags: ["WordPress", "Multi-language", "Custom API"],
    url: "https://www.levantoutsourcing.com/",
    company: "We For Media"
  },
  {
    id: "wise-concepts-tv",
    title: "Wise Concepts TV",
    description: "Media production company website with video portfolio and services.",
    tags: ["WordPress", "Video Integration", "Portfolio"],
    url: "https://www.wiseconcepts.tv/",
    company: "We For Media"
  },
  {
    id: "spider-style",
    title: "Spider Style",
    description: "Fashion brand website with product catalog and trend updates.",
    tags: ["WordPress", "Product Catalog", "Fashion"],
    url: "https://www.spiderstyle.net/new/",
    company: "We For Media"
  },
  {
    id: "ziad-nakad",
    title: "Ziad Nakad",
    description: "Luxury fashion designer portfolio with collection showcase.",
    tags: ["WordPress", "Fashion", "Portfolio"],
    url: "https://ziadnakad.com/",
    company: "We For Media"
  },
  {
    id: "home-kit-lb",
    title: "Home Kit LB",
    description: "Home decor and furniture e-commerce store with product customization.",
    tags: ["WordPress", "WooCommerce", "Product Customization"],
    url: "https://www.homekitlb.com/",
    company: "We For Media"
  },
  {
    id: "albaina-international",
    title: "Albaina International",
    description: "International trading company website with multi-language support.",
    tags: ["WordPress", "Multi-language", "Corporate"],
    url: "http://www.albainainternational.com/",
    company: "We For Media"
  },
  {
    id: "majdalani-competition",
    title: "Majdalani Competition",
    description: "Event and competition website with registration system.",
    tags: ["WordPress", "Registration System", "Events"],
    url: "https://majdalanicompetition.com/",
    company: "We For Media"
  },
  {
    id: "the-fit-xperience",
    title: "The Fit Xperience",
    description: "Fitness center website with class scheduling and membership management.",
    tags: ["WordPress", "Booking System", "Fitness"],
    url: "https://www.thefitxperience.com/",
    company: "We For Media"
  },
  
  // Feer McQueen Projects
  {
    id: "sequel-services",
    title: "Sequel Services",
    description: "Business services company with client portal and service management.",
    tags: ["WordPress", "Client Portal", "Services"],
    url: "https://sequel-services.com/",
    company: "Feer McQueen"
  },
  {
    id: "noverna-plus",
    title: "Noverna Plus",
    description: "Healthcare solutions provider with product catalog and enquiry system.",
    tags: ["WordPress", "Healthcare", "Product Catalog"],
    url: "https://novernaplus.com/",
    company: "Feer McQueen"
  },
  {
    id: "tree-group",
    title: "Tree Group",
    description: "Corporate group website with subsidiary companies showcase.",
    tags: ["WordPress", "Corporate", "Multi-site"],
    url: "https://staging.treegroup.co/",
    company: "Feer McQueen"
  },
  {
    id: "saudi-marafiq",
    title: "Saudi Marafiq",
    description: "A responsive website with complex animations and interactive elements.",
    tags: ["WordPress", "Animations", "Interactive"],
    url: "https://www.saudi-marafiq.com/",
    company: "Feer McQueen"
  },
  {
    id: "image-council",
    title: "Image Council",
    description: "Creative agency website with portfolio showcase and service details.",
    tags: ["WordPress", "Portfolio", "Creative Agency"],
    url: "http://imagecouncil.net/",
    company: "Feer McQueen"
  },
  {
    id: "commune-studio",
    title: "Commune Studio",
    description: "Architecture and interior design studio with project gallery.",
    tags: ["WordPress", "Gallery", "Architecture"],
    url: "http://beta.communestudio.com/",
    company: "Feer McQueen"
  },
  {
    id: "al-mana-holding",
    title: "Al Mana Holding",
    description: "Enterprise-level corporate website with custom CMS implementation.",
    tags: ["WordPress", "Enterprise", "Performance"],
    url: "https://www.almanaholding.com.qa/",
    company: "Feer McQueen"
  },
  {
    id: "al-mana-capital-real-estate",
    title: "Al Mana Capital Real Estate",
    description: "Real estate investment company with property listings and investment opportunities.",
    tags: ["WordPress", "Real Estate", "Investment"],
    url: "https://almanacapitalrealestate.com/",
    company: "Feer McQueen"
  },
  {
    id: "damana-insurance",
    title: "Damana Insurance",
    description: "Insurance company website with policy details and claim processing.",
    tags: ["WordPress", "Insurance", "Forms"],
    url: "https://www.damana.com/",
    company: "Feer McQueen"
  },
  {
    id: "ace-gallagher",
    title: "ACE Gallagher",
    description: "Insurance brokerage firm with service information and contact forms.",
    tags: ["WordPress", "Insurance", "Business"],
    url: "https://ace-gallagher.com/",
    company: "Feer McQueen"
  },
  {
    id: "consult-feer",
    title: "Consult Feer",
    description: "Consulting division website with service details and case studies.",
    tags: ["WordPress", "Consulting", "Case Studies"],
    url: "https://consult-feer.com/",
    company: "Feer McQueen"
  },
  {
    id: "2mrw",
    title: "2MRW (Tomorrow)",
    description: "Future-focused innovation company with interactive concept showcase.",
    tags: ["WordPress", "Innovation", "Interactive"],
    url: "https://2mrw.cc/",
    company: "Feer McQueen"
  },
  {
    id: "mig-holding",
    title: "MIG Holding",
    description: "Multi-industry holding company with subsidiaries presentation.",
    tags: ["WordPress", "Corporate", "Holding"],
    url: "https://www.migholding.com/",
    company: "Feer McQueen"
  },
  {
    id: "georges-mghames",
    title: "Georges Mghames",
    description: "Personal brand website for an industry professional.",
    tags: ["WordPress", "Personal Brand", "Portfolio"],
    url: "https://georgesmghames.com/",
    company: "Feer McQueen"
  },
  {
    id: "bin-zafrah-contracting",
    title: "Bin Zafrah Contracting",
    description: "Construction company website with project portfolio and services.",
    tags: ["WordPress", "Construction", "Projects"],
    url: "https://binzafrahcontracting.com/",
    company: "Feer McQueen"
  },
  {
    id: "forward-mena",
    title: "Forward MENA",
    description: "Regional organization website with initiatives and event listings.",
    tags: ["WordPress", "Organization", "Events"],
    url: "https://forwardmena.org/",
    company: "Feer McQueen"
  },
  {
    id: "flag-m-group",
    title: "Flag M Group",
    description: "Corporate group website with business divisions and case studies.",
    tags: ["WordPress", "Corporate", "Business"],
    url: "https://www.flagmgroup.com/",
    company: "Feer McQueen"
  },
  {
    id: "leads-feer-mcqueen",
    title: "Leads Feer McQueen",
    description: "Lead generation platform with user authentication and dashboard.",
    tags: ["WordPress", "Lead Generation", "Dashboard"],
    url: "https://leads.feer-mcqueen.com/",
    company: "Feer McQueen"
  },
  {
    id: "cope-holding",
    title: "COPE Holding",
    description: "Investment holding company with portfolio and investor relations.",
    tags: ["WordPress", "Investment", "Corporate"],
    url: "https://cope-hldg.com/",
    company: "Feer McQueen"
  },
  {
    id: "sunkssd",
    title: "SunKSSD",
    description: "Technology company website with product showcase and technical details.",
    tags: ["WordPress", "Technology", "Products"],
    url: "https://www.sunkssd.io/",
    company: "Feer McQueen"
  },
  {
    id: "royal-clinics-ksa-offers",
    title: "Royal Clinics KSA Offers",
    description: "Special offers landing page for a healthcare provider.",
    tags: ["WordPress", "Healthcare", "Landing Page"],
    url: "https://offers.royalclinicsksa.com/",
    company: "Feer McQueen"
  },
  {
    id: "al-meswak-offers",
    title: "Al Meswak Offers",
    description: "Promotional campaign website with offer listings and registration.",
    tags: ["WordPress", "Promotions", "Campaigns"],
    url: "https://offers.almeswak.com/",
    company: "Feer McQueen"
  }
]; 