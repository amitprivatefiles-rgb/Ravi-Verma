// All copy and facts for the R. P. Verma website live here.
//
// Sources: nrsroyalpalace.com/founder and /about (official bio, timeline and
// quotes), the NRS Group details brief, and MCA registry data (DIN 06874580).
//
// Conventions:
//   - `draft: true`  = copy we wrote; Mr. Verma must approve it before launch.
//   - TODO(client)   = information we still need from him.
//   - Unconfirmed facts are left out of the site entirely, never guessed.

export const FIRST_VENTURE_YEAR = 2013;

export const person = {
  brandName: "R. P. Verma",
  fullName: "Ravinandan Prasad Verma",
  honorific: "Mr. R. P. Verma",
  alternateNames: ["R. P. Verma", "Ravi Verma", "Ravinandan Verma"],
  title: "Founder, Chairman & Managing Director",
  org: "NRS Group",
  shortTitle: "Chairman & Managing Director, NRS Group",
  din: "06874580",
  portrait: "/images/rp-verma-portrait.jpg",
  portraitWide: "/images/rp-verma-lounge.jpg",
};

export const seo = {
  title: "R. P. Verma | Founder & Chairman, NRS Group | Hospitality Entrepreneur, Kolkata",
  description:
    "Ravinandan Prasad (R. P.) Verma is the founder and Chairman & Managing Director of NRS Group, a Kolkata-based group spanning hotels, restaurants, real estate and leisure.",
};

export const contact = {
  // TODO(client): confirm current head office (Shaila Tower or Godrej Genesis 1308) and a
  // separate office line / email for Mr. Verma if he wants one.
  addressLines: [
    "Godrej Genesis Building, 13th Floor, Unit 1308",
    "EP & GP Block, Sector V, Salt Lake",
    "Kolkata 700091, West Bengal",
  ],
  phone: "+91 70444 70888",
  phoneHref: "tel:+917044470888",
  // TODO(client): confirm this number is on WhatsApp.
  whatsappHref: "https://wa.me/917044470888",
  email: "info@nrsgroups.in",
  mapQuery: "Godrej Genesis Building, Sector V, Salt Lake, Kolkata 700091",
};

// Profiles that describe him or the group. Used for schema `sameAs` and the footer.
// TODO(client): add his personal LinkedIn and Instagram once shared.
export const profiles = [
  { label: "NRS Royal Palace: Founder page", href: "https://nrsroyalpalace.com/founder" },
  { label: "NRS Group on LinkedIn", href: "https://www.linkedin.com/company/nrsgroup" },
  { label: "NRS Group on Facebook", href: "https://www.facebook.com/nrsgroupkolkata" },
  { label: "NRS Group on YouTube", href: "https://www.youtube.com/@nrsgroup2024" },
];

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/journey/", label: "Journey" },
  { href: "/ventures/", label: "Ventures" },
  { href: "/projects/", label: "Projects" },
  { href: "/upcoming/", label: "Upcoming" },
  { href: "/vision/", label: "Vision" },
  { href: "/media/", label: "Media" },
  { href: "/contact/", label: "Contact" },
];

export const home = {
  // draft: headline and sub-line are ours (plan §5.1) and need his approval.
  headline: "From a single kitchen in Kolkata to a hospitality group across eastern India.",
  subline: "Hotels, dining, real estate and leisure, built on one belief: quality services demand quality people.",
  intro:
    "Some people build businesses. Ravinandan Prasad Verma built a world. From a single food venture in Kolkata to a hospitality group that stretches across eastern India, his journey is one of quiet conviction: the kind that does not announce itself but simply shows up, year after year, in the quality of what it produces.",
};

export const companiesFounded = [
  { name: "Shaila Realty Management", year: 2012, sector: "Real estate" },
  { name: "Bistro-Y Foods", year: 2013, sector: "Food & dining" },
  { name: "NRS Business Centre Pvt. Ltd.", year: 2014, sector: "Business services" },
  { name: "Realtiven Construction", year: 2019, sector: "Construction" },
  { name: "Eco Amusement Dam Park", year: 2019, sector: "Leisure" },
  { name: "NRS Hospitality Pvt. Ltd.", year: 2020, sector: "Hospitality" },
  { name: "Buono Gusto Foods", year: 2020, sector: "Food & dining" },
  { name: "Verma Holiday Hotel & Resorts", year: 2023, sector: "Hospitality" },
];

