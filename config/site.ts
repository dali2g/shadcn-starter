export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Shadcn Starter",
  description:
    "A starter for Next.js with Tailwind CSS and TypeScript based on Shadcn's design system.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Skills & Experience",
      href: "/skills-and-experience",
    },
    {
      title: "Contact",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/dali2g",
    github: "https://github.com/dali2g",
    docs: "https://daliportfolio.vercel.app/",
  },
}
