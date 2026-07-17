import { motion } from "framer-motion";
import {
  Globe,
  MonitorSmartphone,
  Smartphone,
  Megaphone,
  Bot,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";
import {
  Lightbulb,
  Users,

  Award,
  HeartHandshake,
  Sparkles,
    Cpu,
  Briefcase,
  ShieldCheck,
  Zap,
Target, 
Rocket,
 
  BrainCircuit,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Creating modern digital solutions through continuous innovation.",
  },
 
  {
    icon: Users,
    title: "Collaboration",
    description: "Working together with clients to achieve shared success.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "Delivering high-quality solutions that exceed expectations.",
  },
  {
    icon: Award,
    title: "Quality",
    description: "Committed to performance, reliability, and continuous improvement.",
  },
 
];
import { Link } from "react-router-dom";
import {  } from "lucide-react";
// Import your company image here
// import office from "../assets/about-office.jpg";
const features = [
{
icon: Cpu,
title:"Modern Technology Stack",
desc:"Build with React, Node.js, Python, AI, Cloud, and scalable enterprise technologies."
},
{
icon: Briefcase,
title:"Business-Driven Solutions",
desc:"Custom software designed to improve productivity, automation, and operational efficiency."
},
{
icon: BrainCircuit,
title:"AI & Intelligent Automation",
desc:"Leverage AI-powered solutions to streamline workflows and enhance decision-making."
},
{
icon: GraduationCap,
title:"Industry-Ready Training",
desc:"Hands-on learning with live projects, mentorship, and placement-focused programs."
},
{
icon: ShieldCheck,
title:"Secure & Scalable",
desc:"Enterprise-grade applications built with performance, security, and scalability in mind."
},
{
icon: Users,
title:"Dedicated Expert Team",
desc:"Experienced developers, trainers, and consultants committed to your success."
},
{
icon: Zap,
title:"Agile Delivery",
desc:"Fast development cycles with transparent communication and timely project delivery."
},
{
icon: Globe,
title:"Long-Term Partnership",
desc:"Ongoing maintenance, upgrades, and strategic technology consulting beyond launch."
}
];
const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "High-performance websites designed for speed, security, and business growth.",
    features: [
      "Corporate Websites",
      "E-Commerce Solutions",
      "Landing Pages",
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Software Development",
    description:
      "Custom software solutions that streamline operations and improve productivity.",
    features: [
      "ERP & CRM",
      "Business Automation",
      "Custom Applications",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Scalable Android and cross-platform mobile applications for modern businesses.",
    features: [
      "Android Apps",
      "Cross Platform",
      "App Maintenance",
    ],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Result-driven digital marketing strategies that strengthen your online presence.",
    features: [
      "SEO",
      "Google Ads",
      "Social Media",
    ],
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Intelligent automation and AI-powered tools that transform business processes.",
    features: [
      "AI Chatbots",
      "Automation",
      "AI Integration",
    ],
  },
  {
    icon: GraduationCap,
    title: "IT Training",
    description:
      "Industry-oriented training programs with practical learning and placement support.",
    features: [
      "Full Stack",
      "Python & AI",
      "Career Support",
    ],
  },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
{/* Background */}
{/* ================================================= */}

<div className="absolute inset-0 -z-10 overflow-hidden">

  {/* Main Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#071426] to-[#050816]" />

  {/* Glow */}
  <div className="absolute top-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

  <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-violet-500/10 blur-[140px]" />

  {/* Grid */}
  <div
    className="absolute inset-0 opacity-[0.05]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
    }}
  />

</div>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative max-w-7xl mx-auto px-6 pt-36 pb-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          
<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

            <span className="text-cyan-400 uppercase tracking-[4px] text-sm">

              WHO WE ARE

            </span>
<h1 className="text-5xl lg:text-7xl font-black leading-tight">

  Innovative

  <span className="block bg-gradient-to-r from-[#2563eb] via-sky-500 to-cyan-500 bg-clip-text text-transparent">
    IT Services
  </span>

  & Professional Training

</h1>
           <p className="mt-8 text-slate-300 leading-8">
  Founded in 2026, <span className="font-semibold text-white">Oops Logic Technologies & Learning Center </span>
   delivers innovative digital solutions and industry-focused training programs.
  We specialize in Website Development, Software Development, Mobile App Development,
  AI Solutions, Cloud Technologies, Digital Marketing, and career-oriented IT training
  designed to prepare students and businesses for the evolving technology landscape.
