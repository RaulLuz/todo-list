import { createContext, useState, useContext } from "react";
import { ITodoContext, ITodoContextProvider, Tasks } from "./todo-context";

export const TodoContext = createContext({} as ITodoContext);

export function TodoContextProvider({ children }: ITodoContextProvider) {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('')

  return (
    <TodoContext.Provider
      value={{
        darkMode,
        setDarkMode,
        tasks,
        setTasks,
        selectedFilter,
        setSelectedFilter
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);
