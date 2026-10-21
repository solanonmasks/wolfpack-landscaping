# Handoff: Vancouver Wolfpack Landscaping

## Overview
A rebuild of wolfpacklandscaping.com for a Langley/Surrey landscaping and hardscaping company: 40+ years in the trade, in the Lower Mainland since 2008. The contact is Mike, who promises a 24-hour callback. The goal is quote requests and calls. The direction is **bold and rugged**: near-black, lawn green, and tall condensed uppercase type.

## About the design files
The files here are **design references built in HTML**: working prototypes that show the intended look, copy and behaviour. They are not production code to copy directly. Rebuild the site in a real stack. If there's no existing codebase, use **Astro or Next.js (static export) + Tailwind**, deployed on Vercel.

- `Wolfpack Landscaping.dc.html`: source prototype. Open `preview.html` to click through it; it's self-contained. All pages live in one file and switch with JS state. **Build them as real routes.**
- `motion.js`: reference for the scroll-reveal and image-zoom behaviour.
- `support.js`: prototype runtime only. **Do not ship.**

## Fidelity
**High fidelity.** Colours, type, spacing, copy and imagery are final. Match them closely. All exact values are inline in the prototype markup.

## Global requirements
- Mobile-first and responsive. Content max-width is 1440px, with side padding of clamp(20px,4vw,56px).
- Below 1140px, nav collapses to a Menu button with a full-width overlay, and a **sticky bottom bar** appears with two equal buttons (Call / Quote).
- The phone number is in the header on every page and is always a `tel:` link.
- Images use `object-fit: cover` in aspect-ratio boxes and are lazy-loaded. The prototype hot-links images from the client's current site; **download them into `/public/images`**.
- The quote form needs a real handler (Formspree, Resend, or a Vercel function emailing the client). Show the inline thank-you state on success.
- Add per-page title and meta description, Open Graph tags, and LocalBusiness JSON-LD (name, phone, address, area served).

## Motion
- Reveal on scroll: elements go from opacity 0 / translateY(28px) to visible over .9–1s, easing cubic-bezier(.2,.7,.2,1), with a 90ms sibling stagger (max 5).
- A full-bleed hero image eases from scale(1.08) to 1 over 2.8s on load.
- Hover on an image inside an overflow-hidden card scales it to 1.045 over 1.1s.
- Respect `prefers-reduced-motion`.

## Pages / routes
- `/` **Home**:
  - Full-height hero photo with a bottom gradient and a huge headline, “QUALITY YOU CAN TRUST.”
  - Green stats strip: 40+ yrs, 24 hr callback, Since 2008, Res + Com.
  - “If you want it, we’ll build it”: 6 numbered service photo tiles.
  - Light-stone “Straight talk. Fair price.” section with 3 steps beside a photo.
  - Masonry “Recent jobs” grid.
  - 2 real reviews (Amy Sidhu, Simran Kaur).
  - Service area, a CTA over a background photo, and the footer.
- `/services`: 4 groups (Dig it / Build it / Finish it / Keep it), each with a photo and outlined service tags.
- `/gallery`: 24-image square grid.
- `/about`: 40-year story and the Vancouver Wolfpack hockey sponsorship section on green.
- `/contact`: form (name, phone, email, city, need, details) with a panel showing the phone number large, the email and the service area.

## Design tokens
- Background #111311, raised #1B1E1A, footer #0A0B0A.
- Green #8DB33A (CTA), light green #A9CC5A, dark green #4E7420 (on light sections). Stone #ECE8DF.
- Fonts: **Big Shoulders Display** 800–900, uppercase, for headlines (H1 up to 220px, line-height .82); **Barlow** 400–700 for body (18px).
- Buttons are square-cornered and uppercase in Big Shoulders 900 at 24px.

## Contact
Mike: 778-919-7181 · vancouverwolfpacklandscapingltd@hotmail.com · Facebook /jss.wolfpack.5

## Assets
Images are hot-linked from wolfpacklandscaping.com/static/* (logo, large/, large_srcset/, gallery/g1–g36.jpg). Suggest the client get a professional email domain.

## Files
- README.md
- Wolfpack Landscaping.dc.html (prototype source)
- preview.html (self-contained clickable preview)
- motion.js (animation reference)
- support.js (prototype runtime only)
