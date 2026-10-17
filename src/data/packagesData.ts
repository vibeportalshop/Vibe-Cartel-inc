export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  category: 'website' | 'webapp' | 'ecommerce' | 'retainer';
  price: number;
  period?: string; // e.g., '/mo' or 'one-time'
  turnaround: string;
  isPopular?: boolean;
  description: string;
  targetAudience: string;
  deliverables: string[];
  featuresHighlight: string[];
  revisions: string;
  supportDuration: string;
}

export const PACKAGES: PackageItem[] = [
  {
    id: 'starter-page',
    name: 'Digital Visiting Card & Landing Page',
    tagline: 'Single-page business website with your services, photos, and direct WhatsApp button.',
    category: 'website',
    price: 799,
    period: 'one-time',
    turnaround: '2–3 Days',
    isPopular: false,
    description: 'Perfect for small shop owners, consultants, doctors, and contractors who want an instant online presence to share with customers on WhatsApp and social media.',
    targetAudience: 'Small shop owners, freelance consultants, doctors, lawyers, tutors, local contractors.',
    deliverables: [
      'Single-page clean layout with your business logo & details',
      'Direct WhatsApp chat button for instant customer enquiries',
      'Opens in under 1 second on mobile phones, even on regular 4G',
      'Click-to-call phone button and email contact link',
      'Google Maps location embed so customers can visit your shop',
      'Free lifetime SSL green padlock security lock',
      '100% mobile-friendly on all Android phones & iPhones'
    ],
    featuresHighlight: ['Instant WhatsApp Leads', 'Mobile Super-Fast', 'Free SSL Security'],
    revisions: '2 Rounds of Free Changes',
    supportDuration: '15 Days Free Technical Support'
  },
  {
    id: 'standard-business',
    name: 'Standard Business Website (3–4 Pages)',
    tagline: 'Dedicated multi-page presence showcasing your work, services, and enquiry form.',
    category: 'website',
    price: 1499,
    period: 'one-time',
    turnaround: '4–5 Days',
    isPopular: false,
    description: 'Great for service businesses, local clinics, coaching institutes, and traders who want separate pages for Home, About Us, Services, and Contact Us.',
    targetAudience: 'Coaching centers, travel agents, clinics, repair services, traders, local dealers.',
    deliverables: [
      '3 to 4 dedicated pages (Home, About Us, Services, Contact Us)',
      'Customer enquiry form sent straight to your email & WhatsApp',
      'Photo gallery section to show your previous work and office',
      'Client reviews & testimonial section to build customer trust',
      'Google Search connection setup so people can find you online',
      'Super-fast loading speed on Jio, Airtel, and Vi 4G networks',
      'Shareable link with photo preview when sent on WhatsApp'
    ],
    featuresHighlight: ['3–4 Custom Pages', 'Photo Gallery', 'Google Search Ready'],
    revisions: '3 Rounds of Free Changes',
    supportDuration: '20 Days Free Technical Support'
  },
  {
    id: 'growth-company',
    name: 'Complete Company Website (5–6 Pages)',
    tagline: 'Comprehensive professional company website with self-edit admin panel.',
    category: 'website',
    price: 1999,
    period: 'one-time',
    turnaround: '6–8 Days',
    isPopular: true,
    description: 'Our most popular package for growing businesses, manufacturing units, and service firms who want to look established, build high trust, and edit text themselves.',
    targetAudience: 'Manufacturers, exporters, hospitals, schools, interior designers, corporate agencies.',
    deliverables: [
      '5 to 6 full pages (Home, About Us, Products/Services, Gallery, Client Reviews, Contact)',
      'Easy Admin Panel to change text and upload new photos yourself anytime',
      'Interactive quotation calculator or appointment booking form',
      'Google Search Console indexing and Google Maps setup',
      'Customer review showcase with client photos and star ratings',
      'Fast Indian cloud server hosting setup for instant page opening',
      'Website visitor counter and reports to see how many people visited'
    ],
    featuresHighlight: ['5–6 Custom Pages', 'Self-Edit Admin Panel', 'Google Search Ranking Setup'],
    revisions: '3 Rounds of Free Changes',
    supportDuration: '30 Days Free Technical Support'
  },
  {
    id: 'mini-ecommerce',
    name: 'Online Selling Store (E-Commerce)',
    tagline: 'Sell products online across India with UPI, GPay, PhonePe & WhatsApp orders.',
    category: 'ecommerce',
    price: 2999,
    period: 'one-time',
    turnaround: '8–10 Days',
    isPopular: false,
    description: 'A complete online shop where customers can view your items, add to cart, check pincode delivery, and pay directly using UPI or request Cash on Delivery.',
    targetAudience: 'Clothing & saree brands, jewelry stores, dry fruits, cosmetics, electronics, local shops.',
    deliverables: [
      'Complete online catalogue with categories and product zoom',
      'UPI QR Code & Online Payment Gateway (GPay, PhonePe, Paytm, Cards)',
      'Instant WhatsApp order notification sent to your phone for every purchase',
      'Pincode checker to show customers if delivery is available in their city',
      'Discount coupon codes & festive holiday offer banners',
      'Inventory manager: see low stock alerts and easily mark items as Sold Out',
      'Automatic customer bill generated with GST calculation'
    ],
    featuresHighlight: ['Accept UPI & GPay', 'WhatsApp Order Alerts', 'Product Catalogue'],
    revisions: '3 Rounds of Free Changes',
    supportDuration: '30 Days Free Technical Support'
  },
  {
    id: 'monthly-care',
    name: 'Monthly Website Care',
    tagline: 'We manage your website like your personal in-house IT team for peace of mind.',
    category: 'retainer',
    price: 799,
    period: '/mo',
    turnaround: 'Same-Day SLA',
    isPopular: false,
    description: 'Never worry about your website becoming outdated. Send us changes over WhatsApp and we update banners, prices, photos, and keep everything safe.',
    targetAudience: 'Busy business owners who want someone reliable to handle website updates without hassle.',
    deliverables: [
      'Regular updates: changing prices, phone numbers, text & photos',
      'Festival banners and special discount posters added regularly',
      '24/7 security monitoring against hackers and malware',
      'Speed checks to make sure the website continues opening super fast',
      'Direct WhatsApp helpline with our team — quick response',
      'No long-term contract: pause or cancel anytime you wish'
    ],
    featuresHighlight: ['Direct WhatsApp Helpline', 'Unlimited Small Edits', 'Zero Lock-in Contract'],
    revisions: 'Unlimited monthly requests',
    supportDuration: 'Continuous Monthly Support'
  }
];

