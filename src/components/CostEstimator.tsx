import { useState, useMemo } from 'react';
import { CheckSquare, Square, Calculator, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PACKAGES, ADDONS } from '../data/packagesData';

interface CostEstimatorProps {
  onProceedWithEstimate: (estimateData: {
    basePackageName: string;
    extraPages: number;
    selectedAddonNames: string[];
    totalPrice: number;
    estimatedDays: number;
  }) => void;
}

export default function CostEstimator({ onProceedWithEstimate }: CostEstimatorProps) {
  const [selectedBaseId, setSelectedBaseId] = useState<string>('growth-company');
  const [extraPages, setExtraPages] = useState<number>(0);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['whatsapp-automation', 'google-seo']);

  const basePackage = PACKAGES.find((p) => p.id === selectedBaseId) || PACKAGES[2];

  const formatINR = (val: number) => {
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const toggleAddon = (addonId: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const calculatedTotal = useMemo(() => {
    const basePrice = basePackage.price;
    const pagesCost = extraPages * 199;
    const addonsCost = selectedAddonIds.reduce((sum, id) => {
      const match = ADDONS.find((a) => a.id === id);
      return sum + (match ? match.price : 0);
    }, 0);

    return basePrice + pagesCost + addonsCost;
  }, [basePackage, extraPages, selectedAddonIds]);

  const calculatedDays = useMemo(() => {
    let days = 5;
    if (basePackage.id === 'starter-page') days = 2;
    if (basePackage.id === 'standard-business') days = 4;
    if (basePackage.id === 'growth-company') days = 6;
    if (basePackage.id === 'mini-ecommerce') days = 8;
    if (basePackage.id === 'monthly-care') days = 1;

    days += Math.ceil(extraPages * 0.4);

    selectedAddonIds.forEach((id) => {
      const match = ADDONS.find((a) => a.id === id);
      if (match) days += match.deliveryDays;
    });

    return Math.max(days, 2);
  }, [basePackage, extraPages, selectedAddonIds]);

  const handleProceed = () => {
    const selectedAddonNames = selectedAddonIds
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean) as string[];

    onProceedWithEstimate({
      basePackageName: basePackage.name,
      extraPages,
      selectedAddonNames,
      totalPrice: calculatedTotal,
      estimatedDays: calculatedDays,
    });
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-[#06080D] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
            <span>Instant Price Calculator</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Budget-Friendly (₹799 – ₹3,000)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Calculate your exact website price right now.
          </h2>
          <p className="text-base text-slate-300 mt-3 font-light leading-relaxed">
            Pick what you need below, and see the exact price in Indian Rupees immediately. No waiting, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Base Package */}
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0A0D15]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-mono text-cyan-400">
                  Step 1: Choose Your Starting Package
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PACKAGES.map((pkg) => {
                  const isSelected = selectedBaseId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedBaseId(pkg.id)}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        isSelected
                          ? 'border-cyan-400 bg-cyan-950/20 text-white shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                          : 'border-white/[0.06] bg-white/[0.02] text-slate-300 hover:border-white/[0.12]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm">{pkg.name}</span>
                        <span className="text-xs font-mono text-cyan-400 font-medium">
                          {formatINR(pkg.price)}{pkg.period === '/mo' ? '/mo' : ''}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                        {pkg.tagline}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Extra Pages */}
            {basePackage.category !== 'retainer' && (
              <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0A0D15]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider font-mono text-cyan-400">
                    Step 2: Add Extra Pages (Optional)
                  </span>
                  <span className="text-xs font-mono text-cyan-400">
                    +₹199 / extra page
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300 font-light">
                      Additional pages for more products, gallery, or services:
                    </span>
                    <span className="text-lg font-mono text-cyan-400 font-semibold">
                      +{extraPages} {extraPages === 1 ? 'Page' : 'Pages'}
                    </span>
                  </div>

                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={extraPages}
                    onChange={(e) => setExtraPages(parseInt(e.target.value, 10))}
                    className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                  />

                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>0 Extra</span>
                    <span>+1 Page (+₹199)</span>
                    <span>+3 Pages (+₹597)</span>
                    <span>+5 Pages (+₹995)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Add-on Features */}
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0A0D15]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-mono text-cyan-400">
                  Step 3: Extra Features & Add-Ons
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Tick What You Want
                </span>
              </div>

              <div className="space-y-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-lg border cursor-pointer transition-colors flex items-start gap-3.5 ${
                        isChecked
                          ? 'border-cyan-400/50 bg-cyan-950/15'
                          : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]'
                      }`}
                    >
                      <div className="mt-0.5 text-cyan-400 shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4" />
                        ) : (
                          <Square className="w-4 h-4 text-slate-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                          <span className={isChecked ? 'text-white' : 'text-slate-300'}>
                            {addon.name}
                          </span>
                          <span className="font-mono text-cyan-400 text-xs shrink-0 ml-2">
                            +{formatINR(addon.price)}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">
                          {addon.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-Time Price Summary (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="p-6 sm:p-7 rounded-xl border border-cyan-500/30 bg-[#0C101A] shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    Your Total Price
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">Fixed Cost · Zero Hidden Fees</span>
              </div>

              {/* Price Total */}
              <div className="mb-6">
                <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                  Final Package Cost:
                </div>
                <div className="text-4xl sm:text-5xl font-semibold text-white font-mono mt-1 tracking-tight tabular-nums">
                  {formatINR(calculatedTotal)}
                  {basePackage.period === '/mo' ? (
                    <span className="text-lg text-slate-400 font-normal">/mo</span>
                  ) : null}
                </div>
                <div className="text-xs text-slate-300 mt-2 flex items-center gap-2 font-mono">
                  <span>50% Advance to Start:</span>
                  <span className="text-cyan-400 font-semibold">
                    {formatINR(Math.round(calculatedTotal / 2))}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                  (Remaining 50% only after you approve the completed website)
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 py-4 border-y border-white/[0.08] text-xs font-mono mb-5">
                <div className="flex justify-between text-slate-300">
                  <span className="truncate max-w-[200px]">Package: {basePackage.name}</span>
                  <span className="text-white">{formatINR(basePackage.price)}</span>
                </div>

                {extraPages > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>+{extraPages} Extra Pages</span>
                    <span className="text-white">+{formatINR(extraPages * 199)}</span>
                  </div>
                )}

                {selectedAddonIds.map((id) => {
                  const match = ADDONS.find((a) => a.id === id);
                  if (!match) return null;
                  return (
                    <div key={id} className="flex justify-between text-slate-300">
                      <span className="truncate max-w-[190px]">{match.name}</span>
                      <span className="text-cyan-400">+{formatINR(match.price)}</span>
                    </div>
                  );
                })}
              </div>

              {/* Delivery Speed */}
              <div className="flex items-center justify-between text-xs text-slate-300 mb-5 bg-white/[0.03] p-3 rounded-lg border border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Estimated Delivery:</span>
                </div>
                <span className="font-mono font-semibold text-white">
                  Ready in ~{calculatedDays} Working Days
                </span>
              </div>

              {/* Trust Notes */}
              <div className="space-y-1.5 text-[11px] text-slate-400 mb-6 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Official GST invoice provided if required for tax deduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>100% full ownership of website, domain and files</span>
                </div>
              </div>

              {/* Book button */}
              <button
                onClick={handleProceed}
                className="w-full py-3.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Book This Package At {formatINR(calculatedTotal)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
