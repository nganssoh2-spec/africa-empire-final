import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Bonjour! Je suis ton assistant IA personnel. Comment puis-je t\'aider?', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: input, sender: 'user' }]);
      setInput('');
      // Simulated bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { id: prev.length + 1, text: 'Je vais vous aider avec cela...', sender: 'bot' }]);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-600">🤖 Chat IA</h1>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-96">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}> 
                <div className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-800'}`}> 
                  {msg.text} 
                </div> 
              </div> 
            ))} 
          </div> 
          
          <div className="border-t p-4 flex gap-2"> 
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyPress={(e) => e.key === 'Enter' && handleSend()} 
              placeholder="Écris un message..." 
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600" 
            /> 
            <button onClick={handleSend} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition font-bold"> 
              Envoyer 
            </button> 
          </div> 
        </div> 
      </div> 
    </div> 
  );
}