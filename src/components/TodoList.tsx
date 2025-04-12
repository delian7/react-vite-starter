import { useEffect, useState } from 'react';
import { Todo } from '../types/todo';
import { fetchTodos } from '../services/todoService';

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (err) {
        console.error(err);
        setError("unable to fetch todos");
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center p-3 bg-white rounded shadow"
          >
            <input
              type="checkbox"
              checked={false}
              readOnly
              className="mr-3"
            />
            <span className={todo.name ? 'line-through text-gray-500' : ''}>
              {todo.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};