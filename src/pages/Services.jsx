
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Smartphone,
  LaptopMinimal,
  MonitorSmartphone,
} from "lucide-react";import {

  Coffee,
  Bug,
  Database,
 
  Bot,
  CloudCog,
  BarChart3,
  Clock3,
  Award,
  Briefcase,
 
} from "lucide-react";
import {
  Globe,
 
  MonitorCog,
  Palette,
 
  DatabaseZap,
  Settings,
  Workflow,

} from "lucide-react";
import {
  Lightbulb,
  Users,


  HeartHandshake,
  Sparkles,
    Cpu,
 GraduationCap,
  Zap,
Target, 
Rocket,
 

}  from "lucide-react";
import { motion } from "framer-motion";
import "../style/services.css"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const features = [
    "Custom Software",
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "AI & ML",
    "UI/UX Design",
    "DevOps",
    "Corporate Training",
  ];
  const faqs = [
  {
    question: "Do you provide placement support?",
    answer:
      "Yes. We provide placement assistance through resume building, mock interviews, aptitude preparation, technical interview guidance, and job referrals for eligible students.",
  },
  {
    question: "Which technologies do you teach?",
    answer:
      "We offer training in Python Full Stack, Java Full Stack, MERN Stack, Automation Testing, Data Science, Artificial Intelligence, Machine Learning, DevOps, Cloud Computing, Power BI, SQL, and other industry-relevant technologies.",
  },
  {
    question: "Do you develop custom software?",
    answer:
      "Yes. We develop custom web applications, enterprise software, CRM systems, ERP solutions, eCommerce platforms, mobile applications, APIs, and cloud-based business solutions tailored to your requirements.",
  },
  {
    question: "Can startups hire your development team?",
    answer:
      "Absolutely. We work with startups, SMEs, and enterprises to build MVPs, scalable products, SaaS platforms, and digital transformation solutions.",
  },
  {
    question: "Do you provide AMC and maintenance services?",
    answer:
      "Yes. We offer Annual Maintenance Contracts (AMC), application monitoring, security updates, bug fixes, performance optimization, server maintenance, and long-term technical support.",
  },
  {
    question: "Do you conduct corporate training programs?",
    answer:
      "Yes. We provide customized corporate training for organizations in software development, automation testing, cloud technologies, DevOps, AI, data analytics, cybersecurity, and other emerging technologies.",
  },
];
 const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };
  const features1 = [
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
const trainingCourses = [
  {
    icon: <Code2 size={38} />,
    title: "Python Full Stack",
    duration: "4 Months",
  },
  {
    icon: <Coffee size={38} />,
    title: "Java Full Stack",
    duration: "4 Months",
  },
  {
    icon: <Bug size={38} />,
    title: "Automation Testing",
    duration: "3 Months",
  },
  {
    icon: <Database size={38} />,
    title: "Data Science",
    duration: "5 Months",
  },
  {
    icon: <BrainCircuit size={38} />,
    title: "Machine Learning",
    duration: "4 Months",
  },
  {
    icon: <Bot size={38} />,
    title: "Artificial Intelligence",
    duration: "5 Months",
  },
  {
    icon: <CloudCog size={38} />,
    title: "DevOps",
    duration: "3 Months",
  },
  {
    icon: <BarChart3 size={38} />,
    title: "Power BI",
    duration: "2 Months",
  },
];const services = [
  {
    icon: <Globe size={42} />,
    title: "Website Development",
    description:
      "Responsive, high-performance business websites, eCommerce platforms, and CMS solutions.",
  },
  {
    icon: <Smartphone size={42} />,
    title: "Mobile App Development",
    description:
      "Native and cross-platform Android & iOS applications with seamless user experiences.",
  },
  {
    icon: <MonitorCog size={42} />,
    title: "Custom Software",
    description:
      "Tailor-made software solutions that automate business processes and improve productivity.",
  },
  {
    icon: <Palette size={42} />,
    title: "UI / UX Design",
    description:
      "Modern, intuitive, and user-centered interfaces designed for exceptional digital experiences.",
  },
  {
    icon: <Cloud size={42} />,
    title: "Cloud Solutions",
    description:
      "Cloud migration, deployment, DevOps, hosting, and infrastructure management services.",
  },
  {
    icon: <DatabaseZap size={42} />,
    title: "API Development",
    description:
      "Secure REST APIs, third-party integrations, payment gateways, and enterprise connectivity.",
  },
  {
    icon: <Settings size={42} />,
    title: "Maintenance & Support",
    description:
      "Application monitoring, security updates, bug fixing, and ongoing technical support.",
  },
  {
    icon: <Workflow size={42} />,
    title: "Digital Transformation",
    description:
      "Modernize your business using AI, automation, cloud technologies, and data-driven solutions.",
  },
];
  return (
    
    <><section className="relative overflow-hidden bg-[#040816]">
      {/* ================= Background ================= */}

      <div className="absolute inset-0">

        {/* Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Glow */}
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      </div>

      {/* ================= Container ================= */}

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* ====================================================== */}
          {/* LEFT CONTENT */}
          {/* ====================================================== */}

          <div>

            {/* Badge */}

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-xl">

              <CheckCircle2 size={16} />

               IT Services • Professional Training

            </span>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">

              Engineering

              <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">

                Digital Excellence

              </span>

              <span className="block">

                For Future Businesses

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">

              We empower startups, SMEs, and enterprises with
              custom software development, web applications,
              mobile apps, cloud infrastructure, AI-powered
              solutions, enterprise platforms, DevOps services,
              and industry-focused software training that drives
              innovation and business growth.

            </p>

            {/* Feature Chips */}

            <div className="mt-10 flex flex-wrap gap-3">

              {features.map((item) => (

                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-xl transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300"
                >
                  {item}
                </div>

              ))}

            </div>

            {/* CTA */}
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

            {/* Trusted */}

              

        

          </div>

          {/* ====================================================== */}
          {/* RIGHT SIDE COMES IN PART 2 */}
          {/* ====================================================== */}

         {/* ====================================================== */}
{/* RIGHT SIDE */}
{/* ====================================================== */}

<div className="relative hidden min-h-[700px] items-center justify-center lg:flex">

  {/* Outer Ring */}
  <div className="absolute h-[620px] w-[620px] rounded-full border border-cyan-500/10"></div>

  {/* Middle Ring */}
  <div className="absolute h-[500px] w-[500px] rounded-full border border-cyan-500/15"></div>

  {/* Inner Ring */}
  <div className="absolute h-[380px] w-[380px] rounded-full border border-cyan-500/20"></div>

  {/* Glow */}
  <div className="absolute h-[250px] w-[250px] rounded-full bg-cyan-500/30 blur-[120px]" />

  {/* ================================================= */}
  {/* CENTER LAPTOP */}
  {/* ================================================= */}

  <div className="relative z-20">

    <div className="absolute inset-0 rounded-full bg-cyan-500 blur-[70px] opacity-60"></div>

    <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-700 shadow-[0_0_80px_rgba(34,211,238,.45)]">

      <LaptopMinimal
        size={74}
        className="text-white"
      />

    </div>

  </div>

  {/* ===================== TOP ===================== */}

  <div className="absolute top-8 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-cyan-400">

    <BrainCircuit
      size={36}
      className="mx-auto text-cyan-400"
    />

    <p className="mt-2 text-center text-sm font-medium text-white">
      Artificial Intelligence
    </p>

  </div>

  {/* ===================== LEFT ===================== */}

  <div className="absolute left-2 top-40 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-cyan-400">

    <Code2
      size={34}
      className="mx-auto text-cyan-400"
    />

    <p className="mt-2 text-center text-sm text-white">
      Software Development
    </p>

  </div>

  {/* ===================== RIGHT ===================== */}

  <div className="absolute right-2 top-40 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-cyan-400">

    <Cloud
      size={34}
      className="mx-auto text-cyan-400"
    />

    <p className="mt-2 text-center text-sm text-white">
      Cloud Solutions
    </p>

  </div>

  {/* ===================== BOTTOM LEFT ===================== */}

  <div className="absolute bottom-28 left-8 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-cyan-400">

    <ShieldCheck
      size={34}
      className="mx-auto text-cyan-400"
    />

    <p className="mt-2 text-center text-sm text-white">
      Cyber Security
    </p>

  </div>

  {/* ===================== BOTTOM RIGHT ===================== */}

  <div className="absolute bottom-28 right-8 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-cyan-400">

    <MonitorSmartphone
      size={34}
      className="mx-auto text-cyan-400"
    />

    <p className="mt-2 text-center text-sm text-white">
      Enterprise Apps
    </p>

  </div>

  {/* ===================== VERY BOTTOM ===================== */}

  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:scale-110 hover:border-cyan-400">

    <Smartphone
      size={34}
      className="mx-auto text-cyan-400"
    />

    <p className="mt-2 text-center text-sm text-white">
      Mobile Apps
    </p>

  </div>

  {/* Floating Dots */}

  <div className="absolute left-32 top-24 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>

  <div className="absolute right-20 top-72 h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_15px_#60a5fa]"></div>

  <div className="absolute left-24 bottom-20 h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_15px_#7dd3fc]"></div>

  <div className="absolute right-32 bottom-10 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>

</div>

        </div>

      </div>
    </section>
 


    <section className="relative overflow-hidden bg-[#040816] py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-cyan-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
            Software Training
          </span>

         
            <h2 className="mt-6 text-5xl  lg:text-6xl font-bold ">
  Industry-Focused
    <span className="block text-[#2563eb]">
      Software Training
    </span>
  </h2>


          <p className="mt-6 text-lg leading-8 text-slate-600">
            Learn from industry experts with practical, project-based
            training designed to prepare students and professionals
            for successful careers in today's IT industry.
          </p>

        </div>

        {/* Grid */}

       {/* ================= Training Cards ================= */}

<div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">

  {trainingCourses.map((course) => (

    <div
      key={course.title}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/60 bg-gradient-to-b from-[#0b1220] to-[#111827] p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_25px_60px_rgba(6,182,212,.25)]"
    >

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 transition duration-500 group-hover:opacity-100"></div>

      {/* Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
        {course.icon}
      </div>

      {/* Course Title */}
      <h3 className="mt-8 text-2xl font-bold leading-snug text-white">
        {course.title}
      </h3>

      {/* Duration */}
      <div className="mt-5 flex items-center gap-2 text-slate-400">
        <Clock3 size={18} className="text-cyan-400" />
        <span>{course.duration}</span>
      </div>

      {/* Divider */}
      <div className="my-6 h-px bg-white/10"></div>

      {/* Features */}
      <div className="flex-1 space-y-4">

        <div className="flex items-center gap-3">
          <Briefcase size={18} className="text-cyan-400" />
          <span className="text-slate-300">
            Live Industry Projects
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Award size={18} className="text-cyan-400" />
          <span className="text-slate-300">
            Industry Certification
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Briefcase size={18} className="text-cyan-400" />
          <span className="text-slate-300">
            Placement Assistance
          </span>
        </div>

        <div className="flex items-center gap-3">
          <ArrowRight size={18} className="text-cyan-400" />
          <span className="text-slate-300">
            Real-Time Assignments
          </span>
        </div>

      </div>

      {/* Button */}
      

    </div>

  ))}

</div>
      </div>
    </section>
 <section className="relative overflow-hidden  bg-[#040816] py-24">
  <div className="absolute inset-0 -z-10 overflow-hidden">

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
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

         <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
  IT Services
</span>

<h2 className="mt-6 text-5xl font-black text-white lg:text-6xl">
  Professional
  <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
    IT Services
  </span>
</h2>

<p className="mt-6 text-lg leading-8 text-slate-400">
  We build innovative digital solutions that help startups,
  SMEs, and enterprises accelerate growth through modern
  software engineering and cloud technologies.
</p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (

          <div
  key={service.title}
  className="group relative flex flex-col overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]"
>

  {/* Glow */}
  <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

  <div className="relative z-10">

    {/* Icon */}
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 transition duration-500 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">

      {service.icon}

    </div>

    {/* Title */}
    <h3 className="mt-8 text-2xl font-bold text-white">

      {service.title}

    </h3>

    {/* Description */}
    <p className="mt-5 flex-1 leading-8 text-slate-400">

      {service.description}

    </p>


  </div>

</div>
          ))}

        </div>

      </div>
    </section>
    
