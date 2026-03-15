export default function Opportunites() {
  const opportunities = [
    {
      title: 'Bourse d\'études - Canada',
      country: 'Canada',
      amount: '$10,000',
      deadline: '2026-05-30',
      type: 'Bourse',
    },
    {
      title: 'Programme d\'emploi - Tech',
      country: 'Rwanda',
      amount: 'Salaire compétitif',
      deadline: '2026-04-15',
      type: 'Emploi',
    },
    {
      title: 'Bourse entrepreneuriat',
      country: 'Senegal',
      amount: '$5,000',
      deadline: '2026-06-30',
      type: 'Bourse',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-blue-600">💼 Opportunités</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((opp, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-800">{opp.title}</h3>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">{opp.type}</span>
              </div>
              <p className="text-gray-600 mb-2">📍 {opp.country}</p>
              <p className="text-green-600 font-bold mb-2">💰 {opp.amount}</p>
              <p className="text-gray-500 text-sm mb-4">Deadline: {opp.deadline}</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition">
                Postuler →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}