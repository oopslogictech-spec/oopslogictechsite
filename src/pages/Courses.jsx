import { Star, Clock, Users, Award, BookOpen, Download } from "lucide-react";
import {
  CheckCircle2,
  Video,
  Laptop2,
  Briefcase,
Code2,Coffee,Bug ,Database,BrainCircuit,
  Headphones,Bot,CloudCog,BarChart3,Clock3,
  ArrowRight,Phone,MessageCircle,
} from "lucide-react";import {
  UserPlus,
  GraduationCap,
  FolderKanban,
  FileText,
  MessageSquare,
  

} from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function Courses() {
   

  const faqs1 = [
    {
      question: "Who can join these IT courses?",
      answer:
        "Our courses are suitable for students, fresh graduates, working professionals, career changers, and anyone interested in building a career in the IT industry. No prior programming experience is required for beginner-level courses.",
    },
    {
      question: "Do you provide placement assistance?",
      answer:
        "Yes. We provide placement assistance including resume building, mock interviews, aptitude preparation, career guidance, and interview opportunities through our hiring network. Job selection depends on individual performance and interview success.",
    },
    {
      question: "Will I get access to class recordings?",
      answer:
        "Yes. All live sessions are recorded and shared with enrolled students so you can revisit the lessons anytime during your learning period.",
    },
    {
      question: "Will I receive a course completion certificate?",
      answer:
        "Yes. Students who successfully complete the course and project work will receive an industry-recognized course completion certificate.",
    },
    {
      question: "Are weekend and weekday batches available?",
      answer:
        "Yes. We offer flexible weekday and weekend batches for students, college learners, and working professionals.",
    },
    {
      question: "How much are the course fees?",
      answer:
        "Course fees vary depending on the program. We also offer limited-time discounts, installment options, and special offers. Contact our team for the latest fee structure.",
    },
  ];
 const steps = [
    {
      icon: <UserPlus className="w-7 h-7 text-cyan-400" />,
      title: "Enroll",
      desc: "Choose your preferred IT course and start your learning journey.",
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-green-400" />,
      title: "Learn",
      desc: "Attend live classes and gain hands-on experience with industry tools.",
    },
    {
      icon: <FolderKanban className="w-7 h-7 text-purple-400" />,
      title: "Build Projects",
      desc: "Develop real-world projects to strengthen your portfolio.",
    },
    {
      icon: <FileText className="w-7 h-7 text-yellow-400" />,
      title: "Resume Building",
      desc: "Create an ATS-friendly resume and optimize your professional profile.",
    },
    {
      icon: <MessageSquare className="w-7 h-7 text-pink-400" />,
      title: "Mock Interviews",
      desc: "Practice HR and technical interviews with expert guidance.",
    },
    {
      icon: <Briefcase className="w-7 h-7 text-blue-400" />,
      title: "Placement Assistance",
      desc: "Get interview opportunities and career support to launch your IT career.",
    },
  ];
    const trainingCourses = [
  {
    icon: <Code2 size={38} />,
    title: "Full Stack",
    duration: "6 Months",
  },
  {
    icon: <Coffee size={38} />,
    title: "Data Analysis",
    duration: "6 Months",
  },
  {
    icon: <Bug size={38} />,
    title: "Digital Marketing ",
    duration: "4 Months",
  },
  {
    icon: <Database size={38} />,
    title: "Data Science",
    duration: "6 Months",
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
    title: "Cloud & DevOps",
    duration: "3 Months",
  },
  {
    icon: <BarChart3 size={38} />,
    title: "UI / UX",
    duration: "2 Months",
  },
];
    const features = [
  {
    icon: <Laptop2 className="w-7 h-7 text-cyan-400" />,
    title: "Live Interactive Classes",
    description:
      "Learn from experienced trainers through practical live sessions and hands-on demonstrations.",
  },
  {
    icon: <Video className="w-7 h-7 text-purple-400" />,
    title: "Recorded Sessions",
    description:
      "Revisit every topic anytime with lifetime access to recorded classes.",
  },
  {
    icon: <Briefcase className="w-7 h-7 text-green-400" />,
    title: "Real-Time Projects",
    description:
      "Work on practical industry-level projects to build a strong portfolio.",
  },
  {
    icon: <Users className="w-7 h-7 text-orange-400" />,
    title: "Interview Preparation",
    description:
      "Get resume reviews, mock interviews, aptitude practice, and career guidance.",
  },
  {
    icon: <Headphones className="w-7 h-7 text-pink-400" />,
    title: "Lifetime Support",
    description:
      "Receive continuous technical support and career guidance even after course completion.",
  },
  {
    icon: <Award className="w-7 h-7 text-yellow-400" />,
    title: "Industry Certificate",
    description:
      "Earn a recognized course completion certificate to showcase your skills.",
  },
];

const [active, setActive] = useState(0);

  const curriculum = [
    {
      title: "Module 1 - Programming Fundamentals",
      duration: "8 Lessons • 6 Hours",
      topics: [
        "Introduction",
        "Variables",
        "Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
      ],
    },
    {
      title: "Module 2 - Object-Oriented Programming",
      duration: "10 Lessons • 8 Hours",
      topics: [
        "Classes & Objects",
        "Constructors",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "Exception Handling",
      ],
    },
    {
      title: "Module 3 - Framework Development",
      duration: "12 Lessons • 10 Hours",
      topics: [
        "Project Setup",
        "Views",
        "Templates",
        "Authentication",
        "Database Integration",
        "Deployment",
      ],
    },
    {
      title: "Module 4 - Real-Time Project",
      duration: "8 Lessons • 12 Hours",
      topics: [
        "Project Planning",
        "Database Design",
        "Frontend Integration",
        "Testing",
        "Deployment",
      ],
    },
  ];

  return (
    <>
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

          

            <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-tight">

Launch Your Career with

<span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">

Industry-Ready IT Courses

</span>

</h1>

           <p className="mt-6 text-lg text-slate-300 leading-8">
  Explore industry-ready IT courses including Python Full Stack, Java Full
  Stack, MERN Stack, Software Testing, Data Analytics, Power BI, AI & Machine
  Learning, and Cloud Computing. Learn from experienced trainers, build
  real-world projects, earn certification, and receive placement assistance
  to start your IT career with confidence.
</p>

            {/* Course Details */}

            <div className="flex flex-wrap gap-5 mt-8">

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-400" />
                <span>90 Days</span>
              </div>

              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>Beginner to Advanced</span>
              </div>

              <div className="flex items-center gap-2">
  <Users className="w-5 h-5 text-indigo-400" />
  <span>Live Online & Classroom Training</span>
</div>

            </div>

       

           
            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              {[
                "Live Instructor Training",
                "Real-Time Projects",
                "Placement Assistance",
                "Industry Certificate",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                >
                  <Award className="w-5 h-5 text-green-400" />

                  <span>{item}</span>
                </div>
              ))}

            </div>

            {/* Buttons */}

           <div className="mt-12 flex flex-wrap gap-5">

  <a
    href="https://wa.me/919876543210?text=Hi,%20I%20am%20interested%20in%20your%20IT%20Courses.%20Please%20share%20details."
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:shadow-cyan-500/30 flex items-center gap-2"
  >
    Enroll Now
  </a>


<a
  href="/services"
  className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition hover:bg-white hover:text-slate-900"
>
  View Services
</a>

</div>

          </div>

          {/* Right Side */}
{/* Right Side */}
{/* Right Side */}
<div className="relative flex justify-center">

  {/* Background Glow */}
  <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-cyan-500/20 blur-[140px]" />
  <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-indigo-500/20 blur-[140px]" />

  {/* Main Card */}
  <div className="relative w-full max-w-xl rounded-[32px] overflow-hidden border border-cyan-400/20 bg-white/5 backdrop-blur-2xl shadow-[0_25px_80px_rgba(6,182,212,0.15)]">

    {/* Image */}
    <img
      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
      alt="Students Learning"
      className="w-full h-[560px] object-cover"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />

   
   

    {/* Bottom Stats */}
    <div className="absolute bottom-6 left-6 right-6">

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-cyan-400/20 p-5 hover:border-cyan-400 transition">

          <h3 className="text-4xl font-black text-cyan-400">
            90+
          </h3>

          <p className="mt-2 text-slate-300">
            Days Intensive Training
          </p>

        </div>

        <div className="rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-green-400/20 p-5 hover:border-green-400 transition">

          <h3 className="text-4xl font-black text-emerald-400">
            20+
          </h3>

          <p className="mt-2 text-slate-300">
            Industry Projects
          </p>

        </div>

        <div className="rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-yellow-400/20 p-5 hover:border-yellow-400 transition">

          <h3 className="text-4xl font-black text-yellow-400">
            100%
          </h3>

          <p className="mt-2 text-slate-300">
            Placement Support
          </p>

        </div>

        <div className="rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-pink-400/20 p-5 hover:border-pink-400 transition">

          <h3 className="text-4xl font-black text-pink-400">
            1 : 1
          </h3>

          <p className="mt-2 text-slate-300">
            Mentor Guidance
          </p>

        </div>

      </div>

    </div>

  </div>

</div>

        </div>

      </div>
    </section>
     <section className="relative overflow-hidden bg-[#020617] py-24">

  {/* Background Glow */}
  <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>

  <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-indigo-600/20 blur-[160px] rounded-full"></div>


  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">


      {/* IMAGE SECTION */}

      <div className="relative">


        {/* Gradient Border */}
        <div className="absolute -inset-1 rounded-[35px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 blur opacity-40"></div>


        <div className="relative overflow-hidden rounded-[35px] border border-white/10">


          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
            alt="IT Training"
            className="
            w-full 
            h-[620px] 
            object-cover
            transition duration-700
            hover:scale-110
            "
          />


          {/* Image Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent"></div>




          {/* Floating Bottom Card */}

          <div className="
          absolute bottom-6 left-6 right-6
          grid grid-cols-2 gap-4
          ">


            <div className="
            bg-white/10 
            backdrop-blur-xl
            border border-white/20
            rounded-2xl
            p-5
            ">

              <h3 className="text-4xl font-black text-cyan-400">
                15+
              </h3>

              <p className="text-slate-300">
                IT Courses
              </p>

            </div>



            <div className="
            bg-white/10 
            backdrop-blur-xl
            border border-white/20
            rounded-2xl
            p-5
            ">

              <h3 className="text-4xl font-black text-green-400">
                1:1
              </h3>

              <p className="text-slate-300">
                Live Class
              </p>

            </div>


          </div>


        </div>

      </div>



      {/* CONTENT SECTION */}


      <div>


        <span className="
        inline-flex
        rounded-full
        border border-cyan-400/30
        bg-cyan-500/10
        px-5 py-2
        text-sm
        font-semibold
        tracking-widest
        uppercase
        text-cyan-300
        ">

          Why Choose Us

        </span>



        <h2 className="
        mt-6
        text-5xl
        lg:text-6xl
        font-black
        leading-tight
        text-white
        ">

          Learn Skills That Build

          <span className="
          block
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-indigo-500
          bg-clip-text
          text-transparent
          ">

            Your IT Career

          </span>

        </h2>



        <p className="
        mt-6
        text-lg
        leading-8
        text-slate-400
        ">

          Master industry-demand skills with expert trainers,
          hands-on projects, real-time assignments, interview
          preparation, resume support, and placement assistance.
          Designed for students, fresh graduates, and working
          professionals.

        </p>



        {/* FEATURES */}

        <div className="grid sm:grid-cols-2 gap-5 mt-10">


        {features.map((feature,index)=>(

          <div
          key={index}
          className="
          group
          rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          p-6
          transition
          duration-300
          hover:-translate-y-2
          hover:bg-white/10
          hover:border-cyan-400/40
          "
          >


            <div className="
            flex
            items-center
            justify-center
            w-14
            h-14
            rounded-xl
            bg-gradient-to-br
            from-cyan-500/20
            to-indigo-500/20
            text-cyan-400
            ">

              {feature.icon}

            </div>



            <h3 className="
            mt-5
            text-xl
            font-bold
            text-white
            ">

              {feature.title}

            </h3>



            <p className="
            mt-3
            text-sm
            leading-6
            text-slate-400
            ">

              {feature.description}

            </p>


          </div>


        ))}


        </div>






      </div>


    </div>

  </div>

</section>
 <section className="bg-[#040816] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">

          <span className="inline-flex rounded-full bg-cyan-500/10 border border-cyan-500/20 px-5 py-2 text-cyan-400 text-sm font-semibold">
            Course Curriculum
          </span>

          <h2 className="text-5xl font-black text-white mt-6">
            What You'll Learn
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            Our curriculum is carefully designed to provide practical,
            industry-oriented skills through live classes, hands-on exercises,
            and real-world projects.
          </p>

        </div>

        <div className="space-y-5">

          {curriculum.map((module, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="w-full flex justify-between items-center px-8 py-6 text-left hover:bg-white/5 transition"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {module.title}
                  </h3>

                  <p className="text-sm text-slate-400 mt-1">
                    {module.duration}
                  </p>
                </div>

                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {active === index && (
                <div className="border-t border-white/10 px-8 py-6">

                  <div className="grid md:grid-cols-2 gap-4">

                    {module.topics.map((topic, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-slate-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>

                        {topic}
                      </div>
                    ))}

                  </div>

                </div>
              )}

            </div>
          ))}

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

      
      

    </div>

  ))}

