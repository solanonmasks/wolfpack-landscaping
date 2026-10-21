// ---------------------------------------------------------------------------
// SITE SETTINGS — this is the ONE file to edit for business details.
//
// - Phone, email, address, service areas: change them below and every page updates.
// - formEndpoint: where the quote form sends. See the comment next to it.
// - Images: every photo URL lives in `images` / `gallery` below. They currently
//   point at the old website. To use local copies, save the files into
//   /public/images and change each URL to "/images/<file-name>".
// ---------------------------------------------------------------------------

// Base folder of the current website's images (used to build the URLs below).
const S = 'https://www.wolfpacklandscaping.com/static/';
const G = (n) => `${S}gallery/g${n}.jpg`;

export const site = {
  name: 'Vancouver Wolfpack Landscaping Ltd.',
  shortName: 'Wolfpack',
  url: 'https://www.wolfpacklandscaping.com',
  contactName: 'Mike',

  // How the number is shown on screen, and the version used in tel: links.
  phone: '778-919-7181',
  phoneHref: 'tel:17789197181',
  phoneE164: '+1-778-919-7181',

  email: 'vancouverwolfpacklandscapingltd@hotmail.com',
  facebook: 'https://www.facebook.com/jss.wolfpack.5',

  // Used in the LocalBusiness data for Google.
  address: { city: 'Langley', region: 'BC', country: 'CA' },

  // "Where we work" list on the home page.
  serviceAreas: [
    'Langley', 'Surrey', 'Abbotsford', 'Delta', 'White Rock',
    'Maple Ridge', 'Burnaby', 'Coquitlam', 'Vancouver',
  ],

  // City options in the quote form drop-down.
  formCities: ['Langley', 'Surrey', 'Abbotsford', 'Delta', 'Burnaby', 'Vancouver', 'Other'],

  // QUOTE FORM: create a free form at https://formspree.io, then copy the
  // form's endpoint (looks like https://formspree.io/f/abcdwxyz) here.
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
};

// Single photos used around the site.
export const images = {
  logo: `${S}logo-2-min-cropped.webp`,
  hero: `${S}large_srcset/img-2_900.webp`,
  stairs: `${S}large/img-4-1.jpg`,
  pergola: `${S}large_srcset/img-11_900.webp`,
  patio: `${S}large/img-9-1.jpg`,
  lawn: `${S}large/img-10-1.jpg`,
  cta: `${S}large/img-12.jpg`,
  g: G, // g(4) -> gallery photo number 4
};

// The 24 photos on the Gallery page, in order.
export const gallery = [7, 4, 8, 15, 2, 3, 6, 10, 5, 11, 21, 12, 1, 13, 22, 16, 20, 14, 19, 23, 24, 17, 18, 25].map(G);

// The 6 tiles on the home page ("If you want it, we'll build it").
export const services = [
  { num: '01', title: 'Retaining walls', img: G(4), desc: 'Block and stone walls with drain tile behind them.' },
  { num: '02', title: 'Paving stones', img: G(8), desc: 'Patios, walkways and interlock driveways on a compacted base.' },
  { num: '03', title: 'Driveways', img: G(15), desc: 'Concrete driveway renos, forming and pumping.' },
  { num: '04', title: 'Fencing', img: G(2), desc: 'Cedar fencing, aluminium railings and gates.' },
  { num: '05', title: 'Patios & pergolas', img: images.pergola, desc: 'Decks, awnings and pergolas for the back of the house.' },
  { num: '06', title: 'Lawn & hedges', img: images.lawn, desc: 'Maintenance, hedging, trimming and tree removal.' },
];

// The 4 groups on the Services page.
export const groups = [
  { num: '01', title: 'Dig it', img: G(6), desc: 'The groundwork nobody sees but everything depends on.', items: ['Mini excavation', 'Large excavation', 'Drain tile', 'Window wells', 'Concrete pump'] },
  { num: '02', title: 'Build it', img: G(4), desc: 'Walls, hardscapes and driveways built on a proper base.', items: ['Retaining walls', 'Hardscaping', 'Paving stones', 'Forming and interlock driveways', 'Concrete driveway renos'] },
  { num: '03', title: 'Finish it', img: images.pergola, desc: 'The parts of the yard you actually use.', items: ['Patios and decks', 'Awnings and pergolas', 'Cedar fencing', 'Aluminium railings'] },
  { num: '04', title: 'Keep it', img: images.lawn, desc: 'Regular care so it stays looking like the day we finished.', items: ['Lawn maintenance', 'Hedging and trimming', 'Tree removal', 'Power washing', 'Gutter cleaning'] },
];

// Main menu (header + mobile menu).
export const nav = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
