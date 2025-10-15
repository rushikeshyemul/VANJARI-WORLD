import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Mail, Calendar } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [visitorCount] = useState('2625');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
    setEmail('');
  };

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our History', href: '/history' },
    { label: 'Identity Of Community', href: '/identity' },
    { label: 'Star Persons', href: '/star-persons' },
    { label: 'Success Stories', href: '/success-stories' },
  ];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400 border-b-2 border-orange-500 pb-2 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400 border-b-2 border-orange-500 pb-2 inline-block">
                Visitors
              </h3>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="flex justify-center gap-2 mb-4">
                  {visitorCount.split('').map((digit, index) => (
                    <div
                      key={index}
                      className="bg-gray-700 w-12 h-16 flex items-center justify-center rounded text-3xl font-bold text-orange-400"
                    >
                      {digit}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center text-sm text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>Hits Today: {visitorCount}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-orange-400 border-b-2 border-orange-500 pb-2 inline-block">
                Subscribe
              </h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-orange-500 focus:outline-none text-white"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-orange-600 text-white py-3 rounded font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold">Dhangar WORLD</h4>
                <div className="flex items-center text-sm text-gray-400 mt-1">
                  <MapPin size={14} className="mr-1" />
                  <span>Ek Diwas Samajasathi Foundation</span>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                  <span className="ml-5">Aundh, Pune 411007 (MS) India</span>
                </div>
                <div className="flex items-center text-sm text-gray-400 mt-1">
                  <Mail size={14} className="mr-1 ml-0" />
                  <span>contact@Dhangarworld.com</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-500 py-4">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>COPYRIGHT © 2025 - Designed with ❤️ by Website Developer Pune</p>
        </div>
      </div>
    </footer>
  );
}
