export default function Finances() {
  return (
    <div className="min-h-screen bg-yellow-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 text-yellow-600">💰 Finances</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">💵 Revenus</h2>
            <p className="text-4xl font-bold text-green-600 mb-2">$0</p>
            <p className="text-gray-600">Cette semaine</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-yellow-600 mb-4">📊 Dépenses</h2>
            <p className="text-4xl font-bold text-red-600 mb-2">$0</p>
            <p className="text-gray-600">Cette semaine</p>
          </div>
        </div>
      </div>
    </div>
  );
}