</p>

            <p className="mt-6 text-slate-300 leading-8">

             
            </p>

            <div className="mt-10 space-y-5">

              {[
                "Industry-focused practical learning",
                "Innovative software solutions",
                "Experienced mentors",
                "Latest technologies & AI",
                "Career-oriented training",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    className="text-cyan-400"
                    size={22}
                  />

                  <span className="text-slate-200">

                    {item}

                  </span>

                </div>
              ))}

            </div>
             <div className="mt-12 flex flex-wrap gap-5">

  {/* Services Button */}
  <Link
    to="/services"
    className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/40"
  >
    Explore Services

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/916369868846?text=Hi%20Career%20Ladder,%20I'm%20interested%20in%20a%20Free%20Consultation."
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2 rounded-xl border border-green-500/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-green-500/10"
  >
    Book Free Consultation

    <ArrowRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </a>

</div>

          </motion.div>
<motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
>
  <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
      <Sparkles
        size={16}
        className="text-[#2563eb]"
      />

      <span className="text-sm font-semibold text-[#2563eb]">
        OUR CORE VALUES
      </span>
    </div>

    {/* Heading */}
    <h2 className="mt-6 text-4xl font-bold text-slate-900 leading-tight">
      Building Trust Through

      <span className="block text-[#2563eb]">
        Strong Values
      </span>
    </h2>

    {/* Description */}
    <p className="mt-5 text-slate-600 leading-8">
      At Oops Logic Technologies, our values define every
      solution we develop, every partnership we build,
      and every student we mentor.
    </p>

    {/* Values */}
    <div className="mt-10 space-y-4">
      {values.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.12,
            }}
            className="group flex items-start gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563eb]/30 hover:bg-white hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-[#2563eb]">
              <Icon
                size={26}
                className="text-[#2563eb] group-hover:text-white"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>

  </div>
</motion.div>
        </div>

      </section>      
{/* ================================================= */}
{/* MISSION & VISION */}
{/* ================================================= */}


