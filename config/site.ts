export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Dali2g • Software Engineer",
  description:
    "A starter for Next.js with Tailwind CSS and TypeScript based on Shadcn's design system.",
  mainNav: [
    {
      id: 1,
      title: "Home",
      href: "/",
    },
    {
      id:2,
      title: "Projects",
      href: "/projects",
    },
    {
      id:3,
      title: "Skills & Experience",
      href: "/skills-and-experience",
    },
    {
      id:4,
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/dali2g",
    github: "https://github.com/dali2g",
    docs: "https://daliportfolio.vercel.app/",
  },
}
