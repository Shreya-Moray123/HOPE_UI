// export default function Hero() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col items-center space-y-4">
//       <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl">
//         Welcome to H.O.P.E, your partner in transforming oral healthcare with
//         innovative solutions.
//       </p>
//       <button className="bg-blue-600 text-white text-sm font-semibold px-6 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300">
//         Get Started
//       </button>
//     </section>
//   );
// }

"use client";
import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-4 animate-gradient-x">
      <div className="max-w-3xl w-full text-center bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20 shadow-2xl animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Welcome to H.O.P.E
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-8">
          Transforming oral healthcare with innovative solutions.
        </p>
        <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
}


// "use client";
// import React from "react";

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 bg-[length:200%_200%] animate-gradientX p-4">
//       <div className="max-w-3xl w-full text-center bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20 shadow-2xl animate-fadeIn">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
//           Welcome to H.O.P.E
//         </h1>
//         <p className="text-white/80 text-lg md:text-xl mb-8">
//           Transforming oral healthcare with innovative solutions.
//         </p>
//         <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
//           Get Started
//         </button>
//       </div>
//     </section>
//   );
// }
