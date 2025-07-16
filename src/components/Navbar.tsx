// "use client";

// import { useState } from "react";
// import { Moon, Sun, Menu } from "lucide-react";

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDark = () => {
//     document.documentElement.classList.toggle("dark");
//     setDarkMode(!darkMode);
//   };

//   return (
//     <nav className="border-b border-gray-200 dark:border-gray-700">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <img
//               src="/logo.jpg"
//               alt="H.O.P.E logo"
//               className="h-5 w-auto"
//               width={80}
//               height={40}
//             />
//             <div className="w-10 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-600" />
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-6 text-sm font-normal text-gray-600 dark:text-gray-400">
//             <a href="#use-cases" className="hover:text-gray-900 dark:hover:text-white">Use Cases</a>
//             <a href="#pricing" className="hover:text-gray-900 dark:hover:text-white">Pricing</a>
//             <a href="#about" className="font-semibold text-gray-900 border-b-2 border-gray-900 dark:text-white dark:border-white">About Us</a>
//             <a href="#contact" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
//             <a href="#product" className="hover:text-gray-900 dark:hover:text-white">Products</a>

//             <button
//               onClick={toggleDark}
//               aria-label="Toggle dark mode"
//               className="hover:text-gray-900 dark:hover:text-white"
//             >
//               {darkMode ? <Sun size={16} /> : <Moon size={16} />}
//             </button>
//           </div>

//           {/* View Products */}
//           <div className="hidden md:block">
//             <button className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300">
//               View Products
//             </button>
//           </div>

//           {/* Mobile menu icon */}
//           <div className="md:hidden">
//             <button aria-label="Open menu">
//               <Menu className="text-gray-600 dark:text-gray-300" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }





"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="H.O.P.E logo"
              className="h-5 w-auto"
              width={80}
              height={40}
            />
            <div className="w-10 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-600" />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 text-sm font-normal text-gray-600 dark:text-gray-400">
            <a href="/#use-cases" className="hover:text-gray-900 dark:hover:text-white">
              Use Cases
            </a>
            <a href="/#pricing" className="hover:text-gray-900 dark:hover:text-white">
              Pricing
            </a>
            <a
              href="/#about"
              className="font-semibold text-gray-900 border-b-2 border-gray-900 dark:text-white dark:border-white"
            >
              About Us
            </a>
            <a href="/#contact" className="hover:text-gray-900 dark:hover:text-white">
              Contact
            </a>
            <a href="/products" className="hover:text-gray-900 dark:hover:text-white">
              Products
            </a>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle dark mode"
              className="hover:text-gray-900 dark:hover:text-white"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* View Products */}
          <div className="hidden md:block">
            <Link
              href="/products"
              className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              View Products
            </Link>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button aria-label="Open menu">
              <Menu className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
