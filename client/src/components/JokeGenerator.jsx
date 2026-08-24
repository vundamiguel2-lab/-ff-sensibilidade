import React, { useState, useEffect } from 'react';
import { RotateCw, Copy, Heart } from 'lucide-react';

export default function JokeGenerator() {
  const [joke, setJoke] = useState('');
  const [punchline, setPunchline] = useState('');
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [copied, setCopied] = useState(false);

  // Carregar favoritos do Local Storage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteJokes');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    // Carrega uma piada ao iniciar
    fetchJoke();
  }, []);

  // Salvar favoritos no Local Storage
  useEffect(() => {
    localStorage.setItem('favoriteJokes', JSON.stringify(favorites));
  }, [favorites]);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.jokes.one/jokes/random');
      const data = await response.json();
      
      if (data.success) {
        const jokeContent = data.contents.jokes[0];
        setJoke(jokeContent.title || jokeContent.joke);
        setPunchline(jokeContent.punchline || '');
      }
    } catch (error) {
      setJoke('Erro ao carregar piada 😅');
      setPunchline('Tente novamente em alguns segundos...');
      console.error('Erro ao buscar piada:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRandomType = async () => {
    setLoading(true);
    try {
      const types = ['knock-knock', 'general', 'programming'];
      const randomType = types[Math.floor(Math.random() * types.length)];
      
      const response = await fetch(`https://v2.jokeapi.dev/joke/${randomType}`);
      const data = await response.json();
      
      if (data.setup && data.delivery) {
        setJoke(data.setup);
        setPunchline(data.delivery);
      } else if (data.joke) {
        setJoke(data.joke);
        setPunchline('');
      }
    } catch (error) {
      setJoke('Erro ao carregar piada 😅');
      setPunchline('Tente novamente em alguns segundos...');
      console.error('Erro ao buscar piada:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = () => {
    const jokeObj = {
      id: Date.now(),
      joke,
      punchline,
      date: new Date().toLocaleDateString('pt-BR'),
    };

    if (!favorites.some(fav => fav.joke === joke)) {
      setFavorites([jokeObj, ...favorites]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const copyToClipboard = () => {
    const fullJoke = punchline ? `${joke}\n\n${punchline}` : joke;
    navigator.clipboard.writeText(fullJoke);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isFavorited = favorites.some(fav => fav.joke === joke);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-black p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">😂 Gerador de Piadas</h1>
          <p className="text-gray-400">Ria com piadas aleatórias da internet!</p>
        </div>

        {/* Main Joke Card */}
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-fire/30 rounded-2xl p-8 mb-8 min-h-64 flex flex-col justify-between hover:border-fire/60 transition">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="inline-block animate-spin mb-4">
                  <RotateCw size={40} className="text-fire" />
                </div>
                <p className="text-gray-400">Buscando uma piada engraçada...</p>
              </div>
            </div>
          ) : (
            <>
              <div>
                <p className="text-white text-2xl font-bold mb-6 leading-relaxed">
                  {joke}
                </p>
                {punchline && (
                  <p className="text-fire text-xl font-semibold leading-relaxed animate-pulse">
                    {punchline}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-8 flex-wrap">
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                    copied
                      ? 'bg-green-500/30 text-green-400'
                      : 'bg-blue-900/30 hover:bg-blue-900/50 text-blue-400'
                  }`}
                >
                  <Copy size={18} />
                  {copied ? 'Copiado!' : 'Copiar'}
                </button>

                <button
                  onClick={addToFavorites}
                  disabled={isFavorited}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition ${
                    isFavorited
                      ? 'bg-red-500/30 text-red-400'
                      : 'bg-red-900/30 hover:bg-red-900/50 text-red-400'
                  }`}
                >
                  <Heart size={18} fill={isFavorited ? 'currentColor' : 'none'} />
                  {isFavorited ? 'Favoritada!' : 'Favoritar'}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Generate Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={fetchJoke}
            disabled={loading}
            className="bg-fire hover:bg-orange-600 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <RotateCw size={20} />
            Piada Aleatória
          </button>
          <button
            onClick={fetchRandomType}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <RotateCw size={20} />
            Categoria Aleatória
          </button>
        </div>

        {/* Favorites Toggle */}
        <button
          onClick={() => setShowFavorites(!showFavorites)}
          className="w-full bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 text-white font-bold py-3 px-4 rounded-lg transition mb-8"
        >
          ❤️ Favoritas ({favorites.length})
        </button>

        {/* Favorites List */}
        {showFavorites && (
          <div className="space-y-4 mb-8">
            {favorites.length === 0 ? (
              <div className="text-center py-8 bg-gray-800/30 rounded-lg">
                <p className="text-gray-500">Nenhuma piada favoritada ainda 😢</p>
              </div>
            ) : (
              favorites.map(fav => (
                <div
                  key={fav.id}
                  className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:border-fire/30 transition"
                >
                  <p className="text-white font-semibold mb-2">{fav.joke}</p>
                  {fav.punchline && (
                    <p className="text-fire text-sm mb-3">{fav.punchline}</p>
                  )}
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{fav.date}</span>
                    <button
                      onClick={() => removeFavorite(fav.id)}
                      className="text-red-400 hover:text-red-300 text-sm font-semibold transition"
                    >
                      Remover ✕
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Info Footer */}
        <div className="p-6 bg-gray-800/20 border border-gray-700 rounded-lg text-center">
          <p className="text-gray-400 text-sm mb-2">
            🎲 Usando APIs externas de piadas
          </p>
          <p className="text-gray-500 text-xs">
            • jokes.one • jokeapi.dev
          </p>
        </div>
      </div>
    </div>
  );
}
