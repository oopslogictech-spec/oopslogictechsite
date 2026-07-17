import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Code2,
  Coffee,
  TrendingUp,
  BarChart3,
  Users,
  Briefcase,
  Award,
  BookOpen,
  Clock3,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
} from "lucide-react";

export default function Courses() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      icon: Code2,
      title: "Python Full Stack Development",
      duration: "6 Months",
      level: "Beginner to Advanced",
      badge: "Most Popular",
      featured: true,
      description:
        "Become a professional Full Stack Python Developer by mastering Python, Django, React, REST APIs and MySQL through live projects.",

      skills: [
        "Python",
        "Django",
        "React",
        "REST API",
        "MySQL",
        "Git",
      ],

      features: [
        "Live Projects",
        "Internship Support",
        "Placement Assistance",
        "Industry Certification",
      ],
    },

    {
      icon: Coffee,
      title: "Java Full Stack Development",
      duration: "6 Months",
      level: "Intermediate",
      badge: "Industry Choice",
      featured: true,

      description:
        "Learn enterprise software development using Java, Spring Boot, React, Hibernate and MySQL with real-world applications.",

      skills: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "React",
        "MySQL",
        "Git",
      ],

      features: [
        "Enterprise Projects",
        "Certification",
        "Mock Interviews",
        "Placement Support",
      ],
    },

    {
      icon: TrendingUp,
      title: "Data Science & AI",

      duration: "6 Months",

      level: "Intermediate",

      badge: "Trending",

      featured: true,

      description:
        "Master Data Science, Machine Learning, Artificial Intelligence and Deep Learning using Python and industry datasets.",

      skills: [
        "Python",
        "Machine Learning",
        "TensorFlow",
        "Power BI",
        "Pandas",
        "NumPy",
      ],

      features: [
        "AI Projects",
        "Industry Mentors",
        "Certification",
        "Placement Support",
      ],
    },

    {
      icon: BarChart3,

      title: "Data Analytics",

      duration: "4 Months",

      level: "Beginner",

      badge: "Career Booster",

      featured: true,

      description:
        "Learn SQL, Excel, Python, Tableau and Power BI to become a professional Data Analyst.",

      skills: [
        "Python",
        "SQL",
        "Excel",
        "Power BI",
        "Tableau",
        "Statistics",
      ],

      features: [
        "Business Dashboards",
        "Case Studies",
        "Certification",
        "Career Guidance",
      ],
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "1500+",
      label: "Students Trained",
    },

    {
      icon: Briefcase,
      value: "95%",
      label: "Placement Assistance",
    },

    {
      icon: Award,
      value: "50+",
      label: "Real Projects",
    },

    {
      icon: BookOpen,
      value: "Industry",
      label: "Expert Mentors",
    },
  ];

  return (
    <>
      <section
        id="courses"
        ref={ref}
        className="relative overflow-hidden py-28 bg-gradient-to-br from-[#040816] via-[#081224] to-[#0B1A2B] text-white"
      >
        {/* Background */}

        <div className="absolute inset-0 overflow-hidden">

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(#38bdf8 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />

          <div className="absolute -top-40 -left-20 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[170px]" />

          <div className="absolute top-1/2 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[170px]" />

          <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-blue-500/15 blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl">

              <Sparkles className="h-4 w-4 text-cyan-400" />

              <span className="text-sm font-semibold text-cyan-300">

                Professional IT Courses

              </span>

            </div>

            <h2 className="mt-8 text-4xl md:text-6xl font-extrabold leading-tight">

              Industry Ready

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

                Software Development Courses

              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

              Master Python Full Stack Development,
              Java Full Stack, Data Science,
              Artificial Intelligence and Data Analytics
              with real-world projects,
              internship opportunities,
              industry mentors and placement assistance.

            </p>

            {/* Trust Badges */}

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              {[
                "Live Projects",
                "Internship",
                "Placement Support",
                "Industry Mentors",
                "Certification",
                "Career Guidance",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-lg"
                >

                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />

                  <span className="text-sm text-slate-200">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Statistics */}

         
          {/* ========================= */}
          {/* COURSE CARDS START HERE */}
          {/* Part 2 continues from here */}


        {/* ========================= */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-2">
  {courses.map((course, index) => {
    const Icon = course.icon;

    const gradients = [
      "from-cyan-500 via-sky-500 to-blue-600",
      "from-violet-500 via-fuchsia-500 to-pink-600",
      "from-emerald-500 via-teal-500 to-cyan-600",
      "from-orange-500 via-red-500 to-pink-600",
    ];

    return (
      <motion.div
        key={course.title}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.6,
          delay: index * 0.12,
        }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="group relative overflow-hidden rounded-[32px]
        border border-white/10
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        backdrop-blur-2xl
        transition-all duration-700
        hover:border-cyan-400/40
        hover:shadow-[0_35px_90px_rgba(34,211,238,0.18)]"
      >
        {/* Animated Background */}
        <div className="absolute -top-28 -right-28 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

        <div className="absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

        {/* Spotlight */}
        <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.18),transparent_60%)]" />

        {/* Gradient Border */}
        <div
          className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${gradients[index]}`}
        />

        <div className="relative flex h-full flex-col p-8">

          {/* Header */}
          <div className="flex items-start justify-between">

            {/* Icon */}
            <div
              className={`relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${gradients[index]} shadow-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
            >
              <div className="absolute inset-0 rounded-3xl bg-white/15" />

              <Icon className="relative z-10 h-10 w-10 text-white" />
            </div>

            {/* Right Side */}
            <div className="text-right">

              <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-lg">
                {course.badge}
              </span>

             

            </div>

          </div>

          {/* Title */}
          <h3 className="mt-8 text-3xl font-bold tracking-tight text-white">
            {course.title}
          </h3>

          {/* Accent Line */}
          <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 transition-all duration-500 group-hover:w-28" />

          {/* Description */}
          <p className="mt-6 flex-grow text-[15px] leading-8 text-slate-300">
            {course.description}
          </p>

          {/* Duration */}
          <div className="mt-7 flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">

              <Clock3 className="h-4 w-4 text-cyan-400" />

              <span className="text-sm font-medium text-white">
                {course.duration}
              </span>

            </div>

            <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur">
              {course.level}
            </div>

          </div>

          {/* ---------- PART 2 STARTS HERE ---------- */}          {/* Technologies */}
          <div className="mt-8">

            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-300">
              Technologies You'll Learn
            </h4>

            <div className="flex flex-wrap gap-3">
              {course.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/20 bg-gradient-to-r from-cyan-500/15 to-violet-500/15 px-4 py-2 text-xs font-semibold text-cyan-200 transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

          {/* Features */}
          <div className="mt-8">

            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-cyan-300">
              What You'll Get
            </h4>

            <div className="grid grid-cols-2 gap-4">

              {course.features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/10 hover:translate-y-[-2px]"
                >

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/15">

                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />

                  </div>

                  <span className="text-sm font-medium text-slate-200">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Course Highlights */}
          <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-violet-500/10 p-5 backdrop-blur">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Learning Mode
                </p>

                <p className="mt-1 text-base font-semibold text-white">
                  Live + Projects
                </p>

              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Support
                </p>

                <p className="mt-1 text-base font-semibold text-white">
                  Mentor Guided
                </p>

              </div>

              <div className="h-10 w-px bg-white/10" />

              <div>

                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Batch Type
                </p>

                <p className="mt-1 text-base font-semibold text-white">
                  Weekday / Weekend
                </p>

              </div>

            </div>

          </div>


        </div>
      </motion.div>
    );
  })}
</div>
        {/* CTA SECTION STARTS HERE */}
        {/* Part 3 continues from here */}
        {/* ========================= */}
                {/* ========================= */}
        {/* Premium Career CTA */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative mt-28 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          {/* Background */}

          <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#1E293B]" />

          {/* Glow */}

          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-500/20 blur-[160px]" />

          <div className="absolute bottom-[-120px] right-[-80px] h-96 w-96 rounded-full bg-violet-500/20 blur-[160px]" />

          {/* Grid */}

          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(#38bdf8 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative px-8 py-20 text-center lg:px-16">

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 backdrop-blur-xl">

              <Sparkles className="h-4 w-4 text-cyan-400" />

              <span className="text-sm font-semibold text-cyan-300">
                Start Your Tech Career Today
              </span>

            </div>

            <h3 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-5xl">

              Confused About

              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

                Which Course to Choose?

              </span>

            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

              Our mentors will guide you in choosing the right learning path
              based on your interests, career goals, and current skill level.
              Get a personalized roadmap and start your software development
              journey with confidence.

            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              {[
                "Free Career Guidance",
                "Industry Experts",
                "Placement Assistance",
                "Internship Support",
                "Certification",
                "Live Projects",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-lg"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />

                  <span className="text-sm text-slate-200">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-5">

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
              >
                Book Free Career Consultation

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
              >
                Download Brochure
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>

    {/* ========================= */}
    {/* Course Details Modal */}
    {/* ========================= */}

    <AnimatePresence>

      {selectedCourse && (

        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#0F172A] text-white shadow-2xl"
          >

            {/* Close */}

            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute right-5 top-5 rounded-lg bg-white/10 p-2 transition hover:bg-white/20"
            >
              <X size={20} />
            </button>

            <div className="p-8">

              <span className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1 text-xs font-semibold">
                {selectedCourse.badge}
              </span>

              <h3 className="mt-6 text-3xl font-bold">
                {selectedCourse.title}
              </h3>

              <p className="mt-5 leading-7 text-slate-300">
                {selectedCourse.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <h4 className="font-semibold text-cyan-400">
                    Course Duration
                  </h4>

                  <p className="mt-2 text-slate-300">
                    {selectedCourse.duration}
                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

                  <h4 className="font-semibold text-cyan-400">
                    Skill Level
                  </h4>

                  <p className="mt-2 text-slate-300">
                    {selectedCourse.level}
                  </p>

                </div>

              </div>

              <h4 className="mt-10 text-xl font-semibold">
                Technologies You'll Learn
              </h4>

              <div className="mt-5 flex flex-wrap gap-3">

                {selectedCourse.skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

              <h4 className="mt-10 text-xl font-semibold">
                Course Benefits
              </h4>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">

                {selectedCourse.features.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                    <span className="text-slate-200">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <a
                href="#contact"
                onClick={() => setSelectedCourse(null)}
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition hover:scale-[1.02]"
              >
                Enroll Now

                <ArrowRight size={18} />
              </a>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

    </>
  );
}