<section className="relative overflow-hidden bg-[#040816] py-28 text-white">

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

      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.15em] text-cyan-300">
        <Sparkles size={15} />
        WHY CHOOSE OOPS LOGIC
      </span>

      <h2 className="mt-6 text-5xl font-black lg:text-6xl">
        Delivering
        <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
          Technology That Drives Growth
        </span>
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        We help organizations accelerate digital transformation and prepare
        future professionals with innovative software solutions,
        AI-powered technologies, practical training, and long-term
        technical support.
      </p>

    </motion.div>

    {/* Feature Cards */}
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {features1.map((item, index) => {

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
            className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-[0_20px_60px_rgba(6,182,212,0.18)]"
          >

            {/* Glow */}
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative z-10">

              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                <Icon size={30} />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-xl font-bold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-slate-400">
                {item.desc}
              </p>

            </div>

          </motion.div>

        );

      })}

    </div>

  </div>

</section>
<section className="relative overflow-hidden bg-[#040816] py-24 text-white">

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

  <div className="relative mx-auto max-w-5xl px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >

      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.15em] text-cyan-300">
        <Sparkles size={15} />
        Frequently Asked Questions
      </span>

      <h2 className="mt-6 text-5xl font-black lg:text-6xl">
        Got Questions?
        <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-transparent">
          We've Got Answers
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        Find answers to the most common questions about our software
        training programs, IT services, software development,
        and corporate solutions.
      </p>

    </motion.div>

    {/* FAQ */}
    <div className="mt-16 space-y-6">

      {faqs.map((faq, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          className="group overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
        >

          <button
            onClick={() => toggleFAQ(index)}
            className="flex w-full items-center justify-between px-8 py-6 text-left"
          >

            <h3 className="text-lg font-semibold text-white">
              {faq.question}
            </h3>

            <ChevronDown
              size={22}
              className={`transition-all duration-300 ${
                activeIndex === index
                  ? "rotate-180 text-cyan-400"
                  : "text-slate-400"
              }`}
            />

          </button>

          <div
            className={`grid transition-all duration-300 ${
              activeIndex === index
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr]"
            }`}
          >

            <div className="overflow-hidden">

              <p className="px-8 pb-6 leading-8 text-slate-400">
                {faq.answer}
              </p>

            </div>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
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

      </section>
    </>
  );
}