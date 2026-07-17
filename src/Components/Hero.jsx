import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Sparkles,
  Code2,
  Briefcase,
  Globe,
  GraduationCap,MessageCircle,
  Bot,
  Cloud,
} from "lucide-react";
const cards = [
  {
    title: "Custom Software",
    description:
      "Scalable web, mobile & enterprise applications tailored to your business.",
    icon: Code2,
    color: "from-cyan-500 to-blue-600",
    badge: "100+ Projects",
  },
  {
    title: "Career Programs",
    description:
      "Industry-ready training with live projects, internships & placement support.",
    icon: GraduationCap,
    color: "from-violet-500 to-fuchsia-600",
    badge: "1500+ Students",
  },
  {
    title: "AI & Automation",
    description:
      "AI chatbots, workflow automation and intelligent business solutions.",
    icon: Bot,
    color: "from-emerald-500 to-teal-600",
    badge: "Latest AI",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS, Azure, Docker and secure cloud infrastructure for modern businesses.",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    badge: "99.9% Uptime",
  },
];
const handleWhatsApp = () => {
  const phone = "6369868846"; // Replace with your WhatsApp number
  const message = encodeURIComponent(
    "Hi, I'm interested in your IT Training Program. Please share more details."
  );

  window.open(
    `https://wa.me/${phone}?text=${message}`,
    "_blank"
  );
};
export default function Hero() {
   
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-25%] left-[-10%] w-[650px] h-[650px] bg-blue-600/20 rounded-full blur-[170px]" />
        <div className="absolute bottom-[-25%] right-[-10%] w-[650px] h-[650px] bg-cyan-500/15 rounded-full blur-[170px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:22px_22px]" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-cyan-300 backdrop-blur">
              <Sparkles size={16} />
              Software Development & IT Training Company
            </div>

            {/* HEADLINE (SEO H1 STYLE) */}
            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
             Empowering Businesses with Smart Technology<br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
               & Future-Ready Skills
              </span>
            </h1>

            {/* DESCRIPTION (SEO IMPORTANT) */}
            <p className="mt-6 max-w-xl text-lg text-slate-300 leading-8">
              We are a software development company that builds websites,
              mobile applications, and business software solutions.
              <br /><br />
              We also provide IT training programs with real-world projects to
              help students become job-ready developers and get placed in top companies.
            </p>

      {/* CTA BUTTONS */}
<div className="mt-12 flex flex-col gap-4 sm:flex-row">

  {/* Services Button */}
  <Link
    to="/services"
    className="group relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-2xl shadow-cyan-500/25 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-cyan-500/40"
  >
    {/* Shine Effect */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

    

    <span className="relative z-10">
      Explore Our Services
    </span>

  </Link>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/916369868846"
    target="_blank"
    rel="noreferrer"
    className="group relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl border border-green-500/20 bg-gradient-to-r from-green-500/15 to-emerald-500/15 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/20"
  >
    {/* Glow */}
    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(34,197,94,.18),transparent_70%)]" />

    <MessageCircle className="relative z-10 mr-2 h-5 w-5 text-green-400 transition-transform duration-300 group-hover:scale-110" />

    <span className="relative z-10">
      Join Training Program
    </span>

    <ArrowRight
      size={18}
      className="relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-2"
    />
  </a>

</div>
           
           
          </div>

          {/* RIGHT IMAGE */}
    <div className="relative flex items-center justify-center">

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                  <div className="w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
                </div>


                {/* Grid */}
              <div className="grid grid-cols-2 gap-6">
                {cards.map((card, index) => {
                  const Icon = card.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.2 },
                      }}
                      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl hover:border-cyan-400/30 hover:bg-white/10"
                    >
                      {/* Background Glow */}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent" />

                      {/* Icon */}
                      <div
                        className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${card.color} shadow-lg`}
                      >
                        <Icon size={28} className="text-white" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="mt-5 text-xl font-bold text-white">
                          {card.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          {card.description}
                        </p>

                      </div>
                    </motion.div>
                  );
                })}
              </div>
      </div>
      </div>
      </div>
    </section>
  );
}