export interface AddonItem {
  id: string;
  name: string;
  description: string;
  price: number;
  deliveryDays: number;
}

export const ADDONS: AddonItem[] = [
  {
    id: 'whatsapp-automation',
    name: 'Direct WhatsApp Chat & Lead Alerts',
    description: 'Direct WhatsApp chat button plus automated WhatsApp notifications to your phone whenever someone submits an enquiry.',
    price: 299,
    deliveryDays: 1
  },
  {
    id: 'google-seo',
    name: 'Google Search & Google Maps Setup',
    description: 'Connect your website to Google Search and Google Maps so local customers searching nearby can call your business directly.',
    price: 399,
    deliveryDays: 1
  },
  {
    id: 'razorpay-upi',
    name: 'UPI & Online Payment Gateway (GPay, PhonePe, Cards)',
    description: 'Allow customers to pay you instantly using UPI QR code, Google Pay, PhonePe, Paytm, Debit/Credit cards, and Net Banking.',
    price: 499,
    deliveryDays: 1
  },
  {
    id: 'admin-cms',
    name: 'Easy Admin Panel (Edit Text & Photos Yourself)',
    description: 'A super simple control panel where you or your staff can change prices, add photos, and write announcements without any coding.',
    price: 599,
    deliveryDays: 1
  },
  {
    id: 'visual-animation',
    name: 'Eye-Catching Modern Animations & Visuals',
    description: 'Smooth, impressive animations and modern hover visual effects that make your website look like a premium corporate brand.',
    price: 499,
    deliveryDays: 1
  },
  {
    id: 'urgent-rush',
    name: 'Express 24–48 Hour Rush Delivery',
    description: 'Need the website urgently for a client meeting or trade exhibition? We work day and night to deliver within 24 to 48 hours.',
    price: 699,
    deliveryDays: -2
  }
];

