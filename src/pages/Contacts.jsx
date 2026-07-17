import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaGraduationCap,
  FaLaptopCode,
  FaUserGraduate,
} from "react-icons/fa";

import {


  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
 import emailjs from "@emailjs/browser";
export default function Contacts() {
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

   const features = [
    "Free Career Guidance",
    "Demo Classes",
    "Placement Assistance",
    "Industry Trainers",
    "Flexible Timings",
    "Online & Offline Classes",
  ];
  return (
    <>
   <section className="relative overflow-hidden bg-[#040816] text-white">

    {/* Background Glow */}
<div className="absolute inset-0 overflow-hidden">
  <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
  <div className="absolute top-1/3 -right-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />
  <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
</div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-20 top-20 h-40 w-40 rounded-full border border-white"></div>
        <div className="absolute right-24 top-32 h-60 w-60 rounded-full border border-white"></div>
        <div className="absolute bottom-20 left-1/3 h-52 w-52 rounded-full border border-white"></div>

        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="white"
                strokeOpacity="0.12"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Icons */}
      <FaGraduationCap className="absolute left-16 top-24 text-6xl text-white/10 animate-bounce" />
      <FaLaptopCode className="absolute right-24 top-32 text-5xl text-white/10 animate-pulse" />
      <FaUserGraduate className="absolute bottom-24 right-1/4 text-6xl text-white/10 animate-bounce" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-36">
        <div className="max-w-3xl">
    
         <h1 className="text-4xl font-extrabold md:text-6xl">
  Contact <span className="text-cyan-400">Us</span>
</h1>

        <p className="mt-6 text-lg leading-8 text-gray-300 md:text-xl">
            Have questions about our courses? Our team is here to help you
            choose the right career path. Reach out today and begin your
            journey toward a successful IT career.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:+916369868846"
             className="flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition duration-300 hover:bg-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,.45)]">
              <FaPhoneAlt />
              Call Now
            </a>

            <a
              href="https://wa.me/916369868846"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition duration-300 hover:bg-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,.45)]">
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="mailto:oopslogictech@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-white/5 px-6 py-4 font-semibold backdrop-blur-md transition duration-300 hover:border-cyan-400 hover:bg-cyan-500/10">
              <FaEnvelope />
              Email
            </a>
          </div>

          {/* Stats */}
        <div className="mt-16 grid max-w-xl grid-cols-3 gap-6">

  <div>
    <h2 className="text-3xl font-bold text-cyan-300">10+</h2>
    <p className="text-blue-200">Expert Mentors</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-cyan-300">15+</h2>
    <p className="text-blue-200">Career Programs</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-cyan-300">24/7</h2>
    <p className="text-blue-200">Learning Support</p>
  </div>

</div>
        </div>
      </div>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        fill="none"
      >
        <path
          fill="white"
          d="M0,64L80,74.7C160,85,320,107,480,106.7C640,107,800,85,960,80C1120,75,1280,85,1360,90.7L1440,96V120H0Z"
        />
      </svg>
    </section>
     <section className="bg-[#040816] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Why <span className="text-cyan-400">Contact Us?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            Our experienced counselors are here to guide you toward the right
            course and help you build a successful IT career.
          </p>
        </div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-500/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/15 text-2xl text-cyan-400 transition group-hover:scale-110">
                <FaCheckCircle />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
      <section className="bg-[#040816] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">
            Contact <span className="text-cyan-400">Information</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-400">
            We'd love to hear from you. Fill out the form or contact us using the details below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Phone */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/40 transition">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-5">
                  <FaPhoneAlt />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  Phone
                </h3>

                <p className="mt-3 text-gray-400">
                  +91 6369868846
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/40 transition">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-5">
                  <FaEnvelope />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  Email
                </h3>

                <p className="mt-3 text-gray-400 break-all">
                 oopslogictech@gmail.com
                </p>
              </div>

              {/* Address */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/40 transition">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-5">
                  <FaMapMarkerAlt />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  Address
                </h3>

                <p className="mt-3 text-gray-400">
                  Nava India , Coimbatore,
                  <br />
                  Tamil Nadu
                </p>
              </div>

              {/* Working Hours */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/40 transition">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl mb-5">
                  <FaClock />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  Working Hours
                </h3>

                <p className="mt-3 text-gray-400">
                  Monday - Saturday
                  <br />
                  9:00 AM - 7:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <h3 className="text-3xl font-bold text-white">
              Send Us a Message
            </h3>

            <p className="mt-3 text-gray-400">
              Fill out the form below and we'll get back to you shortly.
            </p>

            <form  onSubmit={handleSubmit}
  className="mt-8 space-y-5">

           <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
                />

               <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
                />

             
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
                />

             <select
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                >
                <option>Select Course</option>
                <option>Python Full Stack</option>
                <option>Java Full Stack</option>
                <option>MERN Stack</option>
                <option>Software Testing</option>
                <option>Data Analytics</option>
                <option>AI & ML</option>
              </select>
  <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400"
                />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-400"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

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