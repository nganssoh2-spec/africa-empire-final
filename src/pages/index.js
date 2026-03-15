import Link from 'next/link';

export default function Home() {
  const modules = [
    { name: 'Famille', href: '/famille', emoji: '👨‍👩‍👧‍👦', color: 'from-rose-400 to-pink-500' },
    { name: 'Spiritualité', href: '/spiritualite', emoji: '✨', color: 'from-violet-400 to-purple-500' },
    { name: 'Opportunités', href: '/opportunites', emoji: '💼', color: 'from-blue-400 to-cyan-500' },
    { name: 'Chat IA', href: '/chat', emoji: '🤖', color: 'from-green-400 to-emerald-500' },
    { name: 'Santé', href: '/sante', emoji: '💪', color: 'from-orange-400 to-red-500' },
    { name: 'Finances', href: '/finances', emoji: '💰', color: 'from-yellow-400 to-gold-500' },
    { name: 'Communauté', href: '/finances', emoji: '👥', color: 'from-indigo-400 to-blue-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gold via-violet to-rose py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4">
          🌍 Africa Empire
        </h1>
        <p className="text-xl text-white text-center mb-16 opacity-90">
          Plateforme familiale intégrée pour la nouvelle génération africaine
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <Link key={module.name} href={module.href}>
              <div className={`bg-gradient-to-br ${module.color} rounded-xl p-8 cursor-pointer hover:scale-105 transition-transform shadow-xl`}>
                <div className="text-6xl mb-4">{module.emoji}</div>
                <h2 className="text-2xl font-bold text-white">{module.name}</h2>
                <p className="text-white opacity-90 mt-2">Explore →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}