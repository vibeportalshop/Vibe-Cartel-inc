import { ArrowUpRight, Mail } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  return (
    <footer className="bg-[#04060A] border-t border-white/[0.08] text-slate-400 text-xs">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-14 sm:py-16 border-b border-white/[0.06]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400 mb-2">
              Ready To Upgrade Your Business Website?
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Start your website from just ₹799 with 50% advance.
            </h3>
            <p className="text-slate-300 text-sm mt-2 max-w-xl font-light">
              Clear INR pricing (₹799 to ₹2,999), fast 2 to 5 days delivery, direct WhatsApp customer enquiries, and 100% full ownership.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/20 whitespace-nowrap"
            >
              <span>Get Free Callback</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="mailto:co.vibecartel@gmail.com"
              className="px-4 py-3.5 text-xs font-mono text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>co.vibecartel@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Mirror */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Brand Lockup */}
        <div className="md:col-span-5 space-y-3">
          <Logo size="md" showSubtitle={true} />
          <p className="text-xs text-slate-300 leading-relaxed font-light max-w-sm">
            Vibe Cartel Web is a specialized web development team under Vibe Cartel Inc. We build fast, modern, and reliable websites for Indian shops, businesses, and professionals with transparent pricing from ₹799 to ₹2,999.
          </p>
          <div className="pt-1 flex items-center gap-2 text-slate-400 text-xs font-mono">
            <span>Pan-India Service · 50% Advance Only</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2 space-y-2.5">
          <div className="text-white font-mono text-xs uppercase tracking-wider">
            Quick Navigation
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#services" className="hover:text-cyan-400 transition-colors">
                What We Do
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-cyan-400 transition-colors">
                Packages & Pricing
              </a>
            </li>
            <li>
              <a href="#estimator" className="hover:text-cyan-400 transition-colors">
                Price Calculator
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-cyan-400 transition-colors">
                Client Work Examples
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-cyan-400 transition-colors">
                Common FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Packages in INR */}
        <div className="md:col-span-3 space-y-2.5">
          <div className="text-white font-mono text-xs uppercase tracking-wider">
            Packages (₹799 – ₹2,999)
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#packages" className="hover:text-cyan-400 transition-colors">
                Starter Landing Page (₹799)
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-cyan-400 transition-colors">
                Standard Business 3-4 Pages (₹1,499)
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-cyan-400 transition-colors">
                Complete Company Website (₹1,999)
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-cyan-400 transition-colors">
                Online Selling Store (₹2,999)
              </a>
            </li>
            <li>
              <a href="#packages" className="hover:text-cyan-400 transition-colors">
                Monthly Website Care (₹799/mo)
              </a>
            </li>
          </ul>
        </div>

        {/* Guarantees */}
        <div className="md:col-span-2 space-y-2.5">
          <div className="text-white font-mono text-xs uppercase tracking-wider">
            Our Guarantees
          </div>
          <ul className="space-y-2 text-xs font-mono text-slate-300">
            <li>✓ 100% Full Ownership</li>
            <li>✓ 50% After Approval</li>
            <li>✓ Direct WhatsApp Button</li>
            <li>✓ Opens in &lt;1s on Phone</li>
            <li>✓ Zero Hidden Charges</li>
          </ul>
        </div>
      </div>

      {/* Mandatory Bottom Footer Attribution Bar */}
      <div className="border-t border-white/[0.06] bg-black/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          {/* Explicit requirement from user */}
          <div className="font-mono text-xs sm:text-sm text-cyan-300 font-medium tracking-wide">
            Developed and Distributed by Vibe Cartel Inc.
          </div>

          <div className="text-slate-400 text-xs font-mono">
            © 2026 Vibe Cartel Inc. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