export interface CaseStudy {
  id: string;
  client: string;
  project: string;
  sector: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  tags: string[];
  liveFeatures: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'shree-textiles',
    client: 'Shree Silk & Handlooms',
    project: 'D2C Sarees & Ethnic Wear Store',
    sector: 'Clothing & Retail',
    year: '2026',
    summary: 'Built an online selling storefront for ₹2,999 with 1-click UPI payment and automated WhatsApp order notifications.',
    challenge: 'Old website was made on WordPress and took 6 seconds to open on phones. Customers were leaving without buying.',
    solution: 'Rebuilt from scratch with ultra-fast technology. Website now opens in under 1 second and customers pay in 30 seconds via UPI.',
    results: [
      { metric: '0.4s', label: 'Website Opening Speed' },
      { metric: '3.2x', label: 'More Online Orders' },
      { metric: '₹2,999', label: 'Total Investment' }
    ],
    tags: ['UPI & GPay', 'WhatsApp Alerts', 'Super-Fast Mobile', 'Easy Admin'],
    liveFeatures: ['UPI Quick Pay', 'WhatsApp Order Receipt', 'Pincode Delivery Check']
  },
  {
    id: 'apex-industrial',
    client: 'Apex Precision Tools & Fasteners',
    project: 'Corporate B2B Export Website',
    sector: 'Manufacturing & Export',
    year: '2026',
    summary: 'Crafted a modern corporate website for ₹1,999 with interactive product catalogue and quotation forms.',
    challenge: 'International buyers from Europe and the Middle East thought the company was inactive because of an outdated, broken website.',
    solution: 'Engineered a modern, clean website highlighting manufacturing machinery, ISO certifications, and 1-click quote enquiries.',
    results: [
      { metric: '+165%', label: 'Export Quotation Enquiries' },
      { metric: '100%', label: 'Mobile Compatibility' },
      { metric: '₹1,999', label: 'Total Investment' }
    ],
    tags: ['Product Catalogue', 'WhatsApp Enquiries', 'Fast Loading', 'Google Verified'],
    liveFeatures: ['Instant Quote Calculator', 'PDF Catalogue Download', 'ISO Certificate Showcase']
  },
  {
    id: 'dr-sharma-clinic',
    client: 'Dr. Sharma Multi-Specialty Dental',
    project: 'Doctor Clinic Website & Patient Booking',
    sector: 'Healthcare & Clinic',
    year: '2025',
    summary: 'A clean clinic website for ₹1,499 where patients can view treatments, doctor qualifications, and book appointments directly on WhatsApp.',
    challenge: 'Patients were searching for dental treatments on Google but finding rival clinics instead.',
    solution: 'Set up local Google Search optimization, WhatsApp booking button, before/after smile gallery, and patient reviews.',
    results: [
      { metric: '+85', label: 'New Patient Bookings/Mo' },
      { metric: '#1', label: 'Google Search Ranking' },
      { metric: '₹1,499', label: 'Total Investment' }
    ],
    tags: ['WhatsApp Appointments', 'Google Maps Link', 'Doctor Profile', 'Mobile Friendly'],
    liveFeatures: ['Direct WhatsApp Appointment', 'Google Map Directions', 'Patient Smile Gallery']
  }
];

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'Are your prices really between ₹799 to ₹2,999 with zero hidden charges?',
    answer: 'Yes, exactly! Our Starter Page is just ₹799, our Standard 3–4 Page Website is ₹1,499, Complete Company Website is ₹1,999, and a full Online Selling Store is ₹2,999. The price you see is the final price. We believe every Indian business deserves a fast, professional website without being overcharged.',
    category: 'pricing'
  },
  {
    question: 'How do payments work? Do I have to pay everything in advance?',
    answer: 'No. We work on a 50/50 model: you pay 50% advance to start the work (e.g. ₹400 for Starter Page), and the remaining 50% only after you check and approve the completed website on our private link. If you need a GST invoice for your business accounting, we provide that with full GST credit.',
    category: 'process'
  },
  {
    question: 'Can customers message me directly on WhatsApp from the website?',
    answer: 'Yes! Every website we make includes a direct WhatsApp button. When a customer clicks it, their WhatsApp automatically opens with a pre-filled enquiry message so you can chat with them and close the sale immediately.',
    category: 'features'
  },
  {
    question: 'Can I accept payments via UPI, Google Pay, PhonePe, and Cards?',
    answer: 'Yes. With our Online Store package (₹2,999) or Payment Gateway add-on, we connect UPI QR codes and payment gateways. The money goes directly into your bank account. Customers can pay via Google Pay, PhonePe, Paytm, Debit Card, Credit Card, or Net Banking.',
    category: 'payments'
  },
  {
    question: 'Do I get 100% ownership of my website and domain name?',
    answer: 'Yes, 100%. The domain, files, and design belong entirely to your company. Unlike some agencies that hold your website hostage and force you to pay high monthly fees forever, we hand over everything to you.',
    category: 'ownership'
  },
  {
    question: 'Can I change text, phone numbers, or photos later without calling a developer?',
    answer: 'Yes! In our Complete Company Website and Online Store packages, we give you an easy-to-use Admin Panel. You simply login, type the new text or upload a new photo, click Save, and it is live immediately.',
    category: 'support'
  }
];
