import { Todo } from '../types/todo';
import { API_URL } from '../env';
import { API_KEY } from '../env';

export const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const response = await fetch(API_URL, {
      headers: {
        'x-api-key': `${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};