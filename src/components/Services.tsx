import { MessageCircle, ShoppingBag, Globe, Zap, Search, ShieldCheck } from 'lucide-react';

interface ServicesProps {
  onOpenConsultation: () => void;
}

export default function Services({ onOpenConsultation }: ServicesProps) {
  const capabilities = [
    {
      index: '01',
      title: 'Digital Visiting Card & Landing Page',
      tagline: 'Single-page business website to share on WhatsApp and social media.',
      description: 'We build a clean, beautiful single-page website with your logo, business details, photo gallery, and click-to-call buttons. Perfect for running Instagram or Google ads.',
      features: ['Looks great on mobile phones & laptops', 'Direct WhatsApp button for instant customer chats', 'Free SSL green padlock security included', 'Click-to-call phone number and Google Maps'],
      highlight: 'Only ₹799'
    },
    {
      index: '02',
      title: 'Standard Business Website (3–4 Pages)',
      tagline: 'Dedicated pages showcasing your work, team, and services.',
      description: 'Separate pages for Home, About Us, Services, and Contact Us. Includes a customer enquiry form that sends leads straight to your email and phone.',
      features: ['Up to 4 custom-designed pages', 'Photo gallery of your previous projects', 'Client review and rating showcase', 'Fast loading on Jio & Airtel 4G networks'],
      highlight: 'Only ₹1,499'
    },
    {
      index: '03',
      title: 'Complete Company Website (5–6 Pages)',
      tagline: 'Full corporate website with an easy admin panel to edit text yourself.',
      description: 'Our most popular package for growing businesses, manufacturing factories, and clinics. Includes an admin panel where you can change text and photos anytime.',
      features: ['5 to 6 dedicated company pages', 'Easy Admin Panel to edit text and photos', 'Google Search and Google Maps setup', 'Appointment booking or quotation form'],
      highlight: 'Best Value ₹1,999'
    },
    {
      index: '04',
      title: 'Online Selling Store (E-Commerce)',
      tagline: 'Sell your products online across India with zero technical headaches.',
      description: 'Customers can browse products, select sizes/colors, check pincode delivery, and pay directly using UPI (GPay, PhonePe, Paytm). You receive an instant WhatsApp alert for every order.',
      features: ['UPI, Google Pay, PhonePe & Cards payment', 'Instant WhatsApp message on new order', 'Pincode delivery availability checker', 'Discount coupon codes & festive offers'],
      highlight: 'Complete Store ₹2,999'
    },
    {
      index: '05',
      title: 'Super-Fast Mobile Loading Speed',
      tagline: 'Opens in under 1 second on mobile phones, even on regular 4G data.',
      description: 'Indian customers will leave your site if it takes more than 3 seconds to open. We use modern, lightweight technology so your pages open instantly without any buffering or lag.',
      features: ['Hosted on Indian cloud servers (Mumbai)', 'Compresses photos without losing quality', 'Smooth scrolling with zero lag', 'Works on Jio, Airtel, Vi 4G & 5G'],
      highlight: '< 1s Open Time'
    },
    {
      index: '06',
      title: 'Monthly Care & WhatsApp Support',
      tagline: 'Send us changes on WhatsApp and we update your website same-day.',
      description: 'No need to hire an expensive computer person. When you want to change prices, add festive holiday greetings, or upload new photos, just message us and we handle it.',
      features: ['Same-day quick turnaround for edits', 'Festive banners and special discount posters', 'Daily automatic security checks', 'Friendly WhatsApp chat support'],
      highlight: '₹799 / Month'
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#06080D] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
              <span>What We Do For Your Business</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>All Plans Under ₹3,000</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Affordable website solutions for every Indian entrepreneur.
            </h2>
            <p className="text-base text-slate-300 mt-3 font-light leading-relaxed">
              We eliminate technical confusion and high agency costs. Here is exactly what we build and how it brings more customers to your business.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-lg transition-colors"
            >
              Ask Us Any Question
            </button>
          </div>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item) => (
            <div
              key={item.index}
              className="group p-6 rounded-xl border border-white/[0.08] bg-[#0A0D15] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-cyan-400 font-semibold tracking-wider">
                    {item.index}.
                  </span>
                  <span className="font-mono text-[11px] text-cyan-400 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20 font-medium">
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-cyan-300 font-medium mt-1 mb-2.5">
                  {item.tagline}
                </p>
                <p className="text-xs text-slate-300 font-light leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                {item.features.map((feat) => (
                  <div key={feat} className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