// Only confirmed figures. TODO(client): rooms across properties, team size, guests served.
export function stats() {
  const years = new Date().getFullYear() - FIRST_VENTURE_YEAR;
  return [
    { value: `${years}+`, label: "Years building" },
    { value: `${companiesFounded.length}`, label: "Companies founded" },
    { value: "52", label: "Rooms at the Puri flagship" },
    { value: "20", label: "Bighas at Tarapith" },
  ];
}

export const quotes = {
  philosophy: "Quality services demand quality people.",
  service:
    "The target is always to provide state-of-the-art services to the clients where quality is the first priority.",
  puri: "A hotel there needed to belong to the place, not impose on it.",
  // Brochure, "Meet the Founder": his life mantra.
  mantra: "Zindagi mein khush raho",
};

export const bio = [
  "The son of a family rooted in the values of hard work and service, Mr. Verma did not inherit an empire. After completing his education in Ranchi, Jharkhand, he moved to Kolkata and started as an employee in a boutique organisation. His mission was always to go one step further.",
  "He started Bistro-Y Foods in 2013: a modest beginning in the food business that taught him the fundamentals. A guest remembers how they were treated long after they forget what they paid, and quality is not a department but a habit.",
  "By 2014 he had established NRS Business Centre Pvt. Ltd. in Salt Lake, Kolkata, the nerve centre from which a growing constellation of companies would be coordinated. What followed was a decade of disciplined expansion: construction, food, real estate, leisure and, always at the centre of it all, hospitality.",
  "When he chose Puri for his flagship hotel, it was not an accident. Puri is a city of temples, of pilgrimage, of the sea. A hotel there needed to belong to the place, not impose on it. So he built NRS Royal Palace with hand-carved arches, white jali screens, gilded domes, marble floors and teak thresholds. Ornate on purpose; every detail an act of respect for the city and the guests who come to it.",
  "One of the youngest and most energetic entrepreneurs in the region, he believes in sharing smiles. His life mantra: \"Zindagi mein khush raho\" (be happy in life).",
  "Today, from the group's head office in Kolkata, Mr. Verma oversees a group of companies united by a single belief: that excellence is not a milestone but a daily practice. NRS Royal Palace remains the flagship, and the group's largest project yet, a tower hotel at Tarapith, is now rising.",
];

// draft: value names drawn from his own quotes (plan §5.2).
export const values = [
  {
    title: "Quality first",
    body: "\"The target is always to provide state-of-the-art services to the clients where quality is the first priority.\"",
  },
  {
    title: "People before process",
    body: "\"Quality services demand quality people.\" The line appears on the walls of NRS Royal Palace because it was true before the walls existed.",
  },
  {
    title: "Build places that belong",
    body: "A hotel in a sacred city should belong to the place, not impose on it. Every NRS property starts from respect for where it stands.",
  },
];

export type Milestone = {
  year: string;
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  status?: "now" | "next";
};

export const timeline: Milestone[] = [
  {
    year: "Early years",
    title: "From Ranchi to Kolkata",
    body: "Completes his education in Ranchi, Jharkhand, moves to Kolkata and starts as an employee in a boutique organisation, then ventures into business of his own.",
  },
  {
    year: "2012",
    title: "Shaila Realty Management",
    body: "An early step into real estate management, laying the groundwork for the group's property holdings.",
  },
  {
    year: "2013",
    title: "Bistro-Y Foods",
    body: "The first venture: a food enterprise that would seed everything to come. It taught the craft of hospitality from the ground up: sourcing, service, and the discipline of running a kitchen that never compromises.",
  },
  {
    year: "2014",
    title: "NRS Business Centre Pvt. Ltd.",
    body: "Establishes NRS Business Centre in Kolkata, creating the corporate backbone for a growing portfolio of ventures spanning hospitality, real estate and entertainment.",
  },
  {
    year: "2019",
    title: "Realtiven Construction & Eco Amusement Dam Park",
    body: "Enters construction with Realtiven, bringing the eye for architectural detail that defines the NRS aesthetic, and ventures into leisure with Eco Amusement Dam Park.",
  },
  {
    year: "2020",
    title: "NRS Hospitality, Buono Gusto Foods & NRS Royal Palace",
    body: "Founds NRS Hospitality Pvt. Ltd. and Buono Gusto Foods, then brings to life the crown jewel: NRS Royal Palace in Puri. Four storeys of hand-carved architecture, fifty-two rooms, and a hotel that belongs to the sacred city it stands in.",
    image: "/images/timeline/royal-palace.jpg",
    imageAlt: "NRS Royal Palace, Puri, at dusk",
  },
  {
    year: "2023",
    title: "Verma Holiday Hotel & Resorts",
    body: "Launches a new hospitality brand to carry the NRS philosophy, quality services demand quality people, into new destinations.",
  },
  {
    year: "Now",
    title: "Tarapith tower hotel",
    body: "The group's largest project yet: a tower-style hotel on 20 bighas at Tarapith, Birbhum, on land the family has held for about a decade. Under construction.",
    status: "now",
  },
  {
    year: "Next",
    title: "NRS Royal Classic, Sundarban",
    body: "An eco-luxury resort of rooms and suites in a vast mangrove area of the Sundarban, a few kilometres from Gosaba.",
    status: "next",
  },
];

