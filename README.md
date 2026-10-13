# R. P. Verma: official website

Personal-brand website for **Mr. Ravinandan Prasad (R. P.) Verma**, Founder, Chairman & Managing Director of NRS Group.
A static site built with [Astro](https://astro.build), made to be uploaded to **Hostinger** shared hosting.

## Pages

| Page | URL |
|---|---|
| Home: portrait hero, key numbers, ventures, flagship, journey, Tarapith | `/` |
| About: full biography, profile facts, values, companies founded | `/about/` |
| Journey: timeline that draws itself on scroll | `/journey/` |
| Ventures: every company and brand, grouped by sector | `/ventures/` |
| Current projects: Royal Palace, Bistro Y, HakkaLand | `/projects/` |
| Upcoming projects: Tarapith, Sundarban, Coming Soon | `/upcoming/` |
| Vision & mission | `/vision/` |
| Media & recognition: press kit, ratings, coverage | `/media/` |
| Gallery: portraits, properties, teams | `/gallery/` |
| Insights: article list (articles published after his approval) | `/insights/` |
| Partner / invest: enquiry form | `/partner/` |
| Contact: office, form, map | `/contact/` |

**All copy and facts live in `src/data/site.ts`.** Items still needed from the client are marked `TODO(client)`;
copy we wrote that he must approve is marked `draft`. Unconfirmed facts are not shown.

## SEO built in

- Title and description on every page, canonical URLs, Open Graph / Twitter cards with his portrait.
- `Person` (name, alternate names, job title, companies founded, `sameAs`), `Organization` and `WebSite` JSON-LD.
- `sitemap-index.xml` and `robots.txt` generated at build time from `SITE_URL`.
- One H1 per page, descriptive alt text, compressed images, no client-side framework (fast mobile score).

## Enquiry form → NRS lead list

The partner form posts to the NRS Group website's `POST /api/leads`, tagged **"R. P. Verma website"**, so every lead
appears in the same `/admin` list and notification email as the NRS site.

1. On the NRS Group site (Vercel), set `LEAD_ALLOWED_ORIGINS` to this site's URL, e.g. `https://rpverma.in,https://www.rpverma.in`.
2. Build this site with `PUBLIC_LEAD_ENDPOINT=https://<nrs-group-site>/api/leads`.

If `PUBLIC_LEAD_ENDPOINT` is not set, the form opens the visitor's email app with the enquiry filled in instead.

## Build and deploy to Hostinger

```bash
npm install
cp .env.example .env        # set SITE_URL, PUBLIC_LEAD_ENDPOINT, PUBLIC_NRS_GROUP_URL
npm run build               # output in dist/
```

Upload **the contents of `dist/`** (including the hidden `.htaccess`) to `public_html` in Hostinger's File Manager,
or zip `dist/` and extract it there. `.htaccess` forces HTTPS, serves the custom 404 page and sets caching.

Local preview: `npm run dev` → http://localhost:4321

## Still needed from the client

Final domain · preferred spelling of his name · professional photoshoot · hometown, education and early career ·
10-year vision and a Message from the Chairman · Tarapith renders, room count and opening date · confirmation of the
Darjeeling and Noida hotels · personal LinkedIn / Instagram · which email receives leads · whether +91 70444 70888 is on WhatsApp.
