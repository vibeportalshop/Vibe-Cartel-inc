import { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { PACKAGES } from '../data/packagesData';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: string;
  customEstimateSummary?: {
    basePackageName: string;
    extraPages: number;
    selectedAddonNames: string[];
    totalPrice: number;
    estimatedDays: number;
  } | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  preselectedPackage,
  customEstimateSummary,
}: ProjectModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedPackage, setSelectedPackage] = useState(preselectedPackage || 'growth-company');
  const [timeline, setTimeline] = useState('Standard (3–5 Days)');
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedPackage) {
      setSelectedPackage(preselectedPackage);
    }
  }, [preselectedPackage]);

  useEffect(() => {
    if (customEstimateSummary) {
      setSelectedPackage('custom-estimate');
      setDetails(
        `Selected Plan: ${customEstimateSummary.basePackageName} (Total ₹${customEstimateSummary.totalPrice.toLocaleString(
          'en-IN'
        )}) with +${customEstimateSummary.extraPages} extra pages and features: ${
          customEstimateSummary.selectedAddonNames.join(', ') || 'Standard'
        }. Expected timeline: ~${customEstimateSummary.estimatedDays} days.`
      );
    }
  }, [customEstimateSummary]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Your name is required';
    if (!phone.trim()) {
      errs.phone = 'Mobile or WhatsApp number is required';
    } else if (phone.trim().length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!details.trim()) errs.details = 'Please briefly mention what your business does';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setCompany('');
    setDetails('');
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-2xl border border-white/[0.12] bg-[#0A0D15] p-6 sm:p-8 shadow-2xl text-left my-8">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg border border-white/10 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
              Enquiry Received Successfully
            </div>

            <h3 className="text-2xl font-semibold text-white tracking-tight">
              Thank you, {name}!
            </h3>

            <p className="text-sm text-slate-300 font-light max-w-md mx-auto leading-relaxed">
              Our project manager will connect with you on WhatsApp / Phone at <span className="text-cyan-400 font-mono font-medium">{phone}</span> within 2 to 4 business hours to discuss your website requirements and sample design options.
            </p>

            <div className="pt-4 border-t border-white/[0.08] text-xs font-mono text-slate-400">
              Developed and Distributed by Vibe Cartel Inc.
            </div>

            <button
              onClick={handleReset}
              className="mt-6 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-1.5">
                <span>Vibe Cartel Web</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Direct Inquiry (₹799 – ₹2,999)</span>
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Start Your Website Project
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-light">
                Fill the quick details below. We will send you a clear cost breakdown and timeline directly on WhatsApp or email.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  {errors.name && <p className="text-rose-400 text-[11px] mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    WhatsApp / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  {errors.phone && <p className="text-rose-400 text-[11px] mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Business / Shop Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Patel Traders / Dr. Clinic"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. ramesh@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Package Selection */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Selected Package (₹799 – ₹2,999)
                </label>
                <select
                  value={selectedPackage}
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E131F] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-cyan-400 cursor-pointer"
                >
                  {customEstimateSummary && (
                    <option value="custom-estimate">
                      Custom Estimate: {customEstimateSummary.basePackageName} (₹{customEstimateSummary.totalPrice.toLocaleString('en-IN')})
                    </option>
                  )}
                  {PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} — ₹{pkg.price.toLocaleString('en-IN')}{pkg.period === '/mo' ? '/mo' : ' one-time'}
                    </option>
                  ))}
                  <option value="custom-other">Other / Custom Requirement</option>
                </select>
              </div>

              {/* Delivery Timeline */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  When do you need the website live?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Urgent (2–3 Days)', 'Standard (4–6 Days)', 'Planning Ahead'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setTimeline(t)}
                      className={`py-2 text-[11px] font-mono rounded-lg border transition-colors whitespace-nowrap ${
                        timeline === t
                          ? 'border-cyan-400 bg-cyan-950/20 text-cyan-300 font-medium'
                          : 'border-white/[0.08] bg-white/[0.02] text-slate-400 hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">
                  Tell us briefly about your business & requirements *
                </label>
                <textarea
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g. We are a boutique shop in Surat and want a website with photo gallery and direct WhatsApp orders..."
                  className="w-full px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                />
                {errors.details && <p className="text-rose-400 text-[11px] mt-1">{errors.details}</p>}
              </div>

              {/* Guarantees note */}
              <div className="text-[11px] text-slate-300 font-mono flex items-center gap-2 py-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>50% advance to start · 50% only after you check and approve</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Details...</span>
                ) : (
                  <>
                    <span>Submit & Get Free Quote on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
