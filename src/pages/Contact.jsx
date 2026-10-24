import { useState } from 'react';

export default function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmissionStatus('');
    setIsSubmitting(true);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) {
        setSubmissionStatus('Hindi naipadala ang request. Pakisubukan muli.');
        return;
      }

      form.reset();
      setSubmissionStatus('Naipadala na ang request. Maraming salamat sa pag-contact sa amin!');
    } catch (error) {
      console.error('Error submitting contact request:', error);
      setSubmissionStatus('Nagkaroon ng problema sa pagpapadala. Pakisuri ang iyong koneksyon at subukan muli.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <div className="flex flex-col w-full">
        
        <section className="relative w-full bg-surface-container-lowest overflow-hidden py-16 lg:py-24 border-b border-surface-container-high/50">
          {/* Atmospheric Dual-Energy Glows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse"></div>
          <div className="absolute top-20 right-0 w-[30rem] h-[30rem] rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl flex flex-col gap-3">
              <h1 className="font-display-hero text-4xl lg:text-[64px] lg:leading-[72px] text-on-surface font-bold tracking-tight">
                Get in Touch with <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-primary animate-gradient-x drop-shadow-sm">
                  Galóng Galínda
                </span>
              </h1>
              <p className="font-body-lg text-lg text-on-surface-variant leading-relaxed mt-2">
                Have an inquiry, want to partner with us, or interested in booking our services? Our student coordinator desk is ready to connect with you.
              </p>
            </div>
          </div>
        </section>

        {/* UNIFIED INQUIRY FORM & CONTACT INFO */}
        <section className="w-full py-12 lg:py-16 bg-surface-container-low" id="inquiry-form">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Left side: Contact Info & Map */}
              <div className="lg:col-span-5 flex flex-col gap-8">
                
                {/* Contact Cards */}
                <div className="flex flex-col gap-4">
                  <h2 className="font-headline text-xl font-bold text-on-surface">Visit Us</h2>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=City+College+of+Angeles%2C+Arayat+Blvd%2C+Barangay+Pampang%2C+Angeles+City%2C+Pampanga"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get directions to the Campus Office in Google Maps"
                    className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-high/50 transition-colors hover:border-primary/50"
                  >
                    <span className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center material-symbols-outlined shrink-0">location_on</span>
                    <div>
                      <span className="font-label-badge text-[10px] text-on-surface-variant uppercase block mb-0.5">Campus Office</span>
                      <p className="font-body text-sm font-semibold text-on-surface">Arayat Blvd., Barangay Pampang, Angeles City, Pampanga, Philippines</p>
                      <p className="mt-1 font-body text-xs text-on-surface-variant">Monday to Friday: 8:00 AM–5:00 PM PHT</p>
                    </div>
                  </a>
                  <h2 className="mt-3 font-headline text-xl font-bold text-on-surface">Contact Us</h2>
                  <a
                    href="tel:09563871771"
                    aria-label="Call Event Manager Angela E. Ellegue at 0956 387 1771"
                    className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-high/50 transition-colors hover:border-secondary/50"
                  >
                    <span className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center material-symbols-outlined shrink-0">call</span>
                    <div>
                      <span className="font-label-badge text-[10px] text-on-surface-variant uppercase block mb-0.5">Event Manager</span>
                      <p className="font-body text-sm font-semibold text-on-surface">Angela E. Ellegue</p>
                      <p className="mt-1 font-body text-sm font-semibold text-on-surface">Contact Number: 0956 387 1771</p>
                    </div>
                  </a>
                  <a
                    href="mailto:galonggalinda@gmail.com"
                    aria-label="Email Galóng Galínda at galonggalinda@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container-high/50 transition-colors hover:border-tertiary/50"
                  >
                    <span className="w-12 h-12 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center material-symbols-outlined shrink-0">mail</span>
                    <div>
                      <span className="font-label-badge text-[10px] text-on-surface-variant uppercase block mb-0.5">Official Inquiries</span>
                      <p className="font-body text-sm font-semibold text-on-surface">galonggalinda@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1C6jJJMqRT/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-label text-sm font-bold text-on-primary transition-colors hover:bg-primary-container hover:text-on-primary-container"
                    aria-label="Follow Galóng Galínda on Facebook"
                  >
                    <span className="material-symbols-outlined" aria-hidden="true">thumb_up</span>
                    <span>Follow us on FB</span>
                  </a>
                </div>

                {/* Interactive Google Map Box */}
                <div className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden border border-surface-container-high/50 shadow-sm">
                  <div className="relative w-full h-64 bg-surface-container overflow-hidden">
                    <iframe 
                      src="https://maps.google.com/maps?q=City+College+of+Angeles,+Arayat+Blvd,+Angeles+City&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                      className="absolute inset-0 w-full h-full"
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="p-4 flex items-center justify-between bg-surface-container-lowest relative z-10 border-t border-surface-container-high/50">
                    <div className="flex flex-col">
                      <span className="font-headline text-sm font-bold text-on-surface">City College of Angeles</span>
                      <span className="font-body text-xs text-on-surface-variant">Barangay Pampang, Pampanga</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side: Interactive Form */}
              <div className="lg:col-span-7">
                <div className="bg-surface-container-lowest p-6 lg:p-8 rounded-2xl shadow-md border border-surface-container-high/60">
                  <div className="mb-6">
                    <h3 className="font-headline text-xl lg:text-2xl font-bold text-on-surface">Submit Request</h3>
                    <p className="font-body text-sm text-on-surface-variant mt-1">Our student liaison officers will respond promptly.</p>
                  </div>
                  
                  <form
                    className="flex flex-col gap-6"
                    action="https://formspree.io/f/xoejjklz"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    {submissionStatus && (
                      <p
                        className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                          submissionStatus.startsWith('Naipadala')
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                        role={submissionStatus.startsWith('Naipadala') ? 'status' : 'alert'}
                      >
                        {submissionStatus}
                      </p>
                    )}
                    
                    {/* Offering Selection Radio */}
                    <div>
                      <label className="block font-label text-sm text-on-surface font-bold mb-3">Select Requirement *</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <label className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low border border-surface-container-high hover:border-primary cursor-pointer transition-colors group">
                          <input defaultChecked className="mt-1 text-primary focus:ring-primary" name="offering_type" type="radio" value="Sports Officiating" />
                          <div className="flex flex-col">
                            <span className="font-body text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Sports Officiating</span>
                            <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant mt-0.5">Referees & Table Ops</span>
                          </div>
                        </label>
                        <label className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low border border-surface-container-high hover:border-tertiary cursor-pointer transition-colors group">
                          <input className="mt-1 text-tertiary focus:ring-tertiary" name="offering_type" type="radio" value="Nutrifit Crackers" />
                          <div className="flex flex-col">
                            <span className="font-body text-sm font-bold text-on-surface group-hover:text-tertiary transition-colors">Nutrifit Crackers</span>
                            <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant mt-0.5">Whole-Grain Snacks</span>
                          </div>
                        </label>
                        <label className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low border border-surface-container-high hover:border-secondary cursor-pointer transition-colors group">
                          <input className="mt-1 text-secondary focus:ring-secondary" name="offering_type" type="radio" value="ArmFeet Powder" />
                          <div className="flex flex-col">
                            <span className="font-body text-sm font-bold text-on-surface group-hover:text-secondary transition-colors">ArmFeet Powder</span>
                            <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant mt-0.5">Underarm & Foot Care</span>
                          </div>
                        </label>
                        <label className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low border border-surface-container-high hover:border-primary cursor-pointer transition-colors group">
                          <input className="mt-1 text-primary focus:ring-primary" name="offering_type" type="radio" value="Bulk Package" />
                          <div className="flex flex-col">
                            <span className="font-body text-sm font-bold text-on-surface group-hover:text-primary transition-colors">Bulk Package</span>
                            <span className="font-label text-[10px] uppercase tracking-wider text-on-surface-variant mt-0.5">Officiating + Products</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-label text-xs font-bold text-on-surface mb-1.5 uppercase tracking-wide">Full Name *</label>
                        <input name="name" className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-surface-container-high focus:border-primary focus:ring-1 focus:ring-primary text-body sm:text-sm outline-none transition-shadow" placeholder="Juan Dela Cruz" required type="text" />
                      </div>
                      <div>
                        <label className="block font-label text-xs font-bold text-on-surface mb-1.5 uppercase tracking-wide">Organization (Optional)</label>
                        <input name="organization" className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-surface-container-high focus:border-primary focus:ring-1 focus:ring-primary text-body sm:text-sm outline-none transition-shadow" placeholder="CCA Sports Club" type="text" required={false} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-label text-xs font-bold text-on-surface mb-1.5 uppercase tracking-wide">Email Address *</label>
                        <input name="email" className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-surface-container-high focus:border-primary focus:ring-1 focus:ring-primary text-body sm:text-sm outline-none transition-shadow" placeholder="name@domain.com" required type="email" />
                      </div>
                      <div>
                        <label className="block font-label text-xs font-bold text-on-surface mb-1.5 uppercase tracking-wide">Contact Number *</label>
                        <input
                          name="contact_number"
                          className="w-full px-4 py-2.5 rounded-lg bg-surface-container-lowest text-on-surface border border-surface-container-high focus:border-primary focus:ring-1 focus:ring-primary text-body sm:text-sm outline-none transition-shadow"
                          placeholder="09XX XXX XXXX"
                          required
                          type="tel"
                          inputMode="numeric"
                          autoComplete="tel-national"
                          maxLength={11}
                          pattern="09[0-9]{9}"
                          title="Enter an 11-digit Philippine mobile number starting with 09."
                          onInput={(event) => {
                            event.currentTarget.value = event.currentTarget.value.replace(/\D/g, '').slice(0, 11);
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-label text-xs font-bold text-on-surface mb-1.5 uppercase tracking-wide">Inquiry Details & Quantities</label>
                      <textarea name="message" className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest text-on-surface border border-surface-container-high focus:border-primary focus:ring-1 focus:ring-primary text-body sm:text-sm outline-none transition-shadow resize-y min-h-[100px]" placeholder="Specify tournament dates, number of courts, or quantity of products needed..." rows="3"></textarea>
                    </div>
                    
                    <button className="w-full mt-2 py-3.5 rounded-lg bg-primary hover:bg-primary-container hover:text-on-primary-container text-on-primary font-label text-sm font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 disabled:cursor-wait disabled:opacity-70" type="submit" disabled={isSubmitting}>
                      <span>{isSubmitting ? 'Sending...' : 'Send Request'}</span>
                      <span className="material-symbols-outlined text-[18px]">send</span>
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
        
      </div>
    </main>
  );
}