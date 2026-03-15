export default function Sante() {
  const routine = [
    { time: '5:00', activity: 'Réveil & Méditation', icon: '🧘' },
    { time: '5:30', activity: 'Exercice physique', icon: '💪' },
    { time: '6:00', activity: 'Douche & Petit déj', icon: '🚿' },
    { time: '6:30', activity: 'Préparer la journée', icon: '📋' },
  ];

  return (
    <div className="min-h-screen bg-orange-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-orange-600">💪 Santé & Wellness</h1>
        
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-orange-600 mb-8">📅 Routine 5h du Matin</h2>
          <div className="space-y-4">
            {routine.map((item, idx) => (
              <div key={idx} className="flex items-center p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                <span className="text-3xl mr-4">{item.icon}</span>
                <div>
                  <p className="font-bold text-gray-800">{item.time} - {item.activity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}