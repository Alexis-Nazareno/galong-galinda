import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface py-space-xl border-t border-surface-container-high/60">
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl">
        
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center gap-space-sm">
            <img alt="Galóng Galínda Emblem" className="w-8 h-8 rounded-full object-contain" src="/gallery/galong-galinda-logo.png" />
            <span className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight">GALÓNG GALÍNDA</span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Empowering physical education educators, student-athletes, and sports leaders across Central Luzon through kinetic mastery, sports pedagogy, and authentic collegiate community leadership.</p>
        </div>

        <div className="flex flex-col gap-space-md">
          <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Quick Navigation</h4>
          <ul className="flex flex-col gap-space-xs">
            <li className="py-1"><Link to="/" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Home</Link></li>
            <li className="py-1"><Link to="/about" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">About Organization</Link></li>
            <li className="py-1"><Link to="/products" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Products</Link></li>
            <li className="py-1"><Link to="/services" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Services</Link></li>
            <li className="py-1"><Link to="/events" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Events & Documentation</Link></li>
            <li className="py-1"><Link to="/faq" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Frequently Asked Questions</Link></li>
            <li className="py-1"><Link to="/contact" className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors">Contact Campus Office</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-space-md">
          <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Campus & Contact</h4>
          <div className="flex flex-col gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
            <a href="https://www.google.com/maps/search/?api=1&query=City+College+of+Angeles%2C+Arayat+Blvd%2C+Barangay+Pampang%2C+Angeles+City%2C+Pampanga" target="_blank" rel="noopener noreferrer" aria-label="Get directions to City College of Angeles" className="flex items-start gap-space-xs transition-colors hover:text-primary">
              <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">location_on</span>
              <span>Arayat Blvd., Brgy. Pampang, Angeles City, Pampanga</span>
            </a>
            <a href="tel:09563871771" aria-label="Call Galóng Galínda at 0956 387 1771" className="flex items-center gap-space-xs transition-colors hover:text-primary">
              <span className="material-symbols-outlined text-primary text-[18px]">call</span>
              <span>0956 387 1771</span>
            </a>
            <a href="mailto:galonggalinda@gmail.com" aria-label="Email Galóng Galínda at galonggalinda@gmail.com" className="flex items-center gap-space-xs transition-colors hover:text-primary">
              <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
              <span>galonggalinda@gmail.com</span>
            </a>
            <a href="https://www.facebook.com/share/1C6jJJMqRT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors">
              <svg className="w-[18px] h-[18px] fill-current text-primary" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
              <span>Galóng Galínda on Facebook</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-space-md">
          <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Office Hours</h4>
          <div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-xs border border-surface-container-highest/50">
            <div className="flex items-center gap-space-xs text-secondary font-label-md text-label-md">
              <span className="material-symbols-outlined text-[18px]">schedule</span>
              <span>REGULAR SESSIONS</span>
            </div>
            <p className="font-body-md text-body-md font-semibold text-on-surface">Monday – Friday</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">8:00 AM – 5:00 PM PHT</p>
            <p className="font-label-badge text-label-badge text-tertiary pt-space-xs">Field trainings scheduled on weekends.</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin mt-space-xl pt-space-md border-t border-surface-container-highest/60 flex flex-col gap-space-md">
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 font-label-md text-[11px] uppercase tracking-wider text-on-surface-variant">
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          <Link to="/refund" className="hover:text-primary transition-colors">Refund & Return Policy</Link>
          <Link to="/cookies" className="hover:text-primary transition-colors">Cookie Information</Link>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-space-sm text-center md:text-left">
          <p className="font-body-sm text-body-sm text-on-surface-variant">© 2026 Galóng Galínda. All Rights Reserved.</p>
          <div className="inline-flex items-center gap-space-xs text-tertiary font-label-md text-[11px] uppercase tracking-wider">
            <span className="material-symbols-outlined text-[14px]">school</span>
            <span>NOTICE: THIS WEBSITE IS FOR EDUCATIONAL PURPOSES ONLY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}