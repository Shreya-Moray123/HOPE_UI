"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

// ✅ Explicitly typing cardVariants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const PricingSection = () => (
  <section id="pricing"
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 py-12">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/4">
        <h2 className="text-left text-3xl sm:text-4xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          Pricing Plans
        </h2>
        <p className="text-left text-gray-500 dark:text-gray-400">
          Choose the perfect plan for your needs
        </p>
      </div>

      <div className="md:w-3/4 grid md:grid-cols-3 gap-6">
        {[
        {
          title: "Starter",
          features: [
            "Up to 5 projects",
            "10GB storage",
            "Email support",
            "Basic analytics",
          ]
        },
        {
          title: "Professional",
          badge: "Most Popular",
          features: [
            "Unlimited projects",
            "100GB storage",
            "Priority support",
            "Advanced analytics",
            "Team collaboration",
          ]
        },
        {
          title: "Enterprise",
          features: [
            "Unlimited everything",
            "1TB storage",
            "24/7 phone support",
            "Custom integrations",
            "Dedicated account manager",
          ]
        },
      ].map((plan) => (
        <motion.div
          key={plan.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
          className="bg-gradient-to-br from-violet-600/40 to-violet-800/40 backdrop-blur-lg rounded-3xl p-6 flex flex-col relative"
        >
          {plan.badge && (
            <div className="absolute -top-3 right-4 bg-amber-400 text-white text-[10px] font-semibold rounded-lg px-3 py-1 rotate-3 shadow-lg">
              {plan.badge}
            </div>
          )}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white">★</span>
            <h3 className="text-lg font-semibold text-white">
              {plan.title === "Starter" ? "Basic" : plan.title}
            </h3>
          </div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-white text-2xl">$</span>
            <span className="text-white text-5xl font-bold">
              {plan.title === "Starter" ? "9" : plan.title === "Professional" ? "29" : "99"}
            </span>
            <span className="text-white text-xl">.99</span>
          </div>
          <p className="text-violet-200 text-sm mb-6">per month</p>
          <button
            className={`w-full bg-gradient-to-r ${
              plan.title === "Professional" 
                ? "from-amber-400 to-amber-500"
                : "from-violet-400/80 to-violet-500/80"
            } text-white text-sm font-medium rounded-xl px-5 py-3 mb-6 transition-transform hover:scale-105`}
          >
            {plan.title === "Enterprise" ? "Contact Sales →" : "Get Started →"}
          </button>
          <ul className="space-y-3 text-sm text-white">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
