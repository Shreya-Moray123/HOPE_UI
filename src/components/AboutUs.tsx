// "use client";
// import React from "react";

// const AboutSection = () => (
//   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 bg-blue-50 dark:bg-blue-900 py-12 transition-colors duration-300">
//     <h2 className="text-center text-lg sm:text-xl md:text-2xl font-semibold mb-1 dark:text-gray-200">
//       About Us
//     </h2>
//     <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-8">
//       Discover how we're transforming oral healthcare
//     </p>
//     <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-gray-600 dark:text-gray-400">
//       {[
//         { title: "Our Mission", text: "To enhance oral healthcare through innovative solutions" },
//         { title: "Our Vision", text: "To be the leading platform in oral health screening" },
//         { title: "Our Values", text: "Innovation, accuracy, and accessibility in healthcare" }
//       ].map((item) => (
//         <div
//           key={item.title}
//           className="bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 p-4 text-gray-700 dark:text-gray-300"
//         >
//           <h3 className="text-cyan-600 font-semibold text-sm mb-1">{item.title}</h3>
//           <p>{item.text}</p>
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default AboutSection;



"use client";
import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  //const [activeCard, setActiveCard] = useState(null);

  const [activeCard, setActiveCard] = useState<number | null>(null);


  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const aboutItems = [
    {
      title: "Our Mission",
      text: "To enhance oral healthcare through innovative solutions",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Our Vision",
      text: "To be the leading platform in oral health screening",
      icon: "👁️",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Our Values",
      text: "Innovation, accuracy, and accessibility in healthcare",
      icon: "💎",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const delayClasses = ["delay-200", "delay-400", "delay-600"];

  return (
    <section id="about"
    className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900 dark:via-indigo-900 dark:to-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 animate-ping"></div>

      <div className="relative z-10">
        {/* Header */}
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              About Us
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Discover how we're transforming oral healthcare with cutting-edge innovation
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {aboutItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative transform transition-all duration-700 ${delayClasses[index]} ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 dark:border-gray-700/20 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
                {/* Gradient hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}
                ></div>

                {/* Icon */}
                <div
                  className={`text-6xl mb-6 transform transition-all duration-300 ${
                    activeCard === index ? "scale-110 rotate-12" : "scale-100"
                  }`}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl font-bold mb-4 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {item.text}
                </p>

                {/* Underline */}
                <div
                  className={`h-1 bg-gradient-to-r ${item.gradient} mt-6 rounded-full transform transition-all duration-300 ${
                    activeCard === index ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                ></div>

                {/* Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full opacity-60 animate-ping`}
                  ></div>
                  <div
                    className={`absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r ${item.gradient} rounded-full opacity-40 animate-pulse`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom element */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30 dark:border-gray-700/30">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              Innovating Healthcare Together
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
