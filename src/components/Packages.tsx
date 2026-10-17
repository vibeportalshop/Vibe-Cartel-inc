import { useState } from 'react';
import { Check, ArrowRight, Sparkles, Clock, SlidersHorizontal, Layers } from 'lucide-react';
import { PACKAGES, PackageItem } from '../data/packagesData';

interface PackagesProps {
  onSelectPackage: (pkg: PackageItem) => void;
  onOpenEstimator: () => void;
}

export default function Packages({ onSelectPackage, onOpenEstimator }: PackagesProps) {
  const [filter, setFilter] = useState<'all' | 'website' | 'ecommerce' | 'retainer'>('all');
  const [viewMode, setViewMode] = useState<'cards' | 'matrix'>('cards');

  const filteredPackages = PACKAGES.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const formatINR = (val: number) => {
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="packages" className="py-20 md:py-28 bg-[#06080D] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
              <span>Transparent Pricing (₹799 – ₹2,999)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Zero Hidden Costs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
              Website packages starting at just ₹799.
            </h2>
            <p className="text-base text-slate-300 mt-3 font-light leading-relaxed">
              High-quality websites built for Indian small businesses, shops, and professionals. Every package includes mobile optimization, direct WhatsApp enquiry button, and 100% full ownership.
            </p>
          </div>

          {/* Controls: Segmented Category Filter & View Mode */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            {/* Category Filter */}
            <div className="flex items-center p-1 bg-white/[0.04] border border-white/[0.08] rounded-lg">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === 'all'
                    ? 'bg-white text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Packages
              </button>
              <button
                onClick={() => setFilter('website')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === 'website'
                    ? 'bg-white text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Company Sites
              </button>
              <button
                onClick={() => setFilter('ecommerce')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === 'ecommerce'
                    ? 'bg-white text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Online Stores
              </button>
              <button
                onClick={() => setFilter('retainer')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  filter === 'retainer'
                    ? 'bg-white text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Care
              </button>
            </div>

            {/* Matrix View Toggle */}
            <button
              onClick={() => setViewMode(viewMode === 'cards' ? 'matrix' : 'cards')}
              className="px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-white/[0.04] border border-white/[0.08] rounded-lg flex items-center gap-2 transition-colors whitespace-nowrap"
            >
              {viewMode === 'cards' ? (
                <>
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Compare Side-by-Side</span>
                </>
              ) : (
                <>
                  <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Card View</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* View Mode 1: Cards */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-xl border flex flex-col justify-between transition-all duration-200 ${
                  pkg.isPopular
                    ? 'bg-[#0D121F] border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.14)]'
                    : 'bg-[#0A0D15] border-white/[0.08] hover:border-white/[0.18]'
                } p-6 sm:p-7`}
              >
                {/* Popular Marker */}
                {pkg.isPopular && (
                  <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Best Value · Most Popular In India</span>
                  </div>
                )}

                <div>
                  {/* Title & Price Header */}
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-white tracking-tight">
                      {pkg.name}
                    </h3>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-semibold text-white font-mono tabular-nums">
                        {formatINR(pkg.price)}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {pkg.period === '/mo' ? 'per month' : 'one-time price'}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-5 font-light leading-relaxed">
                    {pkg.tagline}
                  </p>

                  {/* Metadata strip (Clean, unboxed) */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono py-2.5 border-y border-white/[0.06] mb-5">
                    <span className="flex items-center gap-1 text-slate-200">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      {pkg.turnaround}
                    </span>
                    <span aria-hidden="true" className="text-slate-700">·</span>
                    <span>{pkg.revisions}</span>
                    <span aria-hidden="true" className="text-slate-700">·</span>
                    <span>{pkg.supportDuration}</span>
                  </div>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] uppercase tracking-wider font-mono text-slate-400">
                      Everything Included in This Price:
                    </div>
                    {pkg.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action & Highlights */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {pkg.featuresHighlight.map((feat) => (
                      <span key={feat} className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      pkg.isPopular
                        ? 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-md shadow-cyan-500/20'
                        : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]'
                    }`}
                  >
                    <span>Choose Plan ({formatINR(pkg.price)})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Mode 2: Full Comparison Matrix */}
        {viewMode === 'matrix' && (
          <div className="rounded-xl border border-white/[0.08] bg-[#0A0D15] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-white/[0.02]">
                    <th className="py-4 px-6 font-mono text-xs text-slate-400 uppercase tracking-wider">Features</th>
                    {PACKAGES.map((p) => (
                      <th key={p.id} className="py-4 px-6">
                        <div className="font-semibold text-white">{p.name}</div>
                        <div className="text-lg font-mono text-cyan-400 font-medium tabular-nums mt-0.5">
                          {formatINR(p.price)}{p.period === '/mo' ? '/mo' : ''}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] font-normal text-xs text-slate-300">
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-slate-200">Delivery Time</td>
                    {PACKAGES.map((p) => (
                      <td key={p.id} className="py-3.5 px-6 font-mono text-slate-300">{p.turnaround}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-slate-200">Number of Pages</td>
                    <td className="py-3.5 px-6 font-mono">1 Page</td>
                    <td className="py-3.5 px-6 font-mono">3 to 4 Pages</td>
                    <td className="py-3.5 px-6 font-mono">5 to 6 Pages</td>
                    <td className="py-3.5 px-6 font-mono">Products + Cart + Pay</td>
                    <td className="py-3.5 px-6 font-mono">Unlimited updates</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-slate-200">Direct WhatsApp Button</td>
                    {PACKAGES.map((p) => (
                      <td key={p.id} className="py-3.5 px-6 text-emerald-400 font-mono">✓ Yes, Instant Leads</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-slate-200">Online UPI Payments</td>
                    <td className="py-3.5 px-6 font-mono text-slate-400">Enquiry Only</td>
                    <td className="py-3.5 px-6 font-mono text-slate-400">Enquiry Form</td>
                    <td className="py-3.5 px-6 font-mono text-slate-400">Enquiry / Quote</td>
                    <td className="py-3.5 px-6 font-mono text-emerald-400">UPI, GPay, PhonePe</td>
                    <td className="py-3.5 px-6 font-mono text-emerald-400">Payment Support</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-slate-200">Edit Text Yourself</td>
                    <td className="py-3.5 px-6 font-mono text-slate-400">Via Support</td>
                    <td className="py-3.5 px-6 font-mono text-slate-400">Via Support</td>
                    <td className="py-3.5 px-6 font-mono text-emerald-400">✓ Easy Admin Panel</td>
                    <td className="py-3.5 px-6 font-mono text-emerald-400">✓ Product Admin Panel</td>
                    <td className="py-3.5 px-6 font-mono text-emerald-400">We Do It For You</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-slate-200">Free Changes & Revisions</td>
                    {PACKAGES.map((p) => (
                      <td key={p.id} className="py-3.5 px-6 font-mono">{p.revisions}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-slate-200">Action</td>
                    {PACKAGES.map((p) => (
                      <td key={p.id} className="py-3.5 px-6">
                        <button
                          onClick={() => onSelectPackage(p)}
                          className="px-3 py-1.5 text-xs font-semibold rounded bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-colors whitespace-nowrap"
                        >
                          Select
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Custom Scope / Estimator Banner */}
        <div className="mt-14 p-7 rounded-xl border border-white/[0.08] bg-gradient-to-r from-cyan-950/20 via-[#0A0D15] to-[#0A0D15] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
              Want to customize your package?
            </div>
            <h4 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              Use our simple Instant Price Calculator.
            </h4>
            <p className="text-sm text-slate-300 mt-1 font-light">
              Add extra pages for just ₹199/page, add online UPI payment collection for ₹499, or request express delivery.
            </p>
          </div>

          <button
            onClick={onOpenEstimator}
            className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Open Price Calculator</span>
            <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
