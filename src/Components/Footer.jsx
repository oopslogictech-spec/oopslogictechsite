import {
  Mail,
  Phone,
  MapPin,
  Camera,
  Play,
  BriefcaseBusiness,
  Globe,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Web Development',
    'App Development',
    'UI/UX Design',
    'Automation Testing',
    'Corporate Training',
    'Data Analytics',
    'Data Science',
  ];

  const courses = [
    'Python Full Stack',
    'Java Full Stack',
    'MySQL / Database',
    'Data Science',
    'Data Analytics',
    'Interview Preparation',
  ];



const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
];

  return (
    <footer className="relative overflow-hidden bg-[#07111f] text-white pt-20 pb-8">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6rem] top-10 h-72 w-72 rounded-full bg-[#2563eb]/20 blur-3xl" />
        <div className="absolute right-[-5rem] top-20 h-64 w-64 rounded-full bg-[#7c3aed]/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#06b6d4]/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Top CTA */}
        <div className="mb-14 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
          <div className="flex flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                <Sparkles className="h-4 w-4" />
                Oops Logic
              </div>

              <h2
                className="text-3xl font-bold leading-tight text-white lg:text-4xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Build Skills, Launch Careers, and Create Better Products
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                We help students, professionals, and businesses with modern IT
                training, full stack development, automation, and data-driven solutions.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start rounded-2xl bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#06b6d4] px-7 py-4 font-semibold text-white shadow-[0_18px_40px_rgba(37,99,235,0.30)] transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl shadow-[0_16px_50px_rgba(0,0,0,0.14)]">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2563eb] via-[#3b82f6] to-[#06b6d4] shadow-[0_12px_30px_rgba(37,99,235,0.30)]">
                  <span
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    OL
                  </span>
                </div>

                <div>
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Oops Logic
                  </h3>
                  <p className="text-sm font-medium text-blue-300">
                    Build • Learn • Grow
                  </p>
                </div>
              </div>

              <p className="mb-7 leading-7 text-slate-300">
                Empowering careers and helping businesses grow through
                industry-ready IT training, live projects, and modern software solutions.
              </p>

              <div className="mb-8 flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
                      index === 0
                        ? 'bg-[#2563eb]/20 hover:bg-[#2563eb]'
                        : index === 1
                        ? 'bg-[#06b6d4]/20 hover:bg-[#06b6d4]'
                        : index === 2
                        ? 'bg-[#ec4899]/20 hover:bg-[#ec4899]'
                        : 'bg-[#ef4444]/20 hover:bg-[#ef4444]'
                    }`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              <div className="space-y-4 rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
                  <div>
                    <div className="mb-1 text-sm text-slate-400">Phone</div>
                    <a
                      href="tel:+919876543210"
                      className="font-medium text-slate-200 transition-colors hover:text-white"
                    >
                      +91 6369868846
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
                  <div>
                    <div className="mb-1 text-sm text-slate-400">Email</div>
                    <a
                      href="mailto:oopslogictech@gmail.com"
                      className="font-medium text-slate-200 transition-colors hover:text-white"
                    >
                      oopslogictech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-pink-400" />
                  <div>
                    <div className="mb-1 text-sm text-slate-400">Location</div>
                    <div className="font-medium text-slate-200">
                      Coimbatore, Tamil Nadu, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h3
                className="mb-6 text-lg font-bold text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Services
              </h3>

              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="group inline-flex items-center gap-2 text-slate-300 transition-all duration-300 hover:text-blue-300"
                    >
                      <ChevronRight className="h-4 w-4 text-blue-400 transition-transform duration-300 group-hover:translate-x-1" />
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Courses */}
          <div className="lg:col-span-2">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <h3
                className="mb-6 text-lg font-bold text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Courses
              </h3>

              <ul className="space-y-3">
                {courses.map((course) => (
                  <li key={course}>
                    <a
                      href="#courses"
                      className="group inline-flex items-center gap-2 text-slate-300 transition-all duration-300 hover:text-cyan-300"
                    >
                      <ChevronRight className="h-4 w-4 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1" />
                      <span>{course}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-4">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div>
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Find Us
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Visit us for IT training and consultation
                  </p>
                </div>

                <a
                  href="#contact"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  Directions
                </a>
              </div>

              <div className="overflow-hidden rounded-[20px] border border-white/10 bg-black/20 p-2">
                <div className="overflow-hidden rounded-[16px]">
                  <iframe
                    title="Oops Logic Location Map"
                    src="https://www.google.com/maps?q=Coimbatore,Tamil%20Nadu,India&z=13&output=embed"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-sm leading-6 text-slate-300">
                  We support students, freshers, startups, and businesses with
                  software services, IT training, live projects, and career guidance.
                </p>
              </div>
            </div>
          </div>
        </div>

      
        
      </div>
    </footer>
  );
}