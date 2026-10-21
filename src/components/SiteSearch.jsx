import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const searchItems = [
  { title: 'Home', detail: 'Galóng Galínda event organization and overview', href: '/', terms: 'home main page organization galing karunungan pakikiisa pakikisama' },
  { title: 'About Us', detail: 'Organization background, goals, core pillars, and team', href: '/about', terms: 'about organization goals galing karunungan pakikiisa pakikisama team members responsibilities' },
  { title: 'Our Goals', detail: 'Physical education, teamwork, leadership, and wellness goals', href: '/about', terms: 'goal objectives fitness health wellness students' },
  { title: 'Core Pillars', detail: 'Galing, Karunungan, Pakikiisa, and Pakikisama', href: '/about', terms: 'core pillars values foundation' },
  { title: 'Team and Responsibilities', detail: 'Event management, coordination, finance, security, information, and logistics', href: '/about', terms: 'team roles event manager assistant manager coordinator budget infrastructure security information logistics' },
  { title: 'Products', detail: 'Browse product details, images, and promotional videos', href: '/products', terms: 'products shop item' },
  { title: 'Nutrifit Crackers', detail: 'Product details, photos, and promotional reel', href: '/products#nutrifit', terms: 'nutrifit crackers snack whole grain nutrition' },
  { title: 'ArmFeet Powder', detail: 'Underarm and foot care product details, photos, and reel', href: '/products#armfeet', terms: 'armfeet powder deodorant underarm feet personal care' },
  { title: 'Services', detail: 'Sports officiating and event organizing services', href: '/services', terms: 'services offerings' },
  { title: 'Sports Officiating', detail: 'Basketball, volleyball, swimming, and badminton', href: '/services#officiating', terms: 'officiating referee sports basketball volleyball swimming badminton' },
  { title: 'Event Organizing', detail: 'PE Days, culminating activities, and school events', href: '/services#officiating', terms: 'organizing event pe days culminating school' },
  { title: 'Upcoming Events', detail: 'See upcoming activities in the event calendar', href: '/events#section-upcoming', terms: 'upcoming calendar schedule' },
  { title: 'IBM Days 2026: MANAWARI', detail: 'October 28–30, 2026 at City College of Angeles', href: '/events#section-upcoming', terms: 'special event institute business management oct october 28 29 30 2026 manawari cup joe adie band summers' },
  { title: 'Ongoing Events', detail: 'See activities currently in progress', href: '/events#section-upcoming', terms: 'ongoing in progress now' },
  { title: 'Previous Events and Gallery', detail: 'Browse event photos, videos, and categories', href: '/events#section-upcoming', terms: 'previous past gallery archive photos videos documentation' },
  { title: 'PE Days Highlights', detail: 'Photos and information about PE Days activities', href: '/events#section-upcoming', terms: 'pe days festival campus activities highlights' },
  { title: 'Seminar Workshops', detail: 'Seminars, workshops, and volleyball officiating', href: '/events#section-upcoming', terms: 'seminar workshop volleyball officiating training clinic' },
  { title: 'FAQs', detail: 'Frequently asked questions about the organization, products, and services', href: '/faq', terms: 'faq question answers help' },
  { title: 'Contact Us', detail: 'Contact the event manager by phone, email, or campus office', href: '/contact', terms: 'contact us event manager phone email inquiry request' },
  { title: 'Campus Office', detail: 'Arayat Blvd., Barangay Pampang, Angeles City, Pampanga', href: '/contact', terms: 'campus office address location visit directions map hours' },
  { title: 'Call the Event Manager', detail: '0956 387 1771', href: '/contact', terms: 'call hotline contact number phone 09563871771' },
  { title: 'Email Galóng Galínda', detail: 'galonggalinda@gmail.com', href: '/contact', terms: 'email mail galonggalinda@gmail.com' },
  { title: 'Follow on Facebook', detail: 'Visit the Galóng Galínda Facebook page', href: '/contact', terms: 'facebook follow social media' }
];

function normalizeText(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

export default function SiteSearch({ onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const results = useMemo(() => {
    const terms = normalizeText(query.trim()).split(/\s+/).filter(Boolean);
    if (terms.length === 0) return [];

    return searchItems
      .map((item) => {
        const searchableText = normalizeText(`${item.title} ${item.detail} ${item.terms}`);
        const score = terms.reduce((total, term) => total + (searchableText.includes(term) ? 1 : 0), 0);
        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title))
      .slice(0, 8);
  }, [query]);

  const openResult = (href) => {
    navigate(href);
    onClose();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (results[0]) openResult(results[0].href);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/40 px-4 pt-28 backdrop-blur-[2px]" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <section className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-surface-container-high bg-surface-container-lowest shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="site-search-title">
        <h2 id="site-search-title" className="sr-only">Search the website</h2>
        <form onSubmit={handleSubmit} className="flex items-center gap-3 border-b border-surface-container-high px-4">
          <span className="material-symbols-outlined text-primary" aria-hidden="true">search</span>
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages, events, products..."
            aria-label="Search all website content"
            aria-controls="site-search-results"
            className="min-w-0 flex-1 bg-transparent py-4 text-base text-on-surface outline-none placeholder:text-on-surface-variant"
          />
          <button type="button" onClick={onClose} className="flex h-8 w-8 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container hover:text-on-surface" aria-label="Close search">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">close</span>
          </button>
        </form>
        <div id="site-search-results" className="max-h-[65vh] overflow-y-auto p-2" role="list">
          {query.trim() && results.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-on-surface-variant">No matching pages or sections found.</p>
          )}
          {!query.trim() && (
            <p className="px-4 py-6 text-sm text-on-surface-variant">Search for events, products, services, FAQs, or contact information.</p>
          )}
          {results.map((result) => (
            <button
              key={`${result.href}-${result.title}`}
              type="button"
              role="listitem"
              onClick={() => openResult(result.href)}
              className="flex w-full items-start gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-surface-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary" aria-hidden="true">arrow_outward</span>
              <span>
                <span className="block font-semibold text-on-surface">{result.title}</span>
                <span className="mt-0.5 block text-sm text-on-surface-variant">{result.detail}</span>
              </span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
