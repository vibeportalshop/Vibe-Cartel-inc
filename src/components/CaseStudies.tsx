import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MessageCircle, ExternalLink } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/packagesData';

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export default function CaseStudies({ onOpenConsultation }: CaseStudiesProps) {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <section id="work" className="py-20 md:py-28 bg-[#06080D] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
              <span>Real Work Examples</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Client Success Stories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Websites that brought measurable business growth.
            </h2>
            <p className="text-base text-slate-300 mt-3 font-light leading-relaxed">
              See how we helped other Indian businesses get more customer enquiries, sell products online, and upgrade their brand image.
            </p>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex items-center p-1 bg-white/[0.04] border border-white/[0.08] rounded-lg shrink-0 overflow-x-auto">
            {CASE_STUDIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCase(c)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCase.id === c.id
                    ? 'bg-white text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {c.client}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Project Showcase */}
        <div className="rounded-xl border border-white/[0.08] bg-[#0A0D15] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Column (5 cols) */}
            <div className="lg:col-span-5 p-7 sm:p-9 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                  <span>{selectedCase.sector}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedCase.year}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-1">
                  {selectedCase.project}
                </h3>
                <p className="text-xs text-slate-400 font-mono mb-5">
                  Client: {selectedCase.client}
                </p>

                <p className="text-sm text-slate-300 font-light leading-relaxed mb-5">
                  {selectedCase.summary}
                </p>

                {/* Plain-Language Challenge & Solution */}
                <div className="space-y-3.5 pt-4 border-t border-white/[0.06] mb-6">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-mono text-slate-400 mb-1">
                      The Problem They Had:
                    </div>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {selectedCase.challenge}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-mono text-cyan-400 mb-1">
                      What We Built For Them:
                    </div>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {selectedCase.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantified Metrics Grid */}
              <div>
                <div className="grid grid-cols-3 gap-2.5 pt-5 border-t border-white/[0.06] mb-6">
                  {selectedCase.results.map((res, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                      <div className="text-lg sm:text-xl font-semibold text-white font-mono tabular-nums">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight mt-1 font-mono">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Build A Website Like This For My Business</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: Simulated Visual Mockup (7 cols) */}
            <div className="lg:col-span-7 bg-[#07090F] p-6 sm:p-8 flex flex-col justify-center">
              <div className="rounded-lg border border-white/[0.1] bg-[#0A0E17] shadow-xl overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/[0.06] text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-slate-400 text-[11px] truncate max-w-[240px]">
                    https://{selectedCase.id}.in
                  </div>
                  <span className="text-[10px] text-emerald-400">Secure (SSL)</span>
                </div>

                {/* Simulated UI Mockup View */}
                <div className="p-5 space-y-4">
                  {selectedCase.id === 'shree-textiles' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <div>
                          <div className="text-xs text-slate-400 font-mono">Online Store Preview</div>
                          <div className="text-lg font-semibold text-white">Pure Kanjivaram Silk Saree</div>
                        </div>
                        <div className="text-right">
                          <div className="text-base font-mono text-cyan-400 font-semibold">₹6,499</div>
                          <div className="text-[10px] text-emerald-400">Free Delivery Across India</div>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-emerald-950/25 border border-emerald-500/20 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-emerald-300">
                          <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>Direct Order via WhatsApp Available</span>
                        </div>
                        <span className="text-[11px] font-mono text-white bg-emerald-600 px-2.5 py-1 rounded">
                          Pay with UPI
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05]">
                          <div className="text-[10px] text-slate-400">Monthly Sales</div>
                          <div className="text-sm font-semibold text-white mt-0.5">₹18.4 Lakhs</div>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05]">
                          <div className="text-[10px] text-slate-400">Average Speed</div>
                          <div className="text-sm font-semibold text-cyan-400 mt-0.5">0.4 Seconds</div>
                        </div>
                        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.05]">
                          <div className="text-[10px] text-slate-400">Return Rate</div>
                          <div className="text-sm font-semibold text-emerald-400 mt-0.5">&lt; 1.2%</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedCase.id === 'apex-industrial' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <div>
                          <div className="text-xs text-slate-400 font-mono">B2B Manufacturing Catalogue</div>
                          <div className="text-lg font-semibold text-white">High-Tensile Fasteners & Flanges</div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-mono text-emerald-400">ISO 9001:2015</span>
                          <div className="text-[10px] text-slate-400">Export Certified</div>
                        </div>
                      </div>

                      <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05] space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-300 font-medium">Export Enquiry Form:</span>
                          <span className="text-cyan-400 font-mono">Instant PDF Brochure</span>
                        </div>
                        <div className="text-xs text-slate-400">
                          "Request quotation for bulk supply of 50,000 units with test certificate"
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-400 pt-1 font-mono">
                        <span>New Quotations Generated:</span>
                        <span className="text-emerald-400 font-semibold">+165% Growth in 60 Days</span>
                      </div>
                    </div>
                  )}

                  {selectedCase.id === 'dr-sharma-clinic' && (
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <div>
                          <div className="text-xs text-slate-400 font-mono">Healthcare Website</div>
                          <div className="text-lg font-semibold text-white">Dr. Sharma Multi-Specialty Clinic</div>
                        </div>
                        <span className="text-xs font-mono text-emerald-400">★ 4.9 on Google (340+ Reviews)</span>
                      </div>

                      <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/20 space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-cyan-300 font-medium">Book Appointment on WhatsApp:</span>
                          <span className="text-white font-mono text-[11px]">Instant Confirmation</span>
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Patients can choose time slot and visit clinic with zero waiting time.
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-400 pt-1 font-mono">
                        <span>Google Search Ranking:</span>
                        <span className="text-emerald-400 font-semibold">Rank #1 in Local City Area</span>
                      </div>
                    </div>
                  )}

                  {/* Feature tags in plain language */}
                  <div className="pt-2 border-t border-white/[0.06] flex flex-wrap gap-2">
                    {selectedCase.liveFeatures.map((feat) => (
                      <span key={feat} className="text-[11px] font-mono text-slate-300 bg-white/[0.04] px-2.5 py-1 rounded">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