export type Venture = {
  name: string;
  body: string;
  city?: string;
  year?: number;
  url?: string;
  logo?: string;
};

export const ventureSectors: { title: string; intro: string; ventures: Venture[] }[] = [
  {
    title: "Hospitality",
    intro: "Hotels that belong to the places they stand in.",
    ventures: [
      {
        name: "NRS Royal Palace",
        body: "The flagship: a sea-facing palace hotel with hand-carved arches and gilded domes on Puri's New Marine Drive.",
        city: "Puri, Odisha",
        year: 2020,
        url: "https://nrsroyalpalace.com",
        logo: "/images/logos/nrs-royal-palace.png",
      },
      {
        name: "NRS Hospitality Pvt. Ltd.",
        body: "The hospitality company that operates the group's hotels.",
        city: "Kolkata",
        year: 2020,
      },
      {
        name: "Verma Holiday Hotel & Resorts",
        body: "A hospitality brand carrying the NRS philosophy into new destinations.",
        year: 2023,
      },
      // TODO(client): NRS Norling Retreat (Darjeeling) and NRS Royal Grand (Noida) once confirmed.
    ],
  },
  {
    title: "Food & Dining",
    intro: "Where it all began: kitchens that never compromise.",
    ventures: [
      {
        name: "Bistro Y",
        body: "A wood-panelled restro pub with cocktails, Mughlai and Bengali-inspired food and live music.",
        city: "Salt Lake, Kolkata",
        url: "https://bistrobars.com",
        logo: "/images/logos/bistro-y.png",
      },
      {
        name: "HakkaLand",
        body: "A restaurant and bar serving Chinese, Thai and tandoori food and sizzlers.",
        city: "Madhyamgram, Kolkata",
        url: "https://hakkaland.vercel.app",
        logo: "/images/logos/hakkaland.png",
      },
      { name: "Bistro-Y Foods", body: "His first venture, and the food company behind Bistro Y.", year: 2013 },
      { name: "Buono Gusto Foods", body: "A food company serving the group's restaurants and hotels.", year: 2020 },
    ],
  },
  {
    title: "Real Estate & Construction",
    intro: "Building spaces people live in, work from and escape to.",
    ventures: [
      { name: "Realtiven Construction", body: "The in-house construction arm, now building the Tarapith tower hotel.", year: 2019 },
      { name: "Shaila Realty Management", body: "Real estate management and the group's land holdings.", year: 2012 },
      // TODO(client): Urbanjungle Infracon (registry only) if he wants it shown.
    ],
  },
  {
    title: "Leisure & Entertainment",
    intro: "Places for families and travellers to spend the day.",
    ventures: [{ name: "Eco Amusement Dam Park", body: "The group's leisure and amusement venture.", year: 2019 }],
  },
  {
    title: "Business Services",
    intro: "The corporate backbone of the group.",
    ventures: [
      {
        name: "NRS Business Centre Pvt. Ltd.",
        body: "Business-centre solutions in Salt Lake Sector V, and the company the group grew from.",
        city: "Kolkata",
        year: 2014,
      },
    ],
  },
];

export const currentProjects = [
  {
    name: "NRS Royal Palace",
    place: "New Marine Drive, Puri, Odisha",
    image: "/images/projects/royal-palace.jpg",
    imageAlt: "NRS Royal Palace at dusk",
    facts: ["Sea-facing palace hotel", "52 rooms over four storeys", "Lawn for 200 guests", "Rooftop Terrace restaurant"],
    url: "https://nrsroyalpalace.com",
  },
  {
    name: "Bistro Y",
    place: "Sector V, Salt Lake, Kolkata",
    image: "/images/projects/bistro-y.jpg",
    imageAlt: "Bistro Y bar at NRS Royal Palace, Puri",
    caption: "Pictured: the Bistro Y outlet inside NRS Royal Palace, Puri.",
    facts: ["Restro pub, 12 PM – 12 AM", "Rated 4.6 from 2,751+ reviews", "Live jazz, acoustic and DJ nights"],
    url: "https://bistrobars.com",
  },
  {
    name: "HakkaLand",
    place: "Star Mall, Madhyamgram, Kolkata",
    image: "/images/projects/hakkaland.jpg",
    imageAlt: "HakkaLand dining room",
    facts: ["Chinese, Thai and tandoori", "Sizzlers and a full bar", "4.2★ on District"],
    url: "https://hakkaland.vercel.app",
  },
];

