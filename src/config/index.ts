import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Upen Manickam | Software Engineer - Machine Learning @Meta | GenAI, ML, Agentic AI",
  author: "Upen Manickam",
  description:
    "Software Engineer based in Bellevue, WA, USA. Backend/fullstack engineer, currently focused on building GenAI applications.",
  lang: "en",
  siteLogo: "/upen-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/uforupen/" },
    { text: "Github", href: "https://github.com/uforupen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Upen Manickam",
    specialty: "Software Engineer - Machine Learning @Meta | GenAI, ML, Agentic AI",
    summary:
      "Software Engineer based in Bellevue, WA, USA. Backend/fullstack engineer, currently focused on building GenAI applications.",
    email: "uforupen@gmail.com",
  },
  experience: [
    {
      company: "Meta",
      position: "Software Engineer - Machine Learning",
      startDate: "Dec 2023",
      endDate: "Current",
      summary: [
        "",
      ],
    },
    {
      company: "3|Share",
      position: "AEM Lead Engineer",
      startDate: "Oct 2016",
      endDate: "Dec 2023",
      summary: [
        "",
      ],
    },
  ],
  projects: [
  ],
  about: {
    description: `
      Hi, I’m Upendran Manickam aka Upen, a passionate backend engineer currently focused on building GenAI solutions. With a strong background in backend, as well as infrastructure design, I am lately focused on AI Engineering and related technologies.
    `,
    image: "/upen-big.jpg",
  },
};

// #5755ff
