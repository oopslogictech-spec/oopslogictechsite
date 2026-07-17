
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
 import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Send,
  Users,
  Award,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        'service_yhzu4fj',
        'template_z039n5o',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
        },
        'JeQIPR6P2nZQoW4RE'
      );

      setSubmitted(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error(error);
      alert('Failed to send message');
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 6369868846",
      link: "tel:+916369868846",
    },
    {
      icon: Mail,
      title: "Email",
      value: "oopslogictech@gmail.com",
      link: "mailto:oopslogictech@gmail.com",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Nava India ,Coimbatore, Tamil Nadu",
      link: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat | 9 AM - 7 PM",
      link: "#",
    },
  ];

  return (
    <section
      id="contact"
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
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute -top-40 -left-24 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[180px]" />

        <div className="absolute bottom-[-120px] right-[-120px] h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[180px]" />

        <div className="absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[150px]" />

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
              Contact Our Team
            </span>

          </div>

          <h2 className="mt-8 text-5xl font-extrabold leading-tight">

            Let's Build Your

            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">

              Digital Success Together

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

            Looking for software development, website development,
            mobile app development, AI solutions or professional
            IT training? Our experts are here to help you choose
            the perfect solution for your business and career.

          </p>

          {/* Trust Badges */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            {[
              "Free Consultation",
              "Expert Developers",
              "Placement Support",
              "Live Projects",
              "Career Guidance",
              "24/7 Support",
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

        {/* Contact Layout */}

        <div className="mt-24 grid gap-10 lg:grid-cols-2">
                  {/* ============================= */}
        {/* LEFT SIDE - CONTACT CARD */}
        {/* ============================= */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          {/* Glow */}

          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-[120px]" />

          <div className="absolute bottom-[-80px] left-[-80px] h-56 w-56 rounded-full bg-violet-500/20 blur-[120px]" />

          <div className="relative p-10">

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">

              <MessageCircle className="h-4 w-4 text-cyan-400" />

              <span className="text-sm font-semibold text-cyan-300">
                Get in Touch
              </span>

            </div>

            <h3 className="mt-6 text-3xl font-bold text-white">

              We'd Love to Hear From You

            </h3>

            <p className="mt-4 leading-8 text-slate-300">

              Whether you're looking for software development,
              website development,
              mobile applications,
              AI solutions,
              or IT training,
              our experts are ready to guide you.

            </p>

            {/* Contact Items */}

            <div className="mt-10 space-y-5">

              {contactInfo.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.a
                    key={item.title}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                    className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg">

                      <Icon className="text-white" />

                    </div>

                    <div>

                      <p className="text-sm text-slate-400">

                        {item.title}

                      </p>

                      <p className="mt-1 font-semibold text-white">

                        {item.value}

                      </p>

                    </div>

                  </motion.a>

                );

              })}

            </div>

            {/* Stats */}

           

            {/* Why Choose Us */}

            <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

              <h4 className="text-lg font-semibold text-cyan-300">

                Why Choose Us?

              </h4>

              <div className="mt-5 space-y-4">

                {[
                  "Industry Experienced Trainers",
                  "Real-Time Project Experience",
                  "Placement Assistance",
                  "Affordable Course Fees",
                  "Modern Technologies",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />

                    <span className="text-slate-200">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Quick Action Buttons */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <a
                href="tel:+916369868846"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                <Phone size={18} />

                Call Now

              </a>

              <a
                href="https://wa.me/916369868846"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:border-green-400 hover:bg-green-500/10"
              >
                <MessageCircle size={18} />

                WhatsApp

              </a>

            </div>

          </div>

        </motion.div>

        {/* ============================= */}
        {/* RIGHT SIDE FORM STARTS HERE */}
        {/* Part 3 continues... */}
        {/* ============================= */}

        {/* ============================= */}
        {/* RIGHT SIDE - CONTACT FORM */}
        {/* ============================= */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          {/* Glow */}

          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/20 blur-[140px]" />

          <div className="relative p-10">

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2">

              <Send className="h-4 w-4 text-cyan-400" />

              <span className="text-sm font-semibold text-cyan-300">
                Send Message
              </span>

            </div>

            <h3 className="mt-6 text-3xl font-bold">
              Request a Free Consultation
            </h3>

            <p className="mt-4 text-slate-300 leading-7">
              Fill out the form below and our team will contact you within
              24 hours to discuss your project or career goals.
            </p>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4"
              >
                <div className="flex items-center gap-3">

                  <CheckCircle2 className="text-emerald-400" />

                  <span className="text-emerald-300 font-medium">
                    Thank you! Your message has been sent successfully.
                  </span>

                </div>
              </motion.div>
            )}

            {/* Form */}

            <div className="mt-8 space-y-6">

              {/* Name */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Phone */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Course */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Interested In
                </label>

                <select
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                >
                  <option value="">Select a Course / Service</option>

                  <option>Python Full Stack Development</option>

                  <option>Java Full Stack Development</option>

                  <option>Data Science & AI</option>

                  <option>Data Analytics</option>

                  <option>Website Development</option>

                  <option>Mobile App Development</option>

                  <option>AI Automation</option>

                </select>
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
                />
              </div>

              {/* Button */}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 font-semibold text-white shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              
            </div>

          </div>

        </motion.form>

      </div>
</div>
    </section>
  );
}
        