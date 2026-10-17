import { useState } from 'react';
import { CheckCircle2, Smartphone, Zap, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function TechStack() {
  const [activeReason, setActiveReason] = useState<'speed' | 'mobile' | 'security'>('speed');

  const reasonDetails = {
    speed: [
      { title: 'Hosted on Fast Indian Cloud Servers', desc: 'Our servers are located in Mumbai and Bangalore, ensuring zero delay when Indian customers open your website.', tag: 'Zero Delay' },
      { title: 'Clean Handwritten Code', desc: 'We do not use bloated, slow templates loaded with 50 useless plugins that freeze the browser.', tag: '100% Clean' },
      { title: 'Automatic Photo Compression', desc: 'All your product photos and banners look high-definition while opening in less than 1 second.', tag: 'Fast Image Loading' },
      { title: 'Sub-1 Second Opening Speed', desc: 'Tested and proven to open faster than 95% of competing websites in your industry.', tag: '&lt; 1s Speed' },
    ],
    mobile: [
      { title: 'Optimized for Jio, Airtel & Vi Networks', desc: 'Loads instantly even if your customer is traveling or has ordinary 4G phone connectivity.', tag: 'Works on 4G & 5G' },
      { title: 'Thumb-Friendly Navigation', desc: 'Big buttons, easy WhatsApp click, and smooth scrolling designed specifically for smartphone users.', tag: 'Mobile First' },
      { title: 'Adapts to All Screen Sizes', desc: 'Looks crisp and professional on every phone screen (iPhone, Samsung, OnePlus, Vivo, Oppo) and laptops.', tag: 'All Screens' },
      { title: 'Zero Layout Jumps', desc: 'Buttons do not jump around while loading, so customers do not accidentally click the wrong thing.', tag: 'Smooth Touch' },
    ],
    security: [
      { title: 'Free Green Padlock (SSL Certificate)', desc: 'Your website displays the secure padlock icon in the browser address bar, reassuring customers.', tag: 'Free SSL' },
      { title: 'Protection Against Hackers & Spam', desc: 'Built-in security shields your forms from automated spam and keeps your customer data safe.', tag: 'Spam Protection' },
      { title: '100% RBI & Bank Compliant', desc: 'When collecting payments via UPI or Cards, everything follows official Indian banking standards.', tag: 'Bank Grade' },
      { title: 'Automatic Daily Cloud Backups', desc: 'Your website data is backed up daily so you never lose any customer enquiries or product files.', tag: 'Daily Backup' },
    ],
  };

  return (
    <section className="py-20 md:py-28 bg-[#06080D] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Plain-English Explanation */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
              <span>Why Our Websites Are Better</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>In Plain Words</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight mb-3">
              Why our websites load 5x faster than typical old websites.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed mb-6">
              Most cheap freelancers use pirated WordPress themes loaded with junk code that takes 8 seconds to open on Indian phones. We build with modern, clean technology so your website opens instantly and leaves a premium impression.
            </p>

            {/* Segmented Filter */}
            <div className="flex items-center gap-2 p-1 bg-white/[0.04] border border-white/[0.08] rounded-lg w-fit mb-5">
              <button
                onClick={() => setActiveReason('speed')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeReason === 'speed'
                    ? 'bg-white text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Speed On Phone
              </button>
              <button
                onClick={() => setActiveReason('mobile')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeReason === 'mobile'
                    ? 'bg-white text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Mobile Friendly
              </button>
              <button
                onClick={() => setActiveReason('security')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  activeReason === 'security'
                    ? 'bg-white text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Safety & Backups
              </button>
            </div>

            <div className="space-y-2.5">
              {reasonDetails[activeReason].map((item) => (
                <div
                  key={item.title}
                  className="p-3.5 rounded-lg border border-white/[0.06] bg-[#0A0D15] flex items-center justify-between"
                >
                  <div className="pr-3">
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="text-xs text-slate-300 font-light mt-0.5">{item.desc}</div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20 shrink-0">
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Health Check Card */}
          <div className="lg:col-span-6">
            <div className="p-7 rounded-xl border border-white/[0.1] bg-[#0A0E17] shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Website Quality Guarantee
                  </div>
                  <div className="text-base font-semibold text-white mt-0.5">
                    Google Test Score For Your Site
                  </div>
                </div>
                <div className="text-right font-mono text-xs text-emerald-400 font-medium">
                  Grade: Perfect 100/100
                </div>
              </div>

              {/* 4 Score Badges in plain language */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {[
                  { label: 'Mobile Speed', score: '100%' },
                  { label: 'Mobile Friendly', score: '100%' },
                  { label: 'Safety Lock', score: '100%' },
                  { label: 'Google Search', score: '100%' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-3 rounded-lg bg-black/40 border border-white/[0.05] text-center"
                  >
                    <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums mb-1">
                      {item.score}
                    </div>
                    <div className="text-[11px] font-mono text-slate-300">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Simple specs in layman language */}
              <div className="space-y-2 text-xs font-mono text-slate-300 p-4 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                <div className="flex justify-between">
                  <span className="text-slate-400">Opening Speed on Mobile</span>
                  <span className="text-emerald-400 font-semibold">Under 1 Second</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Works on Jio & Airtel 4G/5G</span>
                  <span className="text-emerald-400 font-semibold">100% Tested & Verified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Direct WhatsApp Button</span>
                  <span className="text-emerald-400 font-semibold">Pre-connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
