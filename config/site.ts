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
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
