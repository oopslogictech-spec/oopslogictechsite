import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Palette,
  TestTube,
  GraduationCap,
  LineChart,
  Brain,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description:
        'High-performance websites designed to scale and convert users into customers.',
      points: ['Modern Stack', 'SEO Ready'],
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description:
        'Fast and smooth mobile apps built for real-world performance.',
      points: ['Cross Platform', 'Fast UI'],
    },
    
    {
      icon: GraduationCap,
      title: 'IT Training',
      description:
        'Career-focused training programs with real-time project experience.',
      points: ['Hands-on', 'Career Ready'],
    },
  
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-white via-[#f0f7ff] to-[#eef9ff]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[-100px] w-[280px] h-[280px] bg-[#2563eb]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-[-100px] w-[280px] h-[280px] bg-[#22c1dc]/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border text-sm text-[#2563eb] shadow-sm">
            <Sparkles className="h-4 w-4" />
            Our Services
          </div>

          <h2 className="text-4xl font-bold mt-5 text-[#1e3a8a] leading-tight">
            Smart IT Solutions & Career-Focused Training
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            We help students and businesses build skills, launch products, and grow using modern technologies.
          </p>

          <div className="flex justify-center gap-6 mt-6 text-sm text-gray-500 flex-wrap">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-[#2563eb]" />
              1000+ Students
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-[#2563eb]" />
              Real Projects
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-[#2563eb]" />
              Expert Mentors
            </span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.07 }}
                className="group relative rounded-2xl p-[1px] 
                bg-transparent hover:bg-gradient-to-r hover:from-[#2563eb] hover:to-[#22c1dc] transition-all duration-300"
              >
                <div
                  className="rounded-2xl bg-white p-6 h-full flex flex-col justify-between
                  shadow-sm transition-all duration-300
                  group-hover:shadow-[0_15px_45px_rgba(37,99,235,0.25)]
                  group-hover:-translate-y-1"
                >

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center 
                  bg-gradient-to-br from-[#2563eb] to-[#22c1dc] mb-4
                  transition-transform duration-300 group-hover:scale-110">
                    <Icon className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#1e3a8a]">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap mt-4">
                    {service.points.map((p) => (
                      <span
                        key={p}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600
                        group-hover:bg-blue-50 group-hover:text-[#2563eb] transition"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
             

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
       
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  whileHover={{ scale: 1.02 }}
  className="mt-20 relative rounded-2xl p-[1px] 
  bg-gradient-to-r from-[#2563eb]/30 to-[#22c1dc]/30"
>
  {/* Gradient Hover Border */}
  <div className="group rounded-2xl p-[1px] 
    hover:bg-gradient-to-r hover:from-[#2563eb] hover:to-[#22c1dc] transition-all duration-300"
  >
    {/* Card */}
    <div className="rounded-2xl bg-white px-8 py-10 text-center
      shadow-sm transition-all duration-300
      group-hover:shadow-[0_15px_45px_rgba(37,99,235,0.25)]"
    >
      <h3 className="text-2xl font-bold text-[#1e3a8a]">
        Ready to build your career or grow your business?
      </h3>

      <p className="text-gray-600 mt-3 max-w-xl mx-auto">
        Get expert guidance and real-world solutions tailored for your goals.
      </p>

      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl 
        bg-gradient-to-r from-[#2563eb] to-[#22c1dc] text-white font-medium 
        shadow-md hover:scale-105 transition"
      >
        Talk to Us
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
}