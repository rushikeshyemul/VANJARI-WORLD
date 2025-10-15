import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 to-white">
      <div className="text-center">
        <div className="mb-8">
          <div className="inline-block relative">
            <div className="w-32 h-32 rounded-full border-8 border-orange-200 border-t-orange-500 animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">Dhangar Helpline</h1>
        <p className="text-lg text-gray-600 mb-6">Loading Community Platform...</p>

        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div
            className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500 mt-3">{progress}%</p>
      </div>
    </div>
  );
}
