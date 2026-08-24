import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 p-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-orange-500">🎮 FF Sensibilidade</h1>
            <ul className="flex gap-6">
              <li><a href="/" className="hover:text-orange-500">Home</a></li>
              <li><a href="/calculator" className="hover:text-orange-500">Calculadora</a></li>
              <li><a href="/guides" className="hover:text-orange-500">Guias</a></li>
              <li><a href="/login" className="hover:text-orange-500">Login</a></li>
            </ul>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={
              <div className="p-8 max-w-7xl mx-auto">
                <div className="text-center py-20">
                  <h2 className="text-4xl font-bold mb-4">🎯 Free Fire Sensibilidade</h2>
                  <p className="text-xl text-gray-300 mb-8">Configure sua sensibilidade ideal para PC e Celular</p>
                  <a href="/calculator" className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg text-lg font-bold">
                    Começar Agora
                  </a>
                </div>
              </div>
            } />
            <Route path="/calculator" element={<div className="p-8 text-center">📊 Calculadora - Em Construção</div>} />
            <Route path="/guides" element={<div className="p-8 text-center">📚 Guias - Em Construção</div>} />
            <Route path="/login" element={<div className="p-8 text-center">🔐 Login - Em Construção</div>} />
          </Routes>
        </main>

        <footer className="bg-gray-800 p-6 mt-12 text-center text-gray-400">
          <p>© 2026 FF Sensibilidade. Made with ❤️ for Free Fire players</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