</div>
      </div>
    </section>

     <section className="relative bg-[#040816] py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Placement Roadmap
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Your Journey to
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Career Success
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-400 text-lg leading-8">
            Follow our structured learning path designed to help you build
            practical skills, create a strong portfolio, and prepare for
            successful IT interviews.
          </p>

        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <div key={index} className="relative">

              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 h-full transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30">

                <div className="flex items-center justify-between">

                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    {step.icon}
                  </div>

                 
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-400 leading-7">
                  {step.desc}
                </p>

              </div>

              {index !== steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-7 z-10">
                  <ArrowRight className="text-cyan-400 w-8 h-8" />
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>

 <section className="relative bg-[#040816] py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Got Questions?
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              We've Got Answers
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-400 max-w-3xl mx-auto">
            Find answers to the most common questions about our IT training
            programs, batches, certifications, and placement assistance.
          </p>

        </div>

        {/* Accordion */}
        <div className="space-y-5">

          {faqs1.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="w-full flex justify-between items-center text-left px-8 py-6"
              >
                <h3 className="text-lg font-semibold text-white pr-5">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-white/10 px-8 py-6 text-slate-400 leading-8">
                    {faq.answer}
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>

      <section className="relative overflow-hidden py-24 bg-[#040816]">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-indigo-600/10 backdrop-blur-xl p-10 lg:p-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left */}

            <div>

              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-300">
                Admissions Open
              </span>

              <h2 className="mt-6 text-4xl lg:text-6xl font-black leading-tight text-white">

                Ready to Start

                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Your IT Career?
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                Learn from experienced trainers, build real-world projects,
                gain practical skills, and receive placement assistance to
                become job-ready. Choose from our industry-oriented IT courses
                and take the next step toward your career.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                  ✔ Live Classes
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                  ✔ Real-Time Projects
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                  ✔ Placement Assistance
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
                  ✔ Industry Certificate
                </span>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

              <h3 className="text-3xl font-bold text-white">
                Enroll Today
              </h3>

              <p className="mt-3 text-slate-400">
                Limited seats available for the upcoming batch.
              </p>
<a
  href="/contact"
  className="
    mt-8 
    flex 
    w-full 
    items-center 
    justify-center 
    gap-2 
    rounded-xl 
    bg-gradient-to-r 
    from-cyan-500 
    to-blue-600 
    px-8 
    py-4 
    font-semibold 
    text-white 
    transition 
    hover:scale-105
    shadow-lg
    shadow-cyan-500/20
  "
>
  Enroll Now

  <ArrowRight size={20} />

</a>
              <a
                href="tel:+916369868846"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                <Phone size={20} />
                Call: +91 6369868846
              </a>

              <a
                href="https://wa.me/916369868846"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle size={20} />
                WhatsApp Now
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
    </>
  );
}