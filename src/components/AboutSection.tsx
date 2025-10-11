import { Users, Target, TrendingUp } from 'lucide-react';

interface AboutSectionProps {
  title: string;
  content: string;
}

export default function AboutSection({ title, content }: AboutSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">{title}</h2>
            <div
              className="text-gray-600 leading-relaxed mb-6 space-y-4"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition-colors font-semibold">
              Read More
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="relative">
                  <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={`https://images.pexels.com/photos/${220453 + i}/pexels-photo-${220453 + i}.jpeg?auto=compress&cs=tinysrgb&w=150`}
                      alt={`Member ${i + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-orange-100">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-gray-800">VANJARI</p>
                  <p className="text-xs font-bold text-gray-800">WORLD</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Community Network</h3>
            <p className="text-gray-600">
              Building strong connections across all community members nationwide
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              Empowering community members through education and opportunities
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Growth Focus</h3>
            <p className="text-gray-600">
              Driving socio-economic development and progress for all members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
