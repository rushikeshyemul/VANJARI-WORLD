import { Leader } from '../types/wordpress';

interface LeaderSpeaksProps {
  leaders: Leader[];
}

export default function LeaderSpeaks({ leaders }: LeaderSpeaksProps) {
  if (leaders.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Leader Speaks</h2>
          <p className="text-center text-gray-500">Loading leaders...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Leader Speaks</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative">
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                  <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                    <img
                      src={leader.image || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200'}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-16 pb-6 px-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                <p className="text-sm text-orange-600 font-semibold mb-4">{leader.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {leader.excerpt}
                </p>
                <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
