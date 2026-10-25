# Galóng Galínda Website — End-to-End Documentation & Walkthrough

> Notice shown on the site itself: *"This website is for educational purposes only."*
> It is a school project (EVENT3 subject) for the Galóng Galínda event organization of City College of Angeles (CCA), Angeles City, Pampanga.

---

## Table of Contents

1. [Purpose of the Website](#1-purpose-of-the-website)
2. [Tech Stack](#2-tech-stack)
3. [How to Run and Build](#3-how-to-run-and-build)
4. [Project Structure](#4-project-structure)
5. [How the App Starts (Boot Flow)](#5-how-the-app-starts-boot-flow)
6. [React Concepts Used (Cheat Sheet)](#6-react-concepts-used-cheat-sheet)
7. [Global Features (Every Page)](#7-global-features-every-page)
8. [Page-by-Page Walkthrough](#8-page-by-page-walkthrough)
9. [Reusable Components](#9-reusable-components)
10. [Data Sources (Google Sheets and Hard-coded Data)](#10-data-sources-google-sheets-and-hard-coded-data)
11. [Styling System](#11-styling-system)
12. [Browser Storage Used](#12-browser-storage-used)
13. [How To Update Content](#13-how-to-update-content)
14. [Deployment](#14-deployment)
15. [Known Limitations](#15-known-limitations)
16. [Quick Feature → Code Lookup Table](#16-quick-feature--code-lookup-table)

---

## 1. Purpose of the Website

**Galóng Galínda** ("Patinikang Gâlo, Ipákit Ing Galíng Da") is an event organization made up of Physical Education students. Its core values are **Galing, Karunungan, Pakikiisa, at Pakikisama**.

The website is the organization's **official showcase and portfolio**. It exists to:

| Goal | Where it is done |
|---|---|
| Introduce the organization (vision, mission, pillars, team) | Home, About |
| Showcase what they **sell** (Nutrifit Crackers, ArmFeet Powder) | Products |
| Showcase what they **offer** (Sports Officiating, Event Organizing) | Services |
| Document **upcoming / ongoing / previous events** with photos and videos | Events (Gallery & Events) |
| Let participants share feedback anonymously | Home → Testimonials |
| Let visitors answer common questions on their own | FAQs |
| Let visitors reach the organization (call, email, Facebook, map, inquiry form) | Contact, Footer |
| Provide policy pages | Privacy, Terms, Refund, Cookies |

It is a **Single Page Application (SPA)**: the browser loads one HTML page and React swaps the "page" in and out without reloading.

---

## 2. Tech Stack

| Tool | Version | Role |
|---|---|---|
| **React** | 19 | UI library (components, state, effects) |
| **React Router DOM** | 7 | Page navigation without page reload (`/about`, `/events`, ...) |
| **Vite** | 8 | Dev server and production bundler |
| **Tailwind CSS** | 3 | Utility classes for styling (`flex`, `p-4`, `text-primary`, ...) |
| **PapaParse** | 5 | Reads CSV data from Google Sheets |
| **ESLint** | 10 | Code quality checks |
| **Material Symbols** (Google Fonts) | — | Icons (`<span class="material-symbols-outlined">search</span>`) |
| **Lexend / Space Grotesk** (Google Fonts) | — | Typography |
| **Formspree** (`formspree.io`) | — | Contact form submission (via `fetch`, see Contact page) |
| **Vercel** | — | Hosting (see `vercel.json`) |

---

## 3. How to Run and Build

```bash
npm install        # install dependencies (first time only)
npm run dev        # start dev server (Vite), usually http://localhost:5173
npm run build      # create the production build in /dist
npm run preview    # preview the production build locally
npm run lint       # run ESLint
```

---

## 4. Project Structure

```
Project School/
├─ index.html              ← the single HTML file; has <div id="root"> and loads fonts/icons
├─ package.json            ← dependencies and scripts
├─ vite.config.js          ← Vite + React plugin
├─ tailwind.config.js      ← Tailwind theme; colors map to CSS variables (light/dark mode)
├─ postcss.config.js
├─ eslint.config.js
├─ vercel.json             ← rewrites every URL to "/" so React Router works on refresh
├─ public/                 ← static files served as-is
│   ├─ gallery/            ← all images (events, products, team/, logos, posters)
│   ├─ music/              ← blind-memories.mp3 (background music)
│   └─ videos/             ← galong-galinda-organization.mp4
└─ src/
    ├─ main.jsx            ← entry point: mounts <App/> into #root
    ├─ App.jsx             ← router: maps URLs to pages
    ├─ index.css           ← Tailwind + ALL custom CSS/animations
    ├─ components/         ← reusable pieces
    │   ├─ Layout.jsx          (page shell: header, content, footer, floating buttons)
    │   ├─ Header.jsx          (logo, navigation, search, dark mode)
    │   ├─ Footer.jsx
    │   ├─ SiteSearch.jsx      (search popup)
    │   ├─ ScrollToTop.jsx     (scroll behavior when URL changes)
    │   ├─ BackToTop.jsx       (floating "back to top" button)
    │   ├─ BackgroundMusic.jsx (autoplay music + play/pause button)
    │   ├─ LikeButton.jsx      (heart/like button, saved in localStorage)
    │   ├─ ZoomableImage.jsx   (click image → full-screen lightbox with embers)
    │   ├─ PhotoMarquee.jsx    (auto-scrolling photo strip with confetti)
    │   ├─ ProductImageCarousel.jsx (auto-fading product slideshow)
    │   ├─ PosterSparkleImage.jsx   (click image → fire-drop effect)
    │   └─ useConfetti.jsx     (custom hook for confetti bursts)
    ├─ pages/
    │   ├─ Home.jsx   About.jsx   Services.jsx   Products.jsx
    │   ├─ Events.jsx Faq.jsx     Contact.jsx
    │   └─ Privacy.jsx Terms.jsx  Refund.jsx   Cookies.jsx
    └─ utils/
        └─ networkActivity.js  ← tiny "event bus" that tracks pending network requests
```

---

## 5. How the App Starts (Boot Flow)

```
index.html
  └─ <div id="root"></div>  +  <script src="/src/main.jsx">
        │
        ▼
src/main.jsx
  createRoot(#root).render(<StrictMode><App/></StrictMode>)
        │
        ▼
src/App.jsx
  <BrowserRouter>
     <ScrollToTop />                      ← handles scroll on every URL change
     <Routes>
        <Route path="/" element={<Layout/>}>        ← the shell (header/footer)
            <Route index element={<Home/>}/>        ← "/"
            <Route path="about"    element={<About/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="events"   element={<Events/>}/>
            <Route path="faq"      element={<Faq/>}/>
            <Route path="contact"  element={<Contact/>}/>
            <Route path="privacy" / "terms" / "refund" / "cookies" ...
        </Route>
     </Routes>
  </BrowserRouter>
        │
        ▼
src/components/Layout.jsx
  Header + <main><Outlet/></main> + floating buttons + Footer + NetworkLoader
```

**Key idea:** `Layout` is the parent route. `<Outlet />` is the "hole" where the active page (Home, About, ...) is rendered. That is why the header and footer never reload when you navigate.

`StrictMode` (in `main.jsx`) runs effects twice in development only — that is normal and does not happen in production.

---

## 6. React Concepts Used (Cheat Sheet)

This is the "vocabulary" of the code. Each term is followed by a real example from this project.

| Concept | Meaning | Example in this project |
|---|---|---|
| **Component** | A function that returns UI (JSX) | `export default function Footer() { ... }` |
| **Props** | Inputs passed from parent to child | `<LikeButton label="Love this" icon="favorite" storageKey="testimonial-1" />` |
| **`useState`** | A value the component remembers; changing it re-renders | `const [isDarkMode, setIsDarkMode] = useState(...)` in `Header.jsx` |
| **`useEffect`** | Run code *after* render (timers, listeners, fetching) | Fetching Google Sheet data in `Events.jsx` |
| **`useLayoutEffect`** | Like `useEffect` but runs before the browser paints | Measuring card height in `Home.jsx` |
| **`useRef`** | A box that holds a value/DOM element without re-rendering | `const audioRef = useRef(null)` in `BackgroundMusic.jsx` |
| **`useMemo`** | Cache a computed value | Search result filtering in `SiteSearch.jsx` |
| **`useCallback`** | Cache a function so its identity stays the same | `fireConfetti` in `useConfetti.jsx` |
| **Custom Hook** | Your own `useXyz` function that bundles hooks | `useConfetti()` returns `{ fireConfetti, confettiLayer }` |
| **Conditional rendering** | `{condition && <Thing/>}` or `a ? b : c` | `{isLoading ? <Loading/> : <List/>}` |
| **List rendering** | `.map()` with a `key` | `highlights.map(h => <EventHighlightCard key={h.id} .../>)` |
| **Controlled input** | Input value comes from state | `<textarea value={testimonialComment} onChange=.../>` |
| **Lifting state up** | Parent owns state, child gets it via props | `expandedHighlight` lives in `Home`, cards receive `isExpanded` + `onToggle` |
| **`children`** | Content placed between a component's tags | `<ZoomableImage ...>{role badge}</ZoomableImage>` |
| **Portal** (`createPortal`) | Render something elsewhere in the DOM (here: `document.body`) | Lightbox and confetti overlays |
| **React Router `<Link>`** | Navigate without reloading | `<Link to="/about">` |
| **`useLocation`** | Read the current URL (`pathname`, `search`, `hash`) | Header highlights the active page |
| **`useNavigate`** | Navigate from code | Clicking a search result in `SiteSearch.jsx` |
| **`<Outlet/>`** | Placeholder for the matched child route | `Layout.jsx` |
| **Cleanup function** | `return () => ...` inside `useEffect` to remove listeners/timers | Every `addEventListener` is paired with a `removeEventListener` |

### When is it a prop, state, or ref?

- **Prop** → data a parent *gives* a child. Child cannot change it. (`highlight`, `isExpanded`, `photos`, `images`)
- **State** → data a component *owns and changes*, and the UI must update. (`activeTab`, `isOpen`, `query`)
- **Ref** → data/DOM element that must persist but should **not** trigger a re-render. (`audioRef`, `touchStartX`, `lastBurstRef`)

---

## 7. Global Features (Every Page)

These live in `Layout.jsx` and its children, so they appear on all pages.

### 7.1 Header — `components/Header.jsx`
- **Fixed top bar** with an "Educational purposes only" notice banner.
- **Logo** (animated spinning rings) → links to `/` and scrolls to top.
- **Title + motto** → links to `/about`.
- **Desktop navigation** (`xl` screens): Home, About Us, Products, Services, Gallery & Events, FAQs, Contact Us. The active page is highlighted using `useLocation().pathname` compared with each link (`navClass` helper).
- **Mobile menu** (hamburger) — toggled by `isMobileMenuOpen` state.
- **Search button** → opens `SiteSearch` (state `isSearchOpen`).
- **Dark mode toggle**:
  - `useState` lazy initializer reads `localStorage.theme`, or falls back to the OS preference (`prefers-color-scheme`).
  - `useEffect` adds/removes the `dark` class on `<html>`.
  - Tailwind is set to `darkMode: "class"` so `dark:` utilities and the CSS color variables switch.

### 7.2 Site Search — `components/SiteSearch.jsx`
- A hard-coded `searchItems` array: `{ title, detail, href, terms }`.
- User types → `query` state → `useMemo` filters and scores results:
  - Text is normalized (lowercase, accents removed, punctuation stripped) via `normalizeText`.
  - Plural words are simplified via `normalizeToken` ("events" → "event").
  - Every typed word must exist in the item's searchable text. Title matches score higher.
  - Top 6 results shown.
- Click a result or press Enter → `useNavigate()(href)` and closes. `Esc` closes.
- Result links use hashes such as `/events#section-upcoming` or `/#home-testimonials`, which `ScrollToTop` then scrolls to.

### 7.3 Scroll handling — `components/ScrollToTop.jsx`
Runs whenever `pathname` or `hash` changes.
- **No hash** → smooth scroll to top.
- **With hash** (e.g. `#home-highlights`) → waits (using `requestAnimationFrame`) until the target element exists, the page-transition animation finished and the element's position stopped moving, then `scrollIntoView`. Gives up after 10 seconds. This avoids landing in the wrong place on slow pages.

### 7.4 Page transition — `Layout.jsx`
`<div key={pathname} className="page-transition-enter">` — changing the `key` makes React re-mount the div, which replays a CSS fade/slide-in animation on each route change.

### 7.5 Network loader — `Layout.jsx` + `utils/networkActivity.js`
Shows a spinning logo overlay **only if the network is slow (> 700 ms)**.
- Pages that fetch data call `const finish = trackNetworkActivity();` before the request and `finish()` when done.
- `trackNetworkActivity` increments a counter and fires a `CustomEvent("app:network-activity")` on `window`.
- `NetworkLoader` listens to that event, and after 700 ms with pending requests sets `isNetworkSlow = true`.
- This is a lightweight "event bus" so pages and the loader don't need to know about each other.

### 7.6 Back to top — `components/BackToTop.jsx`
`Layout` listens to `window` `scroll`; when `scrollY > 300` it sets `isBackToTopVisible` and shows the button, which calls `window.scrollTo({ top: 0, behavior: 'smooth' })`.

### 7.7 Background music — `components/BackgroundMusic.jsx`
- A hidden `<audio src="/music/blind-memories.mp3" loop>`; a round button toggles play/pause.
- **Autoplay logic** (`useEffect` on mount):
  1. Try `audio.play()` immediately.
  2. If the browser blocks it (`NotAllowedError`), it attaches one-time listeners for `pointerdown, keydown, touchstart, wheel, scroll`. The first real user interaction starts the music and removes the listeners.
  3. `cancelled` flag + cleanup prevent state updates after unmount.
- `isPlaying` state drives the button's icon animation (`is-playing` CSS class).
- Browsers (Chrome/Safari/Edge) **forbid autoplay with sound without user interaction**, so on some devices music starts on the first tap/scroll rather than instantly.

### 7.8 Footer — `components/Footer.jsx`
- 4 columns: organization blurb, Quick Navigation, **Campus & Contact** (Google Maps link, `tel:` phone link, `mailto:` email link, **Facebook link with name "Galóng Galínda on Facebook"**), Office Hours.
- Bottom bar: Privacy, Terms, Cookies links. **Refund & Return Policy only appears on `/products`** (`pathname === '/products'`).

---

## 8. Page-by-Page Walkthrough

### 8.1 Home — `pages/Home.jsx` (route `/`)

**Purpose:** Landing page that sells the organization in one scroll.

**Sections (top to bottom)**

| # | Section (`id`) | What it shows | Key code |
|---|---|---|---|
| 1 | Hero | "We are the Galóng Galínda Event Organization", motto, **Events Calendar** button (→ `/events#section-upcoming`), **Contact Us** button, spinning emblem. The emblem and the red "Galóng Galínda" text both link to `/about`. | `<Link to="/about">` |
| 2 | `home-purpose` | "What is Galóng Galínda?", Vision/Mission, 4 core pillars | static JSX |
| 3 | `home-highlights` | **Event Highlights** — 3 flip cards: PE Days, Officiating, Volleyball Officiating | `EventHighlightCard`, `highlights` array |
| 4 | `home-offerings` | **Our Offerings** — Officiating Services card + Products frame holding **both products in one frame** (Nutrifit + ArmFeet, with hover preview) | `<Link>` cards, `.offering-product-*` CSS |
| 5 | `home-testimonials` | **What Participants Say** — anonymous reviews with ❤ buttons + a review form | state + `LikeButton` |

**State in `Home`**

| State | Type | Purpose |
|---|---|---|
| `expandedHighlight` | `string \| null` | Which highlight card is flipped (only one at a time). Stores the card `id`. |
| `testimonialRating` | `number` (0–5) | Star rating chosen in the form |
| `testimonialComment` | `string` | Text of the comment (controlled `<textarea>`) |
| `submittedTestimonials` | `array` | New reviews added during this visit |
| `testimonialFormStatus` | `string` | Success/error message under the form |
| `testimonialListRef` | `ref` | The scrolling reviews container (to auto-scroll to new review) |

**Event Highlight flip card (`EventHighlightCard`)**
- **Props:** `highlight` (data), `isExpanded` (boolean), `onToggle` (function).
- The parent passes `onToggle={() => setExpandedHighlight(isExpanded ? null : highlight.id)}` — that is *lifting state up*: the parent decides which card is open.
- Front face: image, category, title, description, "View details". Back face: date, venue, details, optional **photo credit** (`highlight.photoCredit`, e.g. "📸: Jennie Libutano"), up to 4 zoomable photos, and a `Link` (e.g. PE Days → `/events?tab=previous#gallery-event-pe-days`).
- **Flip animation:** CSS class `is-flipped` on `.highlight-card-flipper` (3D `rotateY`, see `index.css`).
- **Dynamic height:** `useLayoutEffect` + `ResizeObserver` measures the visible face (`scrollHeight`) and stores it in `cardHeight`, because a 3D-flipped card would otherwise have the height of the taller face.
- **Accessibility:** the hidden face gets `inert` and `aria-hidden`, so keyboard users can't tab into it. Back face supports Enter/Space.
- **Confetti:** a `useEffect` fires `fireConfetti(sceneRef.current)` whenever the card becomes expanded (skipping the first mount using `hasMountedRef`).

**Testimonials**
- Three built-in reviews (hard-coded JSX), each showing **"Anonymous Participant / Event Participant"** (privacy requirement).
- Each has a `<LikeButton icon="favorite" storageKey="testimonial-N" />` (heart).
- **Form flow (`submitTestimonial`)**:
  1. `preventDefault()`.
  2. Validate: rating chosen? comment not empty? Otherwise set an error status and stop.
  3. Append `{ id, rating, comment }` to `submittedTestimonials` (immutable update with spread).
  4. Reset form and show "Your anonymous review has been added for this visit."
  5. A `useEffect` watching `submittedTestimonials.length` smooth-scrolls the carousel to the end.
- Stars are 5 buttons; `aria-pressed` and the Material Symbol `FILL` variation show filled vs outline.
- **Important:** submitted reviews exist **only in memory** — they disappear on refresh (the UI text says "visible only during this visit"). There is no backend.

---

### 8.2 About — `pages/About.jsx` (route `/about`)

**Purpose:** Explain who Galóng Galínda is.

**Sections**
1. **Hero** (organization intro).
2. **Our Goals** — includes the 4 clickable core-pillar cards (Galing, Karunungan, Pakikiisa, Pakikisama).
3. **Our Experience & Commitment** — the organization's statement of values.
4. **`organizational-video`** — `<video controls>` with poster and source `/videos/galong-galinda-organization.mp4` (search can deep-link here: `/about#organizational-video`).
5. **Our Team** — grouped by department (Event Management, Budget & Finance, Infrastructure & Security, Information & Logistics).
6. **Official Motto & Anthem** — closing quote section.

**State and logic**
| State | Purpose |
|---|---|
| `activePillar` (`number \| null`) | Which pillar card is expanded. `togglePillar(index, element)` also fires confetti when opening. |
| `activeMember` (`string \| null`, e.g. `"0-2"`) | Which team member's panel is open. ID = `groupIndex-memberIndex`. |

- **Data arrays:** `teamGroups` (departments → members: `role`, `name`, `img`) and `teamResponsibilities` (a lookup object: `role → description`). The panel text is `teamResponsibilities[member.role]`.
- **Team card UI:** the photo is wrapped in `ZoomableImage` (click to enlarge); the name/button below toggles the **side panel** (`team-panel`). The panel pushes sideways in the same row (not an overlay), animated in CSS (`.team-grid`, `.team-item`, `.team-card`, `.team-panel`).
- **Close behaviors (`useEffect` with `activeMember` dependency):** click outside (`mousedown` + `closest('[data-team-member=...]')`) or press `Esc`. The effect returns a cleanup that removes both listeners.
- `showTeamSection = true` is a simple on/off flag for the whole team block.

---

### 8.3 Services — `pages/Services.jsx` (route `/services`)

**Purpose:** Show the services the organization provides.

**Sections**
1. **Hero.**
2. **Officiating section (`id="officiating"`)** — deep-link target from the Home offering card.
3. **What We Cover** — two cards built from the constant `COVER_GROUPS`:
   - *Sports Officiating:* Basketball, Volleyball, Swimming, Badminton.
   - *Event Organizing:* PE Days, Culminating Activities, School Events.
   - Each item is `[label, iconName, description]`.
4. **Additional services from Google Sheets** (only shown when data exists).

**State and logic**
| State | Purpose |
|---|---|
| `dynamicServices` | Rows loaded from the Google Sheet |
| `isLoading` | Whether the fetch has finished |
| `activeCover` | Object `{ [groupTitle]: selectedLabel }` — remembers the selected tile per card |

- The selected tile: `activeCover[group.title] ?? group.items[0][0]` (defaults to the first item). Clicking a tile does `setActiveCover(current => ({...current, [group.title]: label}))`.
- `key={selectedLabel}` on the detail box forces a re-mount so the `cover-detail` CSS animation replays on every change.
- **Google Sheets fetch** (`useEffect`, runs once): `Papa.parse(url, { download: true, header: true, skipEmptyLines: true, complete, error })`. Rows without `title` or `imageMain` are filtered out. Row fields: `title`, `description`, `imageMain`, optional `videoEmbed`, `videoLink`.
- Rows alternate left/right layout using `index % 2` (`isEven`). The video box renders **only if** `videoEmbed` has a value.

---

### 8.4 Products — `pages/Products.jsx` (route `/products`)

**Purpose:** Present the two products: **Nutrifit Crackers** (`#nutrifit`) and **ArmFeet Powder** (`#armfeet`).

- Each product is an `<article id="...">` with a **`ProductImageCarousel`** (auto-fading, clickable images) and a **`PromoVideo`** (Facebook Reel in an `<iframe>`), plus a description.
- `PromoVideo({ src, title })` is a small local component that wraps the iframe in a fixed-height frame (`h-64`) with a "Promo Reel" header. The carousel uses the same `h-64` so both boxes are equal.
- `scroll-mt-32` on the articles leaves space for the fixed header when jumping to `#nutrifit` / `#armfeet` (from Home cards or search).
- The **Refund & Return Policy** footer link appears only on this page.
- **Images:** passed to the carousel as an array of `{ src, alt }` objects through the `images` prop.

---

### 8.5 Events (Gallery & Events) — `pages/Events.jsx` (route `/events`)

**Purpose:** The calendar and the photo/video archive. It is the most data-driven page.

**Sections**
1. **Hero.**
2. **Event Teaser** — `<video controls>` with poster for the IBM event.
3. **Events Calendar (`id="section-upcoming"`)** with three tabs: **Upcoming**, **Ongoing**, **Previous**.

**State**
| State | Purpose |
|---|---|
| `activeEventTab` | `"upcoming" \| "ongoing" \| "previous"`. Initialized from the URL `?tab=` param. |
| `activeGalleryCategory` | Category filter for Previous Events. Initialized from `?category=`; default `"all"`. |
| `flippedPhotoCardId` | ID of the one photo card currently flipped (string `eventId-photo-index`). |
| `galleryEvents` | All previous events (starts as the hard-coded `featuredGalleryEvents`, replaced after the fetch). |
| `upcomingEvents` | Rows from the "Upcoming" Google Sheet tab. |
| `isUpcomingLoading`, `isGalleryLoading` | Loading flags |

**URL-driven state (deep links):** `useLocation()` + `new URLSearchParams(location.search)` set the initial tab/category, so a link like
`/events?tab=previous&category=Sports%20Officiating#gallery-event-stedar-sepak-takraw-officiating` opens the right tab and filter, and `ScrollToTop` scrolls to the right card.

**Data loading (`useEffect`, once)** — two `Papa.parse` calls to two published Google Sheet tabs:
1. **Upcoming tab** → rows with `eventTitle` and `eventDate` → `upcomingEvents`.
2. **Events tab** → rows grouped by `eventId` using `reduce` into events with `photos[]` and `videos[]`. Details:
   - Category names are cleaned by `formatEventCategory` (`pedays` → "PE Days", `officiating` → "Sports Officiating", `seminarworkshops` → "Seminars & Workshops").
   - A photo titled "Torch Relay Kickoff" is moved into the Seminar event as "Volleyball Seminar Workshops".
   - For **PE Days**, the title and description are overridden to "PE Days 2026" and extra local photos (`peDaysExtraPhotos`) are added.
   - For the Seminar event, photos are combined in this order: **tarpaulin first** (`seminarTarpaulinPhotos`), the featured photos, the sheet photos, then `seminarExtraPhotos`.
   - Finally `setGalleryEvents([...featured (merged), ...sheetEvents not already featured])`.
   - Each request is wrapped in `trackNetworkActivity()` so the slow-network loader works.

**Computed (derived) values** — recalculated each render, not stored in state:
- `ongoingEvents` = the featured ongoing event + sheet rows whose normalized `status` contains "ongoing"/"inprogress".
- `scheduledEvents` = sheet rows that are *not* ongoing/previous/past/completed.
- `visibleScheduledEvents` = `featuredUpcomingEvent` (IBM Days) + `scheduledEvents`.
- `galleryCategories` = `["all", ...new Set(categories)]`.
- `visibleGalleryEvents` = filter by `activeGalleryCategory`.

**Upcoming / Ongoing cards:** date, time, venue, description, optional "View Details" link (`ctaLink`). The featured ongoing event shows a pulsing red **"Happening Now"** badge next to the **"Ongoing Event"** badge.

**Previous events (gallery):** each event shows category chip, title, description, date, venue, then:
- **Photos** — depends on category:
  - `MARQUEE_CATEGORIES = ["PE Days", "Sports Officiating", "Seminars & Workshops"]` → rendered as an infinite **`PhotoMarquee`** (images only, confetti, click-to-zoom).
  - Any other category → a grid of **flip cards** (front: zoomable image + title + description + ❤ `LikeButton`; back: full description). Only one card can be flipped at a time (`flippedPhotoCardId`); flipping fires confetti. The full text comes from `photoFullDescriptions[photoTitle]` or fallbacks.
- **Videos** — `iframe` if `videoEmbed`, `<video>` if `videoSrc`, otherwise a link button using `videoLink`.

Anchors: PE Days gets `id="gallery-event-pe-days"`; the Seminar event gets `gallery-event-seminars-and-officiating`; the others use `gallery-event-<eventId>`.

---

### 8.6 FAQs — `pages/Faq.jsx` (route `/faq`)

**Purpose:** Self-service answers.
- `faqs` array of `{ id, category, badgeColor, question, answer }` with categories `about`, `products`, `officiating`.
- State: `activeCategory` (`"all"` or a category) and `openFaqId` (accordion — only one open).
- `filteredFaqs = activeCategory === "all" ? faqs : faqs.filter(...)`.
- Category pills `onClick` call `setActiveCategory(...)`; each question button calls `toggleFaq(id)` (`openFaqId === id ? null : id`) and uses `aria-expanded`.

---

### 8.7 Contact — `pages/Contact.jsx` (route `/contact`)

**Purpose:** Let visitors reach the organization.
- Contact cards: **Campus address** (Google Maps link), **phone** (`tel:`), **email** (`mailto:`), **Facebook** (link with name), embedded **Google Maps iframe**.
- **Inquiry form** (`id="inquiry-form"`): `onSubmit={handleSubmit}`.
  - State: `isSubmitting` (disables the button), `submissionStatus` (message).
  - `handleSubmit`: `preventDefault()`, then `fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })`.
  - If `response.ok` → `form.reset()` and a success message; otherwise or on a network error → a Filipino error message. `finally` always re-enables the button.
  - The form's `action` is a Formspree endpoint (`https://formspree.io/f/...`); Formspree receives the message and forwards it to the organization's email. Fields sent: `offering_type` (radio: Sports Officiating / Nutrifit Crackers / ArmFeet Powder / Bulk Package), `name`, `organization`, `email`, `contact_number`, `message`.

---

### 8.8 Policy pages — `Privacy.jsx`, `Terms.jsx`, `Refund.jsx`, `Cookies.jsx`
Static legal/information text (routes `/privacy`, `/terms`, `/refund`, `/cookies`). No state. Linked from the footer.

---

## 9. Reusable Components

### 9.1 `LikeButton` — heart/like with memory
```jsx
<LikeButton label="Love this" icon="favorite" storageKey="testimonial-1" className="mt-4" />
```
| Prop | Meaning |
|---|---|
| `label` | Accessible name (`aria-label`) |
| `icon` | Material icon name. `"favorite"` = heart with a **counter**; anything else (default `thumb_up`) = simple on/off toggle |
| `storageKey` | Unique key; saves the count and liked status in `localStorage` |
| `className` | Extra styling |

- State is one object: `{ count, isLiked }`, created with a **lazy initializer** `useState(() => getInitialState(...))` so `localStorage` is read only once.
- First time a heart is shown, the starting count is a random number from 5–20 and is saved so it stays stable.
- Click → toggles `isLiked`, `count ± 1` (never below 0), writes both values to `localStorage`.
- Keys used: `galong-galinda:heart-count:<storageKey>` and `...:liked`.
- **Limitation:** counts are per-browser (no server), so each visitor sees their own local counter.

### 9.2 `ZoomableImage` — click to enlarge
```jsx
<ZoomableImage src="/gallery/x.jpg" alt="..." wrapperClassName="h-48 w-full" className="object-cover">
   {/* optional children overlayed on the image (e.g., a badge) */}
</ZoomableImage>
```
- Renders a `<button>` containing the `<img>`. Click → `isOpen = true`.
- When open, `createPortal(<overlay/>, document.body)` shows a full-screen lightbox. A portal is needed because parent CSS transforms (flip cards, marquee) would break `position: fixed`.
- Closes by clicking the backdrop, the X button, or pressing `Esc` (listener added only while open; removed in cleanup).
- On open it generates 48 random "ember" particles (`createEmbers`) for the fire/ember effect.
- `event.stopPropagation()` prevents the click from also triggering the parent (e.g., flipping a card).

### 9.3 `useConfetti` — custom hook
```jsx
const { fireConfetti, confettiLayer } = useConfetti();
fireConfetti(someDomElement);   // call to burst
return <div>... {confettiLayer} </div>   // render this once in the component
```
- Returns a function and a ready-made JSX layer (via portal).
- `fireConfetti(el)` reads `el.getBoundingClientRect()`, generates 64 pieces with random color, size, spread and rotation, stores them in `burst` state, and clears them after ~2.6 s (`setTimeout`, tracked in a ref and cleaned on unmount).
- Respects accessibility: skips animation when `prefers-reduced-motion: reduce`.
- Used by: Home flip cards, About pillars, Events photo cards, `PhotoMarquee`.

### 9.4 `PhotoMarquee` — infinite photo strip
```jsx
<PhotoMarquee photos={event.photos} label="PE Days photo" />
```
- Takes `photos` (`[{ imgSrc }]`). Repeats the list until it has at least 6, then **doubles** it (`[...set, ...set]`).
- CSS animates `translateX(0 → -50%)` on a loop (`@keyframes photo-marquee-scroll`, 32 s) — because the content is doubled, the loop looks seamless. Hover pauses it.
- Confetti on mouse hover (with an 1800 ms cooldown stored in `lastBurstRef`) and on click/tap.
- Duplicated items are `aria-hidden` so screen readers don't read them twice.
- Items are portrait-shaped (`20rem × 26rem` desktop, `15rem × 20rem` mobile) with `object-position: top` so heads aren't cropped.

### 9.5 `ProductImageCarousel`
```jsx
<ProductImageCarousel label="Nutrifit" images={[{ src, alt }, ...]} />
```
- State: `activeImage` (index), `isPaused`. Ref: `touchStartX`.
- `useEffect` sets `setInterval` every 4 s to advance (`(current + 1) % length`), cleared on cleanup. It doesn't run if there's only 1 image, if paused, or if reduced-motion is requested.
- All images are stacked (`absolute inset-0`); only the active one has `opacity-100` → a cross-fade with scale/blur transition.
- Pauses on hover/focus. Swipe support: `onTouchStart` / `onTouchEnd` compare the X distance (> 40 px).
- Dot buttons jump to a specific image. Each image is wrapped in `ZoomableImage` for a large view.

### 9.6 `PosterSparkleImage`
An `<img>` that, when clicked, spawns "fire drops" (portal) from its position. Uses a ref to get the position and a `timeout` ref for cleanup. Props are forwarded with `{...imgProps}`.

### 9.7 `BackToTop`, `BackgroundMusic`, `SiteSearch`, `ScrollToTop`, `Header`, `Footer`, `Layout`
Covered in [Section 7](#7-global-features-every-page).

---

## 10. Data Sources (Google Sheets and Hard-coded Data)

The site has **no backend/database**. Content comes from three places:

| Source | Used by | How |
|---|---|---|
| **Google Sheet → published CSV** (3 tabs/URLs) | Events (Upcoming + Events tabs), Services | `PapaParse` fetches the CSV in the browser at page load |
| **Hard-coded arrays in code** | Home highlights, About team, Services "What We Cover", FAQ, Search items, Events featured items | JS constants at the top of files |
| **Static files in `/public`** | Images, music, videos | Referenced by absolute paths like `/gallery/x.jpg` |

**Why Google Sheets?** Non-programmers can add events/services by editing a spreadsheet — **no code change or redeploy** needed.

**Expected sheet columns**
- *Upcoming tab:* `eventTitle`, `eventDate`, `status`, `eventTime`, `venue`, `description`, `ctaLink`, ...
  - `status` decides the tab: contains "ongoing"/"in progress" → Ongoing; "previous"/"past"/"completed" → hidden from Upcoming; anything else → Upcoming.
- *Events tab:* `eventId` (groups rows), `eventTitle`, `eventDesc`, `eventDate`, `eventVenue`, `eventCategory`, `imgSrc`, `photoTitle`, `photoDesc`, plus video columns (`videoSrc`, `videoEmbed`, `videoUrl`/`videoLink`, `videoTitle`, `videoDesc`). One row = one photo or video; rows with the same `eventId` become one event.
- *Services tab:* `title`, `description`, `imageMain`, optional `videoEmbed`, `videoLink`.

---

## 11. Styling System

- **Tailwind utility classes** inside JSX (`className="flex items-center gap-4 rounded-xl"`).
- **Design tokens as CSS variables** in `src/index.css` (e.g. `--color-primary`, `--color-surface-container`). `tailwind.config.js` maps names like `bg-primary`, `text-on-surface` to those variables.
- **Dark mode:** the `.dark` class on `<html>` swaps the variable values, so most components switch automatically. Places with hard-coded colors use `dark:` variants.
- **`src/index.css`** (~1500 lines) holds all custom effects, grouped by feature:
  - flip cards: `.highlight-card-*`, `.event-photo-card-*`
  - transitions: `.page-transition-enter`, `.tab-transition-enter`
  - `.network-loading-overlay`, `.floating-controls`, `.music-control*`, `.back-to-top*`
  - team drawer: `.team-grid`, `.team-item`, `.team-card`, `.team-panel*`
  - lightbox and effects: `.zoomable-image-*`, `.zoomable-ember*`, `.poster-sparkle*`, `.fire-drop`
  - `.photo-marquee*` (infinite photo strip), `.offering-product-*` (home product hover preview), `.cover-tile`, `.cover-detail`
- **Responsive design:** Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`) — e.g., the desktop nav appears at `xl`, the mobile menu below it.
- **Accessibility touches:** `aria-label`, `aria-pressed`, `aria-expanded`, `role="dialog"`, `inert` on hidden flip faces, keyboard handlers (Enter/Space/Esc), and `prefers-reduced-motion` support.

---

## 12. Browser Storage Used

| Key | Where | Content |
|---|---|---|
| `theme` | `Header.jsx` | `"dark"` or `"light"` |
| `galong-galinda:heart-count:<key>` | `LikeButton.jsx` | Heart count |
| `galong-galinda:heart-count:<key>:liked` | `LikeButton.jsx` | `"true"` / `"false"` |

Everything else (submitted testimonials, open cards, active tabs) is in React state and is lost on refresh.

---

## 13. How To Update Content

| I want to... | Do this |
|---|---|
| Add/edit an **upcoming/ongoing** event | Edit the Google Sheet "Upcoming" tab. (Featured ones live in `featuredUpcomingEvent` / `featuredOngoingEvent` at the top of `Events.jsx`.) |
| Add **previous event photos/videos** | Add rows in the Sheet "Events" tab using the same `eventId`. Or add images to `public/gallery/` and list them in `featuredGalleryEvents` / the photo arrays in `Events.jsx`. |
| Add a **marquee photo** to PE Days / Officiating / Seminars | Copy the image to `public/gallery/` and add `{ imgSrc: "/gallery/<file>" }` to that event's `photos` (or the helper arrays `peDaysExtraPhotos`, `seminarExtraPhotos`). |
| Add a **service** | Add a row in the Services Sheet tab, or edit `COVER_GROUPS` in `Services.jsx`. |
| Edit **Home highlights** | Edit the `highlights` array in `Home.jsx` (`title`, `date`, `venue`, `details`, `photos`, `link`, optional `photoCredit`). |
| Add/Edit a **team member** | Add `{ role, name, img }` to `teamGroups` in `About.jsx` and put the photo in `public/gallery/team/`. Add the role description in `teamResponsibilities` if it's a new role. |
| Edit **FAQ** | Add an object to `faqs` in `Faq.jsx` (unique `id`, `category`, `question`, `answer`). |
| Make a page **searchable** | Add an item to `searchItems` in `SiteSearch.jsx` (`title`, `detail`, `href`, `terms` keywords). |
| Change **music** | Replace `public/music/blind-memories.mp3` or change the `src` in `BackgroundMusic.jsx`. |
| Add a **new page** | Create `src/pages/NewPage.jsx`, add `<Route path="newpage" element={<NewPage/>}/>` in `App.jsx`, and add a `<Link>` in `Header.jsx` / `Footer.jsx`. |
| Change **colors** | Edit the CSS variables in `src/index.css` (light and `.dark` values). |

---

## 14. Deployment

- Build with `npm run build` → static files in `dist/`.
- Hosted on **Vercel** (static hosting). `vercel.json` rewrites every path to `/` so refreshing on `/events` doesn't return a 404 (React Router handles the route on the client).
- Because the Google Sheet is read from the visitor's browser, the sheet must stay **published to the web** as CSV.

---

## 15. Known Limitations

- **No backend:** testimonials aren't saved after refresh; like counts are per-browser only.
- **Autoplay** with sound is restricted by browsers; music may need the first tap/scroll.
- Content depends on the **published Google Sheet** being online; if it fails, the featured (hard-coded) content still shows and an error is logged to the console.
- Facebook Reels on the Products page are embedded iframes; they depend on Facebook being reachable.
- The Home testimonials (3 starter reviews) are hard-coded.
- Landscape photos are center-cropped in the portrait-shaped marquee (the full photo is visible in the zoom lightbox).

---

## 16. Quick Feature → Code Lookup Table

| Feature | File | Mechanism |
|---|---|---|
| Page routing | `App.jsx` | `BrowserRouter`, `Routes`, `Route`, `Layout` + `Outlet` |
| Header active link | `Header.jsx` | `useLocation` + `navClass()` |
| Dark mode | `Header.jsx`, `index.css` | `useState` + `useEffect` + `localStorage` + `.dark` class |
| Site search | `SiteSearch.jsx` | `useState` (query) + `useMemo` (results) + `useNavigate` |
| Scroll to section / top | `ScrollToTop.jsx` | `useEffect` + `requestAnimationFrame` + `hash` |
| Slow-network loader | `Layout.jsx`, `networkActivity.js` | Custom event on `window` + `useLayoutEffect` |
| Back-to-top button | `Layout.jsx`, `BackToTop.jsx` | scroll listener + prop `isVisible` |
| Background music | `BackgroundMusic.jsx` | `useRef` (audio) + `useEffect` autoplay fallback |
| Flip cards (Home) | `Home.jsx` | `useState` in parent + props (`isExpanded`, `onToggle`) + CSS 3D |
| Card height auto-fit | `Home.jsx` | `useLayoutEffect` + `ResizeObserver` |
| Anonymous testimonials | `Home.jsx` | Controlled form + `useState` array |
| Heart/Like button | `LikeButton.jsx` | Props + `useState` (lazy init) + `localStorage` |
| Confetti | `useConfetti.jsx` | Custom hook + `useCallback` + portal |
| Image lightbox | `ZoomableImage.jsx` | `useState` + `createPortal` + `Esc` listener |
| Infinite photo marquee | `PhotoMarquee.jsx`, `index.css` | Doubled list + CSS keyframes |
| Product slideshow | `ProductImageCarousel.jsx` | `useState` + `setInterval` + touch handlers |
| Events tabs and filters | `Events.jsx` | `useState` + URL params (`useLocation`) |
| Event data from Google Sheets | `Events.jsx`, `Services.jsx` | `PapaParse` in `useEffect` |
| Event grouping | `Events.jsx` | `Array.reduce` by `eventId` |
| Photo flip cards (Events) | `Events.jsx` | `flippedPhotoCardId` state + CSS 3D |
| Team side panel | `About.jsx`, `index.css` | `activeMember` state + outside-click `useEffect` |
| Services tile selector | `Services.jsx` | `activeCover` object state |
| FAQ accordion + filter | `Faq.jsx` | `openFaqId` and `activeCategory` state |
| Contact form submit | `Contact.jsx` | `fetch` + `FormData` + `isSubmitting` state |
| Footer Facebook link | `Footer.jsx`, `Contact.jsx` | Plain `<a target="_blank" rel="noopener noreferrer">` |
