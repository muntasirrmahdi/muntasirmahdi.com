export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  external?: boolean;
}

export const navItems: NavItem[] = [
  { label: "About", href: "/biography-of-muntasir-mahdi" },
  { label: "Books", href: "/books-by-muntasir-mahdi" },
  { label: "Blogs & Thoughts", href: "/blog" },
  {
    label: "Newsletters",
    children: [
      {
        label: "Banglay Solopreneurship",
        href: "/banglay-solopreneurship-newsletter-by-muntasir-mahdi",
      },
    ],
  },
  {
    label: "Venture",
    children: [
      {
        label: "Learn with Muntasir",
        href: "https://learnwithmuntasir.com",
        external: true,
      },
      {
        label: "Mahdi & Mamun Podcast",
        href: "https://www.youtube.com/@MahdiMamunPodcast",
        external: true,
      },
    ],
  },
];

export const footerLinks: NavItem[] = [
  { label: "Contact", href: "/contact" },
  { label: "Speaking & Media", href: "/speaking-and-media" },
  { label: "Recommendations", href: "/recommendations" },
  { label: "What I'm Doing NOW", href: "/now" },
  { label: "Terms & Disclaimer", href: "/terms-and-disclaimer" },
];
