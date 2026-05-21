import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Code,
  Coffee,
  TrendingUp,
  BarChart,
  ArrowRight,
  X,
  Sparkles,
} from 'lucide-react';

export default function Courses() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      icon: Code,
      title: 'Python Full Stack',
      duration: '6 Months',
      level: 'Beginner to Advanced',
      badge: 'Most Popular',
      featured: true,
      description:
        'Build real-world web applications using Python, Django, and React.',
      skills: ['Python', 'Django', 'React', 'MySQL'],
    },
    {
      icon: Coffee,
      title: 'Java Full Stack',
      duration: '6 Months',
      level: 'Intermediate',
      badge: 'Industry Favorite',
      featured: true,
      description:
        'Master Java, Spring Boot, and enterprise-level application development.',
      skills: ['Java', 'Spring Boot', 'React', 'MySQL'],
    },
    {
      icon: TrendingUp,
      title: 'Data Science',
      duration: '6 Months',
      level: 'Intermediate',
      badge: 'High Demand',
      featured: true,
      description:
        'Work with machine learning, AI, and predictive models.',
      skills: ['Python', 'AI/ML', 'TensorFlow', 'Packages', 'PowerBI'],
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      duration: '4 Months',
      level: 'Beginner',
      badge: 'Career Booster',
      featured: true,
      description:
        'Create dashboards using Excel, Power BI, and Tableau.',
      skills: ['Python', 'MySql', 'Excel', 'Power BI', 'Tableau'],
    },
  ];

  return (
    <>
      <section
        id="courses"
        ref={ref}
        className="py-24 bg-gradient-to-b from-white via-[#f5f9ff] to-[#eef9ff]"
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border text-sm text-[#2563eb] shadow-sm">
              <Sparkles className="h-4 w-4" />
              Our Courses
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold mt-5 text-[#1e3a8a]">
              Job-Oriented IT Training Programs
            </h2>

            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Learn with real projects, expert mentors, and placement-focused guidance.
            </p>
          </motion.div>

          {/* COURSES GRID */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {courses
              .filter((c) => c.featured)
              .map((course, i) => {
                const Icon = course.icon;

                return (
                  <motion.div
                    key={course.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative p-[1px] rounded-2xl bg-gradient-to-r from-[#2563eb]/30 to-[#22c1dc]/30"
                  >
                    <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition h-full">

                      {/* TOP */}
                      <div className="flex items-start gap-4 mb-5">

                        {/* ICON */}
                        <div
                          className="
                            w-14 h-14 min-w-[56px] min-h-[56px]
                            rounded-xl
                            flex items-center justify-center
                            bg-gradient-to-br from-[#2563eb] to-[#22c1dc]
                            shrink-0
                            mt-1
                          "
                        >
                          <Icon className="w-7 h-7 text-white stroke-[2.2]" />
                        </div>

                        {/* CONTENT */}
                        <div className="flex-1 min-w-0">

                          {/* TITLE + BADGE */}
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] leading-tight">
                              {course.title}
                            </h3>

                            <span
                              className="
                                text-xs
                                bg-[#2563eb]
                                text-white
                                px-3 py-1
                                rounded-full
                                whitespace-nowrap
                                self-start
                              "
                            >
                              {course.badge}
                            </span>
                          </div>

                          {/* LEVEL */}
                          <p className="text-sm text-gray-500">
                            {course.level}
                          </p>
                        </div>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                        {course.description}
                      </p>

                      {/* SKILLS */}
                      <div className="flex gap-2 flex-wrap mb-6">
                        {course.skills.map((s) => (
                          <span
                            key={s}
                            className="text-xs bg-blue-50 text-[#2563eb] px-3 py-1 rounded-full font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      {/* BUTTON */}
                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="
                          w-full py-3 rounded-xl
                          bg-[#2563eb] text-white font-semibold
                          hover:bg-[#1e40af]
                          transition
                          flex items-center justify-center gap-2
                        "
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ scale: 1.01 }}
            className="relative p-[1px] rounded-2xl bg-gradient-to-r from-[#2563eb]/30 to-[#22c1dc]/30"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition text-center sm:text-left">
              <h3 className="text-2xl font-bold text-[#1e3a8a]">
                Not sure which course is right for you?
              </h3>

              <p className="text-gray-600 mt-2">
                Talk to our mentors and choose the best learning path.
              </p>

              <a
                href="#contact"
                className="
                  inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl
                  bg-gradient-to-r from-[#2563eb] to-[#22c1dc]
                  text-white font-medium
                "
              >
                Talk to Mentor
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full relative shadow-xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <X />
              </button>

              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">
                {selectedCourse.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {selectedCourse.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCourse.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="
                  inline-flex items-center gap-2 px-5 py-3 rounded-lg
                  bg-[#2563eb] text-white font-medium
                "
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}