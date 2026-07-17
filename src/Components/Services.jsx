import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Smartphone,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Code2,
  Briefcase,
  Users,
  Trophy,
} from "lucide-react";

export default function Service() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const services = [
    {
      icon: Globe,
      title: "Custom Web Development",
      description:
        "Build lightning-fast, SEO-optimized websites and scalable web applications tailored to your business needs using modern technologies.",
      points: [
        "React",
        "Next.js",
        "Django",
        "SEO Ready",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Develop intuitive Android and cross-platform mobile applications with seamless performance and engaging user experiences.",
      points: [
        "Android",
        "Flutter",
        "Fast UI",
        "API Integration",
      ],
    },
    {
      icon: GraduationCap,
      title: "Professional IT Training",
      description:
        "Industry-focused software training programs designed with real projects, coding practice, interview preparation, and placement support.",
      points: [
        "Python",
        "Full Stack",
        "Projects",
        "Placement",
      ],
    },
  ];

 

  return (
    <section
  id="services"
  ref={ref}
  className="relative overflow-hidden py-28 bg-gradient-to-br from-[#040816] via-[#071426] to-[#091B2E] text-white"
>
  {/* Background */}

  <div className="absolute inset-0 overflow-hidden">

    {/* Grid */}

    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "radial-gradient(#38bdf8 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    />

    {/* Glow */}

    <div className="absolute -top-32 -left-20 w-[420px] h-[420px] rounded-full bg-blue-600/20 blur-[150px]" />

    <div className="absolute top-1/2 right-0 w-[420px] h-[420px] rounded-full bg-violet-500/20 blur-[170px]" />

    <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full bg-cyan-500/15 blur-[140px]" />

  </div>

  <div className="relative max-w-7xl mx-auto px-6">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto text-center"
    >

      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl">

        <Sparkles className="h-4 w-4 text-cyan-400" />

        <span className="text-sm font-semibold text-cyan-300">
          Our Premium Services
        </span>

      </div>

      {/* Heading */}

      <h2 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight">

        Transform Ideas Into

        <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

          Digital Success

        </span>

      </h2>

      {/* Description */}

      <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-300">

        We help startups, businesses, and students achieve success through
        modern software development, mobile applications, AI solutions,
        cloud technologies, and industry-focused IT training.

      </p>

      {/* Badges */}

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        {[
          "Professional Training ",
          "RealTime Projects",
          "Placement Support",
          "Expert Mentors",
          "Startup Solutions",
          "Latest Technologies",
        ].map((item) => (

          <div
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-lg hover:border-cyan-400/40 hover:bg-cyan-500/10 transition"
          >

            <div className="flex items-center gap-2">

              <CheckCircle2 className="h-4 w-4 text-cyan-400" />

              <span className="text-sm font-medium text-slate-200">
                {item}
              </span>

            </div>

          </div>

        ))}

      </div>

    </motion.div>

    
    {/* Service Cards Start Here */}


        {/* ========================= */}
        {/* SERVICE CARDS START HERE */}
        {/* Part 2 continues from here */}
        {/* ========================= */}

    <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {services.map((service, index) => {
    const Icon = service.icon;

    const gradients = [
      "from-cyan-500 to-blue-600",
      "from-violet-500 to-fuchsia-600",
      "from-emerald-500 to-teal-500",
    ];

    return (
      <motion.div
        key={service.title}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.12,
        }}
        whileHover={{
          y: -12,
          scale: 1.02,
        }}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_25px_60px_rgba(34,211,238,0.15)]"
      >
        {/* Background Glow */}

        <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-transparent" />

        {/* Top Gradient Line */}

        <div className={`h-1 w-full bg-gradient-to-r ${gradients[index]}`} />

        <div className="relative p-8 flex flex-col h-full">

          {/* Badge */}

          {index === 0 && (
            <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
              Popular
            </span>
          )}

          {/* Icon */}

          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${gradients[index]} shadow-xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
          >
            <Icon className="h-8 w-8 text-white" />
          </div>

          {/* Title */}

          <h3 className="mt-7 text-2xl font-bold text-white">
            {service.title}
          </h3>

          {/* Accent Line */}

          <div className="mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-24" />

          {/* Description */}

          <p className="mt-5 flex-grow leading-7 text-slate-300">
            {service.description}
          </p>

          {/* Features */}

          <div className="mt-8 grid grid-cols-2 gap-3">

            {service.points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-400 flex-shrink-0" />

                <span className="text-sm font-medium text-slate-200">
                  {point}
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
  );
}

// import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import {
//   Globe,
//   Smartphone,
//   GraduationCap,
//   Sparkles,
//   CheckCircle2,
//   ArrowRight,
//   Users,
//   Trophy,
//   Briefcase,
//   Code2,
// } from "lucide-react";

// export default function Service() {
//   const ref = useRef(null);

//   const isInView = useInView(ref, {
//     once: true,
//     margin: "-100px",
//   });

//   const services = [
//     {
//       icon: Globe,
//       title: "Custom Web Development",
//       description:
//         "Build lightning-fast, SEO-optimized websites and scalable web applications tailored to your business goals using the latest modern technologies.",
//       points: [
//         "React",
//         "Next.js",
//         "Django",
//         "SEO Ready",
//         "Responsive",
//         "Fast Performance",
//       ],
//       color: "from-cyan-500 to-blue-600",
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile App Development",
//       description:
//         "Create beautiful Android and cross-platform mobile applications with excellent user experience and enterprise-level performance.",
//       points: [
//         "Android",
//         "Flutter",
//         "React Native",
//         "Firebase",
//         "API Integration",
//         "Play Store",
//       ],
//       color: "from-violet-500 to-fuchsia-600",
//     },
//     {
//       icon: GraduationCap,
//       title: "Professional IT Training",
//       description:
//         "Industry-focused software training with live projects, interview preparation, coding sessions, certifications, and placement support.",
//       points: [
//         "Python",
//         "Java",
//         "MERN",
//         "Testing",
//         "AI & ML",
//         "Placement",
//       ],
//       color: "from-emerald-500 to-teal-500",
//     },
//   ];

//   const stats = [
//     {
//       icon: Users,
//       number: "1000+",
//       title: "Students",
//     },
//     {
//       icon: Trophy,
//       number: "98%",
//       title: "Placement Support",
//     },
//     {
//       icon: Briefcase,
//       number: "150+",
//       title: "Projects",
//     },
//     {
//       icon: Code2,
//       number: "25+",
//       title: "Technologies",
//     },
//   ];

//   return (
//     <section
//       id="services"
//       ref={ref}
//       className="relative overflow-hidden bg-[#040816] py-28 text-white"
//     >
//       {/* ================= Background ================= */}

//       <div className="absolute inset-0">

//         {/* Grid */}

//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "radial-gradient(#38bdf8 1px, transparent 1px)",
//             backgroundSize: "34px 34px",
//           }}
//         />

//         {/* Animated Glow 1 */}

//         <motion.div
//           animate={{
//             x: [0, 120, 0],
//             y: [0, -80, 0],
//           }}
//           transition={{
//             duration: 16,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute -left-24 -top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[140px]"
//         />

//         {/* Animated Glow 2 */}

//         <motion.div
//           animate={{
//             x: [0, -140, 0],
//             y: [0, 70, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[170px]"
//         />

//         {/* Animated Glow 3 */}

//         <motion.div
//           animate={{
//             scale: [1, 1.25, 1],
//           }}
//           transition={{
//             duration: 10,
//             repeat: Infinity,
//           }}
//           className="absolute bottom-0 left-1/3 h-[340px] w-[340px] rounded-full bg-blue-500/10 blur-[140px]"
//         />
//       </div>

//       {/* ================= Container ================= */}

//       <div className="relative mx-auto max-w-7xl px-6">

//         {/* ================= Heading ================= */}

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="mx-auto max-w-4xl text-center"
//         >

//           {/* Badge */}

//           <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-6 py-3 backdrop-blur-xl">

//             <Sparkles className="h-4 w-4 text-cyan-400" />

//             <span className="text-sm font-semibold tracking-wide text-cyan-300 uppercase">
//               Premium Digital Solutions
//             </span>

//           </div>

//           {/* Heading */}

//           <h2 className="mt-10 text-5xl font-black leading-tight md:text-7xl">

//             Transform Your

//             <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

//               Digital Future

//             </span>

//           </h2>

//           {/* Description */}

//           <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">

//             We empower startups, businesses, and aspiring professionals with
//             cutting-edge software development, mobile applications, AI-powered
//             solutions, cloud technologies, and career-focused IT training that
//             delivers real-world success.

//           </p>

//           {/* Feature Badges */}

//           <div className="mt-12 flex flex-wrap justify-center gap-4">

//             {[
//               "Professional Training",
//               "Live Projects",
//               "Placement Support",
//               "Expert Mentors",
//               "Startup Solutions",
//               "Latest Technologies",
//             ].map((item) => (
//               <motion.div
//                 key={item}
//                 whileHover={{
//                   scale: 1.08,
//                 }}
//                 className="rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
//               >
//                 <div className="flex items-center gap-2">

//                   <CheckCircle2 className="h-4 w-4 text-cyan-400" />

//                   <span className="text-sm font-medium text-slate-200">
//                     {item}
//                   </span>

//                 </div>
//               </motion.div>
//             ))}

//           </div>

//         </motion.div>

//                {/* ================= SERVICE CARDS ================= */}

//         <div className="mt-24 grid gap-8 lg:grid-cols-3">

//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.15,
//                 }}
//                 whileHover={{
//                   y: -15,
//                 }}
//                 className="group relative flex flex-col overflow-hidden rounded-[34px]
//                 border border-white/10
//                 bg-gradient-to-b
//                 from-white/10
//                 via-white/5
//                 to-white/[0.02]
//                 p-9
//                 backdrop-blur-2xl
//                 transition-all duration-700
//                 hover:border-cyan-400/40
//                 hover:shadow-[0_30px_90px_rgba(34,211,238,.18)]"
//               >
//                 {/* Hover Glow */}

//                 <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-500/20 blur-[130px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

//                 <div className="absolute -bottom-28 -left-24 h-56 w-56 rounded-full bg-violet-500/20 blur-[140px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

//                 {/* Animated Overlay */}

//                 <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.18),transparent_60%)]" />

//                 {/* Service Number */}

//                 <span className="absolute left-8 top-6 text-7xl font-black text-white/5">
//                   0{index + 1}
//                 </span>

//                 {/* Popular Badge */}

//                 {index === 0 && (
//                   <div className="absolute right-7 top-7 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-xl">
//                     Most Popular
//                   </div>
//                 )}

//                 {/* Icon */}

//                 <div
//                   className={`relative mt-10 flex h-20 w-20 items-center justify-center rounded-[24px] bg-gradient-to-br ${service.color} shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6`}
//                 >
//                   <div className="absolute inset-0 rounded-[24px] bg-white/20 blur-md opacity-40" />

//                   <Icon className="relative h-9 w-9 text-white" />
//                 </div>

//                 {/* Title */}

//                 <h3 className="mt-10 text-3xl font-bold tracking-tight">
//                   {service.title}
//                 </h3>

//                 {/* Accent Line */}

//                 <div className="mt-5 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-500 group-hover:w-28" />

//                 {/* Description */}

//                 <p className="mt-6 flex-grow leading-8 text-slate-300">
//                   {service.description}
//                 </p>

//                 {/* Features */}

//                 <div className="mt-8 flex flex-wrap gap-3">

//                   {service.points.map((point) => (
//                     <motion.div
//                       whileHover={{
//                         scale: 1.06,
//                       }}
//                       key={point}
//                       className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition-all duration-300 hover:bg-cyan-500/20"
//                     >
//                       {point}
//                     </motion.div>
//                   ))}

//                 </div>

//                 {/* Divider */}

//                 <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

//                 {/* CTA */}

//                 <button
//                   className={`inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r ${service.color} px-6 py-4 font-semibold text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_50px_rgba(59,130,246,.35)]`}
//                 >
//                   Explore Service

//                   <ArrowRight
//                     size={18}
//                     className="transition-transform duration-300 group-hover:translate-x-1"
//                   />
//                 </button>

//                 {/* Bottom Glow */}

//                 <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-700 group-hover:w-full" />
//               </motion.div>
//             );
//           })}
//         </div>

           
      

//       </div>
//     </section>
//   );
// }