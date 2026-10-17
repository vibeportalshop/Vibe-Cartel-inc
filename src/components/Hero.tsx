import { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

interface HeroProps {
  onExplorePackages: () => void;
  onOpenConsultation: () => void;
}

export default function Hero({ onExplorePackages, onOpenConsultation }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'benefits' | 'speed'>('preview');

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Kicker */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-4">
          <span>Vibe Cartel Web</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Websites Built For Indian Businesses</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>From ₹799 to ₹2,999</span>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Column 1: Plain-English Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.12] mb-5"
              style={{ textWrap: 'balance' }}
            >
              We build fast, modern websites that bring you real customer enquiries.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-7 max-w-2xl font-light">
              Stop losing customers to slow, outdated websites. We build clean, professional company websites, visiting card pages, and online selling stores starting at just <span className="text-cyan-400 font-semibold">₹799</span> (max ₹2,999). Opens in 1 second on mobile phones, with direct WhatsApp enquiry buttons and 100% full ownership.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onExplorePackages}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all flex items-center gap-2.5 shadow-[0_0_24px_rgba(6,182,212,0.3)] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>View Packages & Pricing (₹799 – ₹2,999)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-sm font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                Request Free Callback
              </button>
            </div>

            {/* Trust Markers in Layman Terms */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300 font-normal">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>50% Advance · 50% After Approval</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct WhatsApp Lead Buttons</span>
              </div>
              <span aria-hidden="true" className="hidden sm:inline text-slate-700">·</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Full Code Ownership</span>
              </div>
            </div>
          </div>

          {/* Column 2: Visual Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-white/[0.1] bg-[#0A0E17]/95 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-black/40">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">yourbusiness.com</span>
                </div>

                {/* Segmented Switch */}
                <div className="flex items-center gap-1 p-0.5 bg-white/[0.05] rounded-md border border-white/[0.06]">
                  <button
                    onClick={() => setActiveTab('preview')}
                    className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === 'preview'
                        ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Mobile View
                  </button>
                  <button
                    onClick={() => setActiveTab('benefits')}
                    className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === 'benefits'
                        ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    What You Get
                  </button>
                  <button
                    onClick={() => setActiveTab('speed')}
                    className={`px-2 py-1 text-[11px] font-mono rounded transition-colors ${
                      activeTab === 'speed'
                        ? 'bg-cyan-500/20 text-cyan-300 font-medium'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Speed Test
                  </button>
                </div>
              </div>

              {/* Canvas Content Body */}
              <div className="p-5 min-h-[290px] flex flex-col justify-between">
                {activeTab === 'preview' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-sm">
                          VC
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Your Business Online</div>
                          <div className="text-[10px] text-emerald-400 font-mono">● Opens in 0.4 seconds</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                        ₹799 Starting
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] space-y-2">
                      <div className="text-xs font-medium text-white">
                        "Hello! I saw your services online and would like a price quotation."
                      </div>
                      <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-500/20 font-mono">
                        <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Direct WhatsApp Button Connected</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-2.5 rounded-lg bg-black/30 border border-white/[0.05]">
                        <div className="text-[10px] text-slate-400">Mobile Speed</div>
                        <div className="text-base font-semibold text-white font-mono mt-0.5">Super-Fast (1s)</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-black/30 border border-white/[0.05]">
                        <div className="text-[10px] text-slate-400">Security</div>
                        <div className="text-base font-semibold text-emerald-400 font-mono mt-0.5">Free Green Lock (SSL)</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'benefits' && (
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="text-[11px] font-mono text-cyan-400 mb-2">5 Key Guarantees For Every Client:</div>
                    {[
                      '1. 100% ownership — You own the domain and files forever.',
                      '2. Pay 50% only after checking and approving the website.',
                      '3. Transparent fixed price between ₹799 to ₹2,999.',
                      '4. Direct WhatsApp button so customers can chat in 1 click.',
                      '5. Works smoothly on all 4G and 5G mobile phones.'
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-2 py-0.5">
                        <span className="text-cyan-400 shrink-0">✓</span>
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'speed' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-white/[0.06]">
                      <span className="text-slate-400">Google Mobile Test</span>
                      <span className="text-emerald-400 font-semibold">100/100 GRADE</span>
                    </div>
                    {[
                      { test: 'Mobile Page Opening Time', result: '0.42 Seconds (Instant)' },
                      { test: 'Works on Jio / Airtel 4G & 5G', result: 'Zero Lag or Buffering' },
                      { test: 'Google Search Compatibility', result: 'Ready for Indexing' },
                      { test: 'Security Lock (SSL)', result: 'Free Lifetime Green Lock' },
                    ].map((row) => (
                      <div key={row.test} className="flex items-center justify-between text-xs py-1">
                        <span className="text-slate-300">{row.test}</span>
                        <span className="font-mono text-emerald-400 text-[11px]">✓ {row.result}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer bar */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Vibe Cartel Web Quality</span>
                  <span className="text-cyan-400">Budget: ₹799 – ₹2,999</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof Strip */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-cyan-400 font-mono tabular-nums">
              ₹799
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
              Starting Website Price
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-white font-mono tabular-nums">
              &lt; 1 Second
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
              Mobile Opening Speed
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-white font-mono tabular-nums">
              2–5 Days
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
              Typical Delivery Time
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-semibold text-white font-mono tabular-nums">
              ₹2,999
            </div>
            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-mono">
              Max Package Price
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
