export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="flex flex-col items-center mb-10">
        <div className="bg-violet-100 rounded-full px-8 py-2 mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-violet-950">
            Use Cases
          </h2>
        </div>
        <p className="text-center text-base text-gray-600 dark:text-gray-400">
          Discover how H.O.P.E can transform your practice
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative">
          <div className="rounded-full bg-violet-100 p-8 relative z-10">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex gap-2">
                <div className="bg-violet-600 p-2 rounded-full">
                  <img src="/file.svg" alt="Shield" className="w-6 h-6" />
                </div>
                <div className="bg-violet-600 p-2 rounded-full">
                  <img src="/file.svg" alt="Heart" className="w-6 h-6" />
                </div>
                <div className="bg-violet-600 p-2 rounded-full">
                  <img src="/file.svg" alt="User" className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-violet-600 font-semibold">Dental Clinics</h3>
              <p className="text-sm text-gray-600 text-center">Professional Care Solutions</p>
              <div className="bg-violet-200 px-4 py-1 rounded-full text-sm">
                95% Diagnostic Accuracy
              </div>
              <div className="flex gap-2">
                <div className="bg-violet-600 p-2 rounded-full">
                  <img src="/file.svg" alt="Stats" className="w-6 h-6" />
                </div>
                <div className="bg-violet-600 p-2 rounded-full">
                  <img src="/file.svg" alt="Clock" className="w-6 h-6" />
                </div>
              </div>
              <button className="bg-violet-200 text-violet-600 flex items-center gap-1 px-4 py-1 rounded-full hover:bg-violet-300 transition-colors">
                View Details <span>+</span>
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-white rounded-[40px] translate-x-4 -z-10"></div>
        </div>

        <div className="relative">
          <div className="rounded-full bg-emerald-100 p-8 relative z-10">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex gap-2">
                <div className="bg-emerald-600 p-2 rounded-full">
                  <img src="/globe.svg" alt="Research" className="w-6 h-6" />
                </div>
                <div className="bg-emerald-600 p-2 rounded-full">
                  <img src="/globe.svg" alt="Data" className="w-6 h-6" />
                </div>
                <div className="bg-emerald-600 p-2 rounded-full">
                  <img src="/globe.svg" alt="Analytics" className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-emerald-600 font-semibold">Research Institutions</h3>
              <p className="text-sm text-gray-600 text-center">Data-Driven Discovery</p>
              <div className="bg-emerald-200 px-4 py-1 rounded-full text-sm">
                1.2M+ Research Samples
              </div>
              <div className="flex gap-2">
                <div className="bg-emerald-600 p-2 rounded-full">
                  <img src="/globe.svg" alt="Chart" className="w-6 h-6" />
                </div>
                <div className="bg-emerald-600 p-2 rounded-full">
                  <img src="/globe.svg" alt="Graph" className="w-6 h-6" />
                </div>
              </div>
              <button className="bg-emerald-200 text-emerald-600 flex items-center gap-1 px-4 py-1 rounded-full hover:bg-emerald-300 transition-colors">
                View Details <span>+</span>
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-white rounded-[40px] translate-x-4 -z-10"></div>
        </div>

        <div className="relative">
          <div className="rounded-full bg-pink-100 p-8 relative z-10">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex gap-2">
                <div className="bg-pink-600 p-2 rounded-full">
                  <img src="/window.svg" alt="Heart" className="w-6 h-6" />
                </div>
                <div className="bg-pink-600 p-2 rounded-full">
                  <img src="/window.svg" alt="Target" className="w-6 h-6" />
                </div>
                <div className="bg-pink-600 p-2 rounded-full">
                  <img src="/window.svg" alt="Health" className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-pink-600 font-semibold">Healthcare Centers</h3>
              <p className="text-sm text-gray-600 text-center">Integrated Wellness</p>
              <div className="bg-pink-200 px-4 py-1 rounded-full text-sm">
                24/7 Support Available
              </div>
              <div className="flex gap-2">
                <div className="bg-pink-600 p-2 rounded-full">
                  <img src="/window.svg" alt="User" className="w-6 h-6" />
                </div>
                <div className="bg-pink-600 p-2 rounded-full">
                  <img src="/window.svg" alt="Shield" className="w-6 h-6" />
                </div>
              </div>
              <button className="bg-pink-200 text-pink-600 flex items-center gap-1 px-4 py-1 rounded-full hover:bg-pink-300 transition-colors">
                View Details <span>+</span>
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-white rounded-[40px] translate-x-4 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
