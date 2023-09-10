import { createContext, useCallback, useContext, useState } from 'react';

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
}

type TodoContextType = {
  todos: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, completed: boolean) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = useCallback((text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  }, [todos, setTodos]);

  const deleteTodo = useCallback((id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }, [todos, setTodos])

  const updateTodo = useCallback((id: number, completed: boolean) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    todos[todoIndex].completed = completed
    setTodos([...todos])
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
