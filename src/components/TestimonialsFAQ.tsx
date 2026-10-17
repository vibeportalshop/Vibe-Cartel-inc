import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/packagesData';

interface TestimonialsFAQProps {
  onOpenConsultation: () => void;
}

export default function TestimonialsFAQ({ onOpenConsultation }: TestimonialsFAQProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const testimonials = [
    {
      quote:
        'Earlier our saree website was built on WordPress and took 6 seconds to open on phones. Customers were bouncing without ordering. Vibe Cartel rebuilt it for ₹23,999: now it opens in 1 second, and customers pay directly via UPI. Our monthly online sales crossed ₹18 Lakhs.',
      author: 'Rajesh K. Mehta',
      role: 'Managing Partner',
      company: 'Shree Silk & Handlooms (Surat)',
      outcome: '₹18 Lakhs+ Monthly Sales',
    },
    {
      quote:
        'A local Mumbai agency quoted us ₹1.2 Lakhs for a corporate export website. Vibe Cartel gave us a world-class 6-page website for ₹13,999 in just 8 days. International buyers from Dubai and Germany regularly send RFQs through our new site.',
      author: 'Sanjay Aggarwal',
      role: 'Director of Exports',
      company: 'Apex Precision Tools (Pune)',
      outcome: '+165% Export Enquiries',
    },
    {
      quote:
        'I am a doctor with zero technical knowledge. The team set up our dental clinic website with a direct WhatsApp booking button and Google Maps. We get 3 to 4 patient appointment messages every single day directly on our clinic phone.',
      author: 'Dr. Ananya Sharma',
      role: 'Founder & Chief Dentist',
      company: 'Dr. Sharma Multi-Specialty Dental',
      outcome: '+85 New Patients / Month',
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#06080D] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Testimonials Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
            <span>What Our Clients Say</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Real Indian Business Owners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Trusted by Indian business owners across India.
          </h2>
          <p className="text-base text-slate-300 mt-3 font-light leading-relaxed">
            Real feedback from manufacturers, retailers, and doctors who upgraded to Vibe Cartel Web.
          </p>
        </div>

        {/* Testimonials Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-white/[0.08] bg-[#0A0D15] flex flex-col justify-between"
            >
              <div>
                {/* Outcome badge - clean text */}
                <div className="text-xs font-mono text-cyan-400 mb-3 pb-2.5 border-b border-white/[0.06] flex items-center justify-between">
                  <span>Business Result:</span>
                  <span className="font-semibold">{t.outcome}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-5 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <div className="font-semibold text-white text-sm tracking-tight">
                  {t.author}
                </div>
                <div className="text-xs text-slate-400 font-light mt-0.5">
                  {t.role} · <span className="text-slate-300 font-normal">{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
              Common Questions Answered
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light">
              Clear answers in plain language with zero technical confusing terms.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.08] bg-[#0A0D15] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-medium text-white">
                      {faq.question}
                    </span>
                    <span className="text-slate-400 shrink-0">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 font-light leading-relaxed border-t border-white/[0.04]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Prompt banner */}
          <div className="mt-10 text-center p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
            <p className="text-sm text-slate-300 font-light">
              Have another question about your specific business website?
            </p>
            <button
              onClick={onOpenConsultation}
              className="mt-3 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Click here to chat or request a callback</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
