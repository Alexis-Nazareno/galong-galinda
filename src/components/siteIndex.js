// Builds a search index automatically from the page source files, so new
// headings, paragraphs, and FAQ text become searchable without manual entries.
const pageSources = import.meta.glob('../pages/*.jsx', { query: '?raw', import: 'default', eager: true });

const routes = {
  Home: { href: '/', label: 'Home' },
  About: { href: '/about', label: 'About Us' },
  Services: { href: '/services', label: 'Services' },
  Products: { href: '/products', label: 'Products' },
  Events: { href: '/events', label: 'Gallery & Events' },
  Faq: { href: '/faq', label: 'FAQs' },
  Contact: { href: '/contact', label: 'Contact Us' },
  Privacy: { href: '/privacy', label: 'Privacy Policy' },
  Terms: { href: '/terms', label: 'Terms' },
  Refund: { href: '/refund', label: 'Refund & Return Policy' },
  Cookies: { href: '/cookies', label: 'Cookie Information' },
};

const ignoredIds = new Set(['testimonial-comment']);
const clean = (value) => value.replace(/\s+/g, ' ').replace(/&amp;/g, '&').replace(/&apos;|&rsquo;/g, "'").trim();
const looksLikeText = (value) =>
  /^[A-Z0-9"'“]/.test(value) && value.includes(' ') && !/[{}[\]=<>]|=>|\bclassName\b|\bpx\b/.test(value) && /[a-z]{3}/.test(value);

// Turns heading JSX like `Get in <br /> {"Touch"}` into plain text
const headingFromJsx = (inner) =>
  inner
    .replace(/\{\s*(["'`])(.*?)\1\s*\}/g, ' $2 ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/<[^>]*>/g, ' ');

function buildIndex() {
  const items = [];

  Object.entries(pageSources).forEach(([path, source]) => {
    const name = path.split('/').pop().replace('.jsx', '');
    const route = routes[name];
    if (!route) return;

    const tokenPattern =
      /\bid=["']([\w-]+)["']|\b(?:title|question|heading)\s*:\s*(["'`])((?:(?!\2)[^\n\\]){3,200})\2|<(h[1-6])\b[^>]*>([\s\S]*?)<\/\4>|>([^<>{}]{15,400})(?=<)|(["'`])((?:(?!\7)[^\n\\]){15,400})\7/g;
    let currentId = '';
    let currentHeading = route.label;
    let currentSection = null;
    const sections = new Map();
    let match;

    while ((match = tokenPattern.exec(source))) {
      const [, id, , keyText, , tagInner, nodeText, , stringText] = match;
      if (id) {
        if (!ignoredIds.has(id) && !id.startsWith('site-search')) currentId = id;
        continue;
      }
      const href = `${route.href}${currentId ? `#${currentId}` : ''}`;
      const headingText = keyText || (tagInner !== undefined ? headingFromJsx(tagInner) : '');

      if (keyText || tagInner !== undefined) {
        const title = clean(headingText).replace(/^\d+\.\s*/, '').replace(/^[a-z]+(?:_[a-z]+)+\s+/, '');
        if (!title || title.length < 3) continue;
        currentHeading = title;
        const key = `${href}|${title}`;
        if (!sections.has(key)) {
          const section = { title, detail: '', href, terms: '', page: route.label };
          sections.set(key, section);
          items.push(section);
        }
        currentSection = sections.get(key);
        continue;
      }

      const text = clean(nodeText || stringText || '');
      if (!looksLikeText(text)) continue;
      if (!currentSection) {
        const key = `${href}|${currentHeading}`;
        if (!sections.has(key)) {
          const section = { title: currentHeading, detail: '', href, terms: '', page: route.label };
          sections.set(key, section);
          items.push(section);
        }
        currentSection = sections.get(key);
      }
      if (currentSection.terms.includes(text)) continue;
      if (!currentSection.detail) currentSection.detail = text.length > 110 ? `${text.slice(0, 107)}...` : text;
      currentSection.terms += ` ${text}`;
    }
  });

  return items.map((item) => ({ ...item, detail: item.detail || `${item.page} page` }));
}

export const autoSearchItems = buildIndex();
