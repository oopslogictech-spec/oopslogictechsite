import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import whatsapp from '../assets/whatsapp.png';
import { Check } from "lucide-react";
import { GraduationCap } from "lucide-react";
export default function Hero() {

  // Smooth Scroll
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (!el) return;

    const offset = -100;
    const y = el.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      {/* 🔥 Urgency Strip */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white text-center text-sm py-2">
        🎉 Summer Offer: Get 40% OFF – Limited Seats Only!
      </div>

      <section
        id="home"
        className="relative min-h-screen flex items-center pt-28 md:pt-32 overflow-hidden bg-[radial-gradient(circle_at_top_left,#eef4ff_0%,#f8fbff_40%,#ffffff_100%)]"
      >

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-10 h-72 w-72 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-10 left-10 h-96 w-96 bg-cyan-400/10 blur-3xl rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

              {/* Badge */}
              {/* <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-5 border">
                <Sparkles className="w-4 h-4 text-[#2563eb]" />
                <span className="text-sm font-semibold text-gray-700">
                  1500+ Students Placed
                </span>
              </div> */}

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5 text-gray-900">
                From <span className="text-red-500">Zero</span> to 
                <span className="text-[#2563eb]"> IT Job</span> — Even If You Don’t Know Coding
              </h1>

              {/* Subtext */}
              <p className="text-lg text-gray-600 mb-6 max-w-lg">
                Learn Full Stack, Data Science & Analytics with real-time projects, mentorship, and placement support.
              </p>

              {/* Key Points */}
              <div className="space-y-2 mb-6">
                {[
                  "No coding background needed",
                  "Step-by-step practical training",
                  "Placement support until you get job",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="text-[#2563eb]" size={16} />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">

                <motion.a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#22c1dc] text-white font-semibold shadow-lg"
                >
                  Start Free Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

              

              </div>

              {/* Social Proof */}
              <p className="text-xs text-gray-500">
                ⭐ Real student placements • Limited seats available
              </p>

            </motion.div>
{/* RIGHT — 🚀 STARTUP GROWTH CARD */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="relative"
>

  {/* Glow Effect */}
  <div className="absolute -top-8 -right-8 h-36 w-36 bg-blue-200/40 blur-3xl rounded-full"></div>

  <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 space-y-6">

    {/* Header */}
    <div className="flex items-start justify-between">
      <div>
       

        <h3 className="text-3xl font-bold text-gray-900 leading-tight mt-2">
          Build Your Skills <br />
          Grow Your Business
        </h3>

        <p className="text-sm text-gray-500 mt-3 max-w-sm">
          We help students and startups with industry-level training,
          modern websites, and real-world project experience.
        </p>
      </div>

 

      <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center shadow-sm">
  <GraduationCap className="h-7 w-7 text-blue-600" />
</div>
    </div>

    {/* Services */}
    {[
      {
        title: "Website Development",
        desc: "Professional websites for startups, brands & businesses."
      },
      {
        title: "Industry-Level Training",
        desc: "Learn real-time skills with practical projects and mentorship."
      },
      {
        title: "Career & Business Growth",
        desc: "Build your career or scale your business with digital solutions."
      }
    ].map((item, i) => (
      <div
        key={i}
        className="group rounded-2xl border border-gray-100 bg-gray-50/70 p-4 hover:bg-white hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-start gap-4">

          <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center font-bold shadow-md">
            0{i + 1}
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 text-base">
              {item.title}
            </h4>

            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              {item.desc}
            </p>
          </div>

        </div>
      </div>
    ))}

    {/* Stats */}
    <div className="grid grid-cols-2 gap-4 pt-2">

      <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 p-5 text-white shadow-lg">
        <p className="text-3xl font-bold">100%</p>

        <p className="text-sm text-blue-100 mt-2 leading-relaxed">
          Real-time projects with expert mentor guidance
        </p>
      </div>

      <div className="rounded-2xl bg-gray-900 p-5 text-white shadow-lg">
        <p className="text-3xl font-bold">24/7</p>

        <p className="text-sm text-gray-300 mt-2 leading-relaxed">
          Continuous support for learning & business growth
        </p>
      </div>

    </div>

    {/* Footer */}
    <div className="border-t border-gray-100 pt-4 text-center">
      <p className="text-sm text-gray-500">
        Empowering students, freelancers & startups with technology ✨
      </p>
    </div>

  </div>

</motion.div>

          </div>
        </div>

        {/* 🔥 WhatsApp CTA */}
        <a
          href="https://wa.me/916369868846?text=Hi%20I%20want%20free%20demo"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg"
        >
          <img src={whatsapp} alt="whatsapp" className="w-6" />
          <span className="text-sm font-medium hidden sm:block">
            Talk to Mentor
          </span>
        </a>

        {/* 🔥 Mobile Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-lg px-4 py-3 flex items-center justify-between md:hidden">
          <p className="text-sm font-medium text-gray-700">
            🎯 Limited Seats Available
          </p>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="bg-[#2563eb] text-white px-4 py-2 rounded-lg text-sm font-semibold"
          >
            Book Demo
          </a>
        </div>

      </section>
    </>
  );
}