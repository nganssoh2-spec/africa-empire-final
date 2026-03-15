export default function Footer() {
  const messages = [
    '🌟 Chaque jour est une nouvelle opportunité',
    '💪 Tu es plus fort que tu ne le crois',
    '🎯 Tes rêves sont réalisables',
    '❤️ La famille est ta plus grande richesse',
    '🚀 L'avenir est brillant',
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-lg mb-4">{messages[Math.floor(Math.random() * messages.length)]}</p>
        <p className="text-gray-400">© 2026 Africa Empire. Tous droits réservés.</p>
      </div>
    </footer>
  );
}