import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  // SEND EMAIL
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
      label: 'Phone',
      value: '+91 6369868846',
      link: 'tel:+916369868846',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'oopslogictech@gmail.com',
      link: 'oopslogictech@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Coimbatore, Tamil Nadu',
      link: '#',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon - Sat: 9AM - 7PM',
      link: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 overflow-hidden bg-gradient-to-b from-white via-[#f5f9ff] to-[#eef6ff]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#2563eb]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] bg-[#22c1dc]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 text-[#2563eb] shadow-sm">
            <Sparkles className="h-4 w-4" />
            Contact Us
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6 text-[#1e3a8a] leading-tight">
            Let’s Build Your Future Together
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Talk with our experts and get guidance for your career.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-10 text-white shadow-[0_30px_80px_rgba(30,58,138,0.25)] overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg, #1e3a8a, #2563eb, #22c1dc)',
            }}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 blur-3xl rounded-full" />

            <h3 className="text-2xl font-bold mb-4">
              Contact Information
            </h3>

            <p className="text-white/80 mb-8 leading-relaxed">
              Reach out for courses, projects, or career guidance.
              Our team is ready to assist you.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.link}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300 hover:translate-x-1"
                >
                  <info.icon className="h-5 w-5" />

                  <div>
                    <p className="text-sm text-white/70">
                      {info.label}
                    </p>

                    <p className="font-semibold">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 border-t border-white/20 pt-6 space-y-3">
              {[
                'Free consultation available',
                'Quick response support',
                'Online & offline training',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-[#22c1dc]" />

                  <span className="text-white/90">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-[0_25px_70px_rgba(0,0,0,0.08)] border border-white"
          >
            <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">
              Send Message
            </h3>

            {submitted && (
              <div className="mb-5 rounded-xl bg-green-50 text-green-600 px-4 py-3 text-sm font-medium">
                Message sent successfully!
              </div>
            )}

            <div className="space-y-6">

              {/* NAME */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 focus:ring-2 focus:ring-[#2563eb] outline-none"
                />

                <label className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm transition-all">
                  Name
                </label>
              </div>

              {/* EMAIL */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 focus:ring-2 focus:ring-[#2563eb] outline-none"
                />

                <label className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm transition-all">
                  Email
                </label>
              </div>

              {/* PHONE */}
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full border border-gray-200 rounded-xl px-4 pt-5 pb-2 focus:ring-2 focus:ring-[#2563eb] outline-none"
                />

                <label className="absolute left-4 top-2 text-xs text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm transition-all">
                  Phone
                </label>
              </div>

              {/* COURSE */}
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2563eb] outline-none"
              >
                <option value="">Select Course</option>
                <option>Python Full Stack</option>
                <option>Java Full Stack</option>
                <option>Data Science</option>
                <option>Data Analytics</option>
              </select>

              {/* MESSAGE */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your message..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2563eb] outline-none"
              />

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2563eb] to-[#22c1dc] text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-xs text-gray-500 text-center">
                We’ll respond within 24 hours
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}