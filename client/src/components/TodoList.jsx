import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Check } from 'lucide-react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  // Carregar do Local Storage quando componente monta
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Salvar no Local Storage quando todos mudam
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
      createdAt: new Date().toLocaleDateString('pt-BR'),
    };

    setTodos([newTodo, ...todos]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearAll = () => {
    if (window.confirm('Tem certeza que quer deletar TODAS as tarefas?')) {
      setTodos([]);
    }
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'pending':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();
  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.filter(todo => !todo.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-black p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">📝 Minhas Tarefas</h1>
          <p className="text-gray-400">Organize suas atividades com Local Storage</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">{todos.length}</div>
            <div className="text-sm text-gray-400">Total</div>
          </div>
          <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">{completedCount}</div>
            <div className="text-sm text-gray-400">Completas</div>
          </div>
          <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400">{pendingCount}</div>
            <div className="text-sm text-gray-400">Pendentes</div>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={addTodo} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Adicione uma nova tarefa..."
              className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-fire transition"
            />
            <button
              type="submit"
              className="bg-fire hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition"
            >
              <Plus size={20} />
              Adicionar
            </button>
          </div>
        </form>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'all'
                ? 'bg-fire text-white'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
            }`}
          >
            Todas
          </button>
          <button
            onClick={() => setFilter('pending')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'pending'
                ? 'bg-fire text-white'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
            }`}
          >
            Pendentes
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              filter === 'completed'
                ? 'bg-fire text-white'
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
            }`}
          >
            Completas
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3 mb-8">
          {filteredTodos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {filter === 'all'
                  ? 'Nenhuma tarefa ainda. Crie uma! 🎯'
                  : `Nenhuma tarefa ${filter === 'pending' ? 'pendente' : 'completa'} 🎉`}
              </p>
            </div>
          ) : (
            filteredTodos.map(todo => (
              <div
                key={todo.id}
                className="flex items-center gap-3 bg-gray-800/30 border border-gray-700 rounded-lg p-4 hover:border-fire/30 transition"
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition ${
                    todo.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-600 hover:border-fire'
                  }`}
                >
                  {todo.completed && <Check size={16} className="text-white" />}
                </button>

                <div className="flex-1 min-w-0">
                  <p
                    className={`text-lg transition ${
                      todo.completed
                        ? 'text-gray-500 line-through'
                        : 'text-white'
                    }`}
                  >
                    {todo.text}
                  </p>
                  <p className="text-sm text-gray-600">{todo.createdAt}</p>
                </div>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="flex-shrink-0 text-red-400 hover:text-red-300 transition"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Clear All Button */}
        {todos.length > 0 && (
          <div className="text-center">
            <button
              onClick={clearAll}
              className="bg-red-900/30 hover:bg-red-900/50 text-red-400 border border-red-500/30 px-6 py-2 rounded-lg font-semibold transition"
            >
              🗑️ Limpar Todas as Tarefas
            </button>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-12 p-6 bg-gray-800/20 border border-gray-700 rounded-lg text-center">
          <p className="text-gray-400 text-sm">
            ✅ Suas tarefas são salvas automaticamente no seu navegador
          </p>
        </div>
      </div>
    </div>
  );
}