export const upcoming = {
  featured: {
    name: "Tarapith Tower Hotel",
    place: "Tarapith, Birbhum, West Bengal",
    status: "Under construction",
    body: "A landmark tower hotel on 20 bighas in Tarapith, Birbhum, on land the family has held for a decade, now rising. Tarapith is one of Bengal's most visited temple towns, and the hotel is being built by the group's own construction arm, Realtiven Construction.",
    facts: [
      { value: "20", label: "Bighas of land" },
      { value: "≈10 yrs", label: "Land held by the family" },
      { value: "Now", label: "Under construction" },
    ],
    // TODO(client): project name, floors, rooms, expected opening, renders and monthly site photos.
  },
  others: [
    {
      name: "NRS Royal Classic",
      place: "Near Gosaba, Sundarban",
      status: "In planning",
      body: "An eco-luxury resort of rooms and suites in a vast mangrove area of the Sundarban, a few kilometres from Gosaba.",
    },
    {
      name: "Coming soon",
      place: "To be announced",
      status: "Coming soon",
      body: "A new NRS destination. Details will be announced shortly.",
    },
    {
      name: "Coming soon",
      place: "To be announced",
      status: "Coming soon",
      body: "Another project in the pipeline. Register your interest to hear first.",
    },
  ],
};

export const vision = {
  vision:
    "To be accredited as one of the esteemed organizations whose hunger for excellence is proven by the quality of their service.",
  mission:
    "To act collectively as a group so that all the business wings can have maximum benefits from our passionate effort.",
  // TODO(client): his 10-year vision and a 150-word Message from the Chairman (plan §5.7).
};

// Article ideas (plan §5.9). Articles are written from his inputs and published only after approval.
export const insightTopics = [
  "Why I built a palace-style hotel in Puri",
  "Lessons from 12 years of hospitality in eastern India",
  "Tarapith's tourism potential: why we're building there",
  "From one kitchen to a group: what running a restaurant teaches about business",
  "Quality services demand quality people: how we hire",
  "Investing in hospitality in Bengal and Odisha: an investor's guide",
  "Eco-tourism in the Sundarbans, done responsibly",
  "What pilgrims expect from a hotel today",
];

export const gallery = {
  him: [
    { src: "/images/rp-verma-portrait.jpg", alt: "Mr. R. P. Verma, Chairman & Managing Director, NRS Group", w: 900, h: 1125 },
    { src: "/images/rp-verma-lounge.jpg", alt: "Mr. R. P. Verma at NRS Royal Palace", w: 900, h: 1200 },
  ],
  places: [
    { src: "/images/gallery/palace-dusk.jpg", alt: "NRS Royal Palace at dusk" },
    { src: "/images/gallery/palace-night.jpg", alt: "NRS Royal Palace by night" },
    { src: "/images/gallery/lobby.jpg", alt: "The lobby fountain at NRS Royal Palace" },
    { src: "/images/gallery/terrace.jpg", alt: "The rooftop Terrace overlooking the sea" },
    { src: "/images/gallery/pool.jpg", alt: "The pool at NRS Royal Palace" },
    { src: "/images/gallery/wedding.jpg", alt: "A wedding on the lawn at NRS Royal Palace" },
    { src: "/images/gallery/hakkaland.jpg", alt: "HakkaLand, Madhyamgram" },
    { src: "/images/gallery/bistro-y.jpg", alt: "Bistro Y at NRS Royal Palace, Puri" },
  ],
  teams: [
    { src: "/images/gallery/team-entrance.jpg", alt: "The NRS Royal Palace team at the entrance" },
    { src: "/images/gallery/team-chefs.jpg", alt: "The kitchen team" },
    { src: "/images/gallery/team-service.jpg", alt: "The restaurant service team" },
  ],
};

export const enquiryTypes = [
  "Invest in a project",
  "Land / JV partnership",
  "Business idea",
  "Media / interview",
  "Speaking / event invite",
  "Careers",
  "Other",
] as const;

export const nrsGroupUrl = import.meta.env.PUBLIC_NRS_GROUP_URL || "";
export const leadEndpoint = import.meta.env.PUBLIC_LEAD_ENDPOINT || "";
