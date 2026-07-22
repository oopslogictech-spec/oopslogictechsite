import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  Code2,
  GraduationCap,
  Briefcase,
  Globe,
  Award,
  Users,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { motion } from "framer-motion";
import OopsLogicLogo from "../assets/OopsLogicLogo.png";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Custom Software Development",
    "Website Development",
    "Mobile App Development",
    "UI/UX Design",
    "AI & Automation",
    "Cloud Solutions",
  ];

  const courses = [
    "Python Full Stack",
    "Java Full Stack",
    "Data Science",
    "Data Analytics",
    "MERN Stack",
    "Interview Preparation",
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  const technologies = [
    "React",
    "Python",
    "Java",
    "Node.js",
    "AWS",
    "Docker",
    "AI",
    "MySQL",
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/oopslogictech/",
      color: "hover:bg-pink-500",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/",
      color: "hover:bg-blue-600",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/oops-logic-technologies-and-learning-center",
      color: "hover:bg-sky-600",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@oopslogic-t2n?si=QRJV-xmqVBm8cz3l",
      color: "hover:bg-red-600",
    },
 
  ];

  return (
    <footer className="relative overflow-hidden bg-[#040816] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0">

        <div className="absolute -left-32 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[170px]" />

        <div className="absolute right-[-120px] top-24 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[170px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(#38bdf8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

      </div>

      <div className="relative z-10">


      {/* ================= MAIN FOOTER ================= */}

    {/* ================= MAIN FOOTER ================= */}

<section className="mx-auto mt-20 max-w-7xl px-6 pb-20">

  {/* 3 Equal Columns */}
  <div className="grid gap-8 lg:grid-cols-3 items-start">

    {/* ========================================= */}
    {/* COMPANY */}
    {/* ========================================= */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
    >

      {/* Top Gradient */}

      <div className="h-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600" />

      <div className="p-8">

        {/* Logo */}

        <div className="flex items-center gap-5">
<div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-600 to-violet-600 shadow-2xl">
  <img
    src={OopsLogicLogo}
    alt="Oops Logic"
    className="w-14 h-14 object-contain"
  />
</div>
            
          

          <div>

            <h2 className="text-3xl font-extrabold text-white">
              Oops Logic
            </h2>

            <p className="mt-1 text-cyan-300">
              Software • AI • Training
            </p>

          </div>

        </div>

        {/* Description */}

        <p className="mt-8 leading-8 text-slate-300">

          Oops Logic delivers custom software development,
          web applications,
          mobile apps,
          AI-powered solutions,
          cloud services,
          and industry-oriented IT training that helps
          businesses grow faster and students build
          successful technology careers.

        </p>

        {/* Divider */}

        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Technologies */}

        <h4 className="font-semibold text-white">

          Technologies We Work With

        </h4>

        <div className="mt-5 flex flex-wrap gap-3">

          {technologies.map((tech) => (

            <span
              key={tech}
              className="
                rounded-full
                border border-cyan-400/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                text-cyan-300
                transition-all
                duration-300
                hover:bg-cyan-500
                hover:text-white
                hover:scale-105
              "
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Social */}

        <div className="mt-10">

          <h4 className="mb-5 font-semibold text-white">

            Follow Us

          </h4>

          <div className="flex flex-wrap gap-4">

            {socialLinks.map((social, index) => {

              const Icon = social.icon;

              return (

            
<motion.a
  key={index}
  href={social.href}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ y: -6, scale: 1.08 }}
  whileTap={{ scale: 0.95 }}
  className={`
    flex h-14 w-14 items-center justify-center
    rounded-2xl border border-white/10 bg-white/5
    transition-all duration-300 ${social.color}
  `}
>
  <Icon size={20} />
</motion.a>

              );

            })}

          </div>

        </div>

      </div>

    </motion.div>

    {/* ========================================= */}
    {/* PART 2 STARTS HERE */}
        {/* ========================================= */}
    {/* QUICK LINKS + SERVICES + COURSES */}
    {/* ========================================= */}

    {/* ========================================= */}
{/* QUICK LINKS */}
{/* ========================================= */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.15 }}
  className="lg:col-span-1"
>
  <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

    {/* Top Border */}
    <div className="h-2 bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600" />

    <div className="p-8">

      <div className="flex items-center gap-4 mb-8">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">

          <Globe className="text-white" size={28} />

        </div>

        <div>

          <h3 className="text-2xl font-bold text-white">
            Quick Links
          </h3>

          <p className="text-slate-400">
            Navigate Website
          </p>

        </div>

      </div>

      <div className="space-y-3">
{quickLinks.map((item) => (

  <Link
    key={item.name}
    to={item.href}
    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-cyan-500 hover:bg-cyan-500/10"
  >
    <span>{item.name}</span>

    <ChevronRight
      size={18}
      className="transition group-hover:translate-x-1"
    />
  </Link>

))}

      </div>

      {/* Divider */}

      <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* CTA */}

      

    </div>

  </div>
</motion.div>

    {/* ========================================= */}
    {/* PART 3 STARTS HERE */}
        {/* ========================================= */}
    {/* CONTACT + MAP */}
    {/* ========================================= */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25 }}
      className="lg:col-span-1"
    >

      
        {/* Google Map */}

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl">

          <div className="border-b border-white/10 p-6">

            <h3 className="text-xl font-bold text-white">
              Visit Our Office
            </h3>

            <p className="mt-2 text-slate-400">
              We'd love to meet you.
            </p>

          </div>

          <iframe
            title="Oops Logic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14176.120840595482!2d76.97238475084308!3d11.01754121487953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85834f5cda3a9%3A0x25d87d9b5778aeb6!2sGrand%20CAG%20Central!5e1!3m2!1sen!2sin!4v1784189971813!5m2!1sen!2sin"
            loading="lazy"
            className="h-72 w-full"
          />

        </div>

      

    </motion.div>

  </div>

</section>


      {/* ================= COPYRIGHT ================= */}

      <section className="border-t border-white/10 bg-black/20">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 lg:flex-row">

          <div>

            <h4 className="text-lg font-semibold text-white">

              © {currentYear} Oops Logic

            </h4>

            <p className="mt-2 text-sm text-slate-400">

              Software Development • IT Training • AI Solutions •
              Career Development

            </p>

          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm">

            <a
              href="#"
              className="text-slate-400 transition hover:text-cyan-300"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-slate-400 transition hover:text-cyan-300"
            >
              Terms & Conditions
            </a>
<a
  href="https://www.google.com/maps/place/Grand+CAG+Central/@11.0175412,76.9723848,3255m/data=!3m1!1e3!4m6!3m5!1s0x3ba85834f5cda3a9:0x25d87d9b5778aeb6!8m2!3d11.0175413!4d76.9914391!16s%2Fg%2F11b81s18qj?entry=ttu&g_ep=EgoyMDI2MDcxNC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
  className="text-slate-400 transition hover:text-cyan-300"
>
  View Location
</a>

          </div>

          {/* Back To Top */}

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 hover:scale-110"
          >

            <ArrowUp size={22} />

          </button>

        </div>

      </section>
</div>
    </footer>
  );
}