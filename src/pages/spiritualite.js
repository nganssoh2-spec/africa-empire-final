export default function Spiritualite() {
  const affirmations = [
    'Je suis capable de réaliser mes rêves',
    'Chaque jour je deviens meilleur',
    'Ma famille est ma force',
    'Je crois en mon potentiel',
    'L'succès est mon destin',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-violet-600">✨ Spiritualité</h1>
        
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-violet-600 mb-4">���� Numérologie</h2>
          <p className="text-gray-700 mb-4">Découvrez votre nombre de vie et ses significations.</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-violet-600 mb-6">💫 Affirmations du Jour</h2>
          <div className="space-y-4">
            {affirmations.map((affirmation, idx) => (
              <div key={idx} className="p-4 bg-violet-50 rounded-lg border-l-4 border-violet-600">
                <p className="text-gray-800">{affirmation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}