<section className="relative max-w-7xl mx-auto px-6 py-28">

  {/* Section Heading */}
  <div className="mx-auto mb-20 max-w-3xl text-center">

    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
      <Sparkles size={15} />
      Our Purpose
    </div>

    <h2 className="mt-6 text-4xl font-black md:text-6xl">
      Mission &
      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        {" "}Vision
      </span>
    </h2>

    <p className="mt-6 text-lg leading-8 text-slate-400">
      Guided by innovation, excellence, and continuous learning,
      we build technology solutions that create meaningful impact.
    </p>

  </div>

  {/* Cards */}
  <div className="grid gap-8 lg:grid-cols-2">

    {/* Mission */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
    >

      {/* Glow */}
      <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl transition-opacity group-hover:opacity-100" />

      <div className="relative z-10">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400">
          <Target size={30} />
        </div>

        <span className="mt-8 inline-block text-sm font-medium uppercase tracking-[3px] text-cyan-300">
          Our Mission
        </span>

        <h3 className="mt-3 text-3xl font-bold">
          Empower Through Technology
        </h3>

        <p className="mt-6 leading-8 text-slate-300">
          We empower students, professionals, startups, and businesses
          through innovative software solutions, practical learning,
          and future-ready technologies that drive sustainable growth.
        </p>

      </div>

    </motion.div>

    {/* Vision */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .7, delay: .15 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl border border-purple-400/20 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:border-purple-400/40 hover:bg-white/10"
    >

      {/* Glow */}
      <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-purple-500/10 blur-3xl transition-opacity group-hover:opacity-100" />

      <div className="relative z-10">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-400">
          <Rocket size={30} />
        </div>

        <span className="mt-8 inline-block text-sm font-medium uppercase tracking-[3px] text-purple-300">
          Our Vision
        </span>

        <h3 className="mt-3 text-3xl font-bold">
          Shape the Future
        </h3>

        <p className="mt-6 leading-8 text-slate-300">
          To become one of India's most trusted technology and learning
          organizations by delivering world-class IT services,
          innovation, and industry-focused education that prepares
          tomorrow's leaders.
        </p>

      </div>

    </motion.div>

  </div>

</section>

{/* ================================================= */}
{/* WHAT WE OFFER */}
{/* ================================================= */}
<section className="relative overflow-hidden bg-[#050816] py-28 text-white">

  {/* Background */}
  <div className="absolute inset-0 -z-10">

    <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#071426] to-[#050816]" />

    <div className="absolute top-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

    <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[140px]" />

    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />

  </div>

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >

      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
        <Sparkles size={15} />
        OUR SERVICES
      </div>

      <h2 className="mt-6 text-5xl font-black md:text-6xl">
        Technology
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
          {" "}Solutions
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        We create scalable digital solutions that help businesses,
        startups, and organizations accelerate growth through
        innovation and modern technology.
      </p>

    </motion.div>

    {/* Service Cards */}
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {services.map((service, index) => {

        const Icon = service.icon;

        return (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]"
          >

            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 transition duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                <Icon size={30} />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                {service.description}
              </p>

              <div className="mt-8 space-y-3">

                {service.features.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2
                      size={18}
                      className="text-cyan-400"
                    />

                    <span className="text-slate-300">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              

            </div>

          </motion.div>

        );

      })}

    </div>

  </div>

</section>

{/* ===== Continue with Part 3 below ===== */}
{/* ================================================= */}
{/* WHY CHOOSE US */}
{/* ================================================= */}
<section className="relative overflow-hidden bg-[#050816] py-28 text-white">

  {/* Background */}
  <div className="absolute inset-0 -z-10 overflow-hidden">

    {/* Gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#040816] via-[#071426] to-[#050816]" />

    {/* Glow */}
    <div className="absolute top-0 left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

    <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[140px]" />

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />

  </div>

  <div className="relative mx-auto max-w-7xl px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >

      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
        <Sparkles size={15} />
        WHY CHOOSE OOPS LOGIC
      </div>

      <h2 className="mt-6 text-5xl font-black md:text-6xl">
        Delivering
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
          {" "}Technology That Drives Growth
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        We help organizations accelerate digital transformation and
        prepare future professionals through innovative software
        solutions, AI-powered technologies, practical training,
        and long-term technical support.
      </p>

    </motion.div>

    {/* Cards */}
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {features.map((item, index) => {

        const Icon = item.icon;

        return (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]"
          >

            {/* Glow */}
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative z-10">

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-110">
                <Icon size={30} />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 leading-8 text-slate-400">
                {item.desc}
              </p>

            </div>

          </motion.div>

        );

      })}

    </div>

  </div>

</section>
{/* ================================================= */}
{/* FEATURE HIGHLIGHT */}
{/* ================================================= */}

<section className="relative max-w-7xl mx-auto px-6 pb-28">

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-white/5 to-purple-500/10 p-12 backdrop-blur-xl"
  >

    <div className="grid lg:grid-cols-2 gap-14 items-center">

      <div>

        <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
          OUR COMMITMENT
        </span>

        <h2 className="mt-5 text-5xl font-black">

          We Don't Just Build
          <span className="block text-cyan-400">

            Software...

          </span>

          We Build Careers &
          Business Success.

        </h2>

      </div>

      <div className="space-y-5">

        {[
          "Modern Website & Software Development",
          "Industry-Oriented IT Training",
          "Live Project Experience",
          "Placement & Career Guidance",
          "AI Powered Business Solutions",
          "Long-Term Technical Support",
        ].map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
          >

            <div className="h-3 w-3 rounded-full bg-cyan-400" />

            <span className="text-slate-200">

              {item}

            </span>

          </div>

        ))}

      </div>

    </div>

  </motion.div>

</section>



      {/* ================================================= */}
      {/* FINAL CTA */}
      {/* ================================================= */}
{/* 
      <section className="relative max-w-7xl mx-auto px-6 pb-32">

        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: .95 }}
          viewport={{ once: true }}
          className="rounded-[40px] overflow-hidden border border-cyan-400/20 bg-gradient-to-r from-cyan-500/20 via-[#081224] to-purple-500/20 p-14"
        >

          <div className="text-center">

            <h2 className="text-5xl lg:text-6xl font-black leading-tight">

              Let's Build Something

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">

                Amazing Together

              </span>

            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-300 leading-8">

              Whether you're looking for innovative IT solutions or want to
              start your career in technology, Oops Logic Technologies &
              Learning Center is here to help you succeed.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-400 transition">

                Start Your Project

              </button>

              <button className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold hover:bg-white/10 transition">

                Join Our Training

              </button>

            </div>

          </div>

        </motion.div>

      </section> */}

    </section>
  );
}
