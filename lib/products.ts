// Products built and run by Floyet Labs & Technologies.
// Shared by the home page and the coaching page.

export type Product = {
  name: string;
  category: string;
  tagline: string;
  features: string[];
  link: string;
  beta?: boolean;
  apps?: string[];
};

export const products: Product[] = [
  {
    name: "GymTie",
    category: "Fitness ecosystem",
    tagline:
      "A connected platform for real gyms across India. Owners run their gym in GymTie Manager; members track their journey in GymTie Fit.",
    features: ["Billing & payments", "Member management", "WhatsApp automation", "Attendance", "Leaderboards", "Analytics"],
    link: "https://gymtie.com",
    apps: ["GymTie Manager", "GymTie Fit"],
  },
  {
    name: "Livonomi",
    category: "Life management OS",
    tagline: "Finance-first life management for personal and business use.",
    features: ["Wealth tracking", "AI insights", "Dual workspaces"],
    link: "https://livonomi.com",
  },
  {
    name: "YoungMenu",
    category: "Restaurant operations",
    tagline: "POS, digital menus and online reach for food businesses.",
    features: ["POS billing", "QR menus", "Discovery app"],
    link: "https://youngmenu.com",
    beta: true,
  },
  {
    name: "DevaPatha",
    category: "Temple platform",
    tagline: "Temple operations and devotee engagement in one place.",
    features: ["Temple manager", "Devotee app", "Donations & events"],
    link: "https://devapatha.com",
    beta: true,
  },
  {
    name: "Onebest",
    category: "Online gift store",
    tagline: "Curated gifts for every occasion, delivered across India.",
    features: ["Curated catalog", "Special occasions", "India-wide delivery"],
    link: "https://onebest.in",
  },
];
