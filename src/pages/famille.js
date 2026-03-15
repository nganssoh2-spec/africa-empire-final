export default function Famille() {
  const familyMembers = [
    {
      name: 'Gildas Rostand',
      role: 'Père - Visionnaire',
      birth: '20/07/1988',
      description: 'Entrepreneur et visionnaire',
    },
    {
      name: 'Maman',
      role: 'Mère - Sagesse',
      birth: '15/03/1965',
      description: 'Cœur de la famille',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-rose-600">👨‍👩‍👧‍👦 Notre Famille</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {familyMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h2>
              <p className="text-rose-600 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 mb-2">Né(e): {member.birth}</p>
              <p className="text-gray-700">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}