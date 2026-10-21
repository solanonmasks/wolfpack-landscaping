# Vancouver Wolfpack Landscaping website

The website for Vancouver Wolfpack Landscaping Ltd. (Langley / Surrey landscaping and hardscaping).
It's built with [Astro](https://astro.build) and makes plain static HTML, so it's fast and cheap to host.

Pages: `/` (Home), `/services`, `/gallery`, `/about`, `/contact`.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install      # first time only
npm run dev      # opens a live preview at http://localhost:4321
```

## Build it

```bash
npm run build    # creates the finished site in the dist/ folder
npm run preview  # look at the built site locally
```

## Put it online (Vercel)

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import the repo.
3. Framework preset: **Astro**. No other settings needed. Click **Deploy**.

## Where to change things

| What | Where |
| --- | --- |
| Phone, email, Facebook, service areas, form cities | `src/data/site.js` |
| Quote form destination (Formspree) | `formEndpoint` in `src/data/site.js` |
| Every image URL | `images`, `gallery`, `services`, `groups` in `src/data/site.js` |
| Header, menu, footer, bottom "Call / Quote" bar, page `<head>` | `src/layouts/Base.astro` |
| Page text | `src/pages/*.astro` (one file per page) |
| Scroll / image animations | `public/motion.js` |

### Using local images instead of the old website's
Right now photos load straight from wolfpacklandscaping.com. To host them yourself:
1. Download each image into `public/images/` (e.g. `public/images/g4.jpg`).
2. In `src/data/site.js`, change the URLs to `/images/<file-name>` (for the gallery,
   change the `G` helper at the top to `` (n) => `/images/g${n}.jpg` ``).

## To-do before launch

- [ ] Create a free form at [formspree.io](https://formspree.io) and paste its endpoint into `formEndpoint` in `src/data/site.js` (until then the form shows an error message).
- [ ] Download the images into `public/images/` (see above) so the site doesn't depend on the old site.
- [ ] Check with Mike that these are correct: phone 778-919-7181, the hotmail email, the Facebook link,
      "40+ years", "since 2008", "24-hour callback, guaranteed", the service-area list, the Hockey North America
      sponsorship, and the two reviews (Amy Sidhu, Simran Kaur).
- [ ] Consider a professional email address on the company domain (suggested in the design handoff).
- [ ] Update `site` in `astro.config.mjs` if the domain changes.

## Reference
`docs/` holds the original design handoff notes and the HTML prototype, for reference only.
