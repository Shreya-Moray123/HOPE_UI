// "use client";
// import React from "react";

// const ContactSection = () => (
//   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
//     <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-1 dark:text-gray-200">
//       Get in Touch
//     </h2>
//     <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
//       Have questions? We'd love to hear from you.
//     </p>
//     <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
//       {/* Contact Form */}
//       <form className="space-y-4 bg-gray-50 dark:bg-gray-800 p-6 rounded-md shadow-md">
//         <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
//           Email
//           <input
//             type="email"
//             placeholder="Your email address"
//             required
//             className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200"
//           />
//         </label>
//         <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
//           Message
//           <textarea
//             placeholder="Your message"
//             required
//             rows={5}
//             className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200"
//           ></textarea>
//         </label>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
//         >
//           Send Message
//         </button>
//       </form>
//       {/* Contact Info */}
//       <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-md shadow-md text-xs text-gray-700 dark:text-gray-300 space-y-6">
//         <div>
//           <h3 className="text-cyan-600 font-semibold mb-2">Location</h3>
//           <p>
//             1234 Health St.<br />
//             Wellness City, HC 56789<br />
//             Country
//           </p>
//         </div>
//         <div>
//           <h3 className="text-cyan-600 font-semibold mb-2">Contact Details</h3>
//           <p>
//             Phone: (123) 456-7890<br />
//             Email: info@hopehealth.com<br />
//             Fax: (123) 456-7891
//           </p>
//         </div>
//         <div>
//           <h3 className="text-cyan-600 font-semibold mb-2">Office Hours</h3>
//           <p>
//             Mon-Fri: 9:00 AM - 6:00 PM<br />
//             Saturday: 10:00 AM - 4:00 PM<br />
//             Sunday: Closed
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// export default ContactSection;



"use client";
import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Clock, Send, Star } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ email: "", message: "" });
  };

  const FloatingOrb = ({
    delay = 0,
    size = 20,
    opacity = 0.1,
  }: {
    delay?: number;
    size?: number;
    opacity?: number;
  }) => (
    <div
      className={`absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse`}
      style={{
        width: size,
        height: size,
        opacity,
        left: `${20 + Math.sin(Date.now() * 0.001 + delay) * 10}%`,
        top: `${30 + Math.cos(Date.now() * 0.001 + delay) * 15}%`,
        animationDelay: `${delay}s`,
        animationDuration: "4s",
      }}
    />
  );

  return (
    <section id="contact"
    className="relative min-h-screen bg-gradient-to-br from-slate-100 via-purple-50 to-indigo-100 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]" />
        <FloatingOrb delay={0} size={30} opacity={0.1} />
        <FloatingOrb delay={1} size={20} opacity={0.15} />
        <FloatingOrb delay={2} size={25} opacity={0.08} />
        <FloatingOrb delay={3} size={15} opacity={0.12} />
      </div>

      {/* Interactive cursor effect */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full opacity-10 bg-gradient-to-r from-cyan-400 to-purple-500 blur-3xl transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: "translate3d(0, 0, 0)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-purple-200/50 mb-6 shadow-lg">
            <Star className="w-4 h-4 text-purple-500 animate-pulse" />
            <span className="text-purple-700 text-sm font-medium">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to transform your health journey? We're here to help every
            step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-purple-200/50 shadow-xl">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5 text-purple-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your email address"
                        className="w-full pl-12 pr-4 py-3 bg-white/70 border border-purple-200 rounded-xl text-slate-700 placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 shadow-sm"
                      />
                    </div>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your health goals..."
                        rows={5}
                        className="w-full px-4 py-3 bg-white/70 border border-purple-200 rounded-xl text-slate-700 placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none shadow-sm"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <div className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  content: [
                    "1234 Health Street",
                    "Wellness City, HC 56789",
                    "United States",
                  ],
                  color: "from-emerald-400 to-teal-500",
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: [
                    "Phone: (123) 456-7890",
                    "Email: info@hopehealth.com",
                    "Fax: (123) 456-7891",
                  ],
                  color: "from-cyan-400 to-blue-500",
                },
                {
                  icon: Clock,
                  title: "Office Hours",
                  content: [
                    "Mon-Fri: 9:00 AM - 6:00 PM",
                    "Saturday: 10:00 AM - 4:00 PM",
                    "Sunday: Closed",
                  ],
                  color: "from-purple-400 to-pink-500",
                },
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-2xl blur transition duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    }}
                  />
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-purple-200/50 hover:border-purple-300/50 transition-all duration-300 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-700 mb-2">
                          {item.title}
                        </h3>
                        <div className="space-y-1">
                          {item.content.map((line, lineIndex) => (
                            <p
                              key={lineIndex}
                              className="text-slate-600 text-sm leading-relaxed"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              {[
                { number: "10K+", label: "Happy Clients" },
                { number: "24/7", label: "Support" },
                { number: "99%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-purple-200/50 hover:border-purple-300/50 transition-all duration-300 shadow-lg">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
