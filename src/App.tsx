import Background from "./components/Background/Background";
import TodoContainer from "./components/TodoContainer/TodoContainer";
import { TodoContextProvider, useTodoContext } from "./context/TodoContext";

function App() {
  const { darkMode } = useTodoContext();

  return (
    <TodoContextProvider>
      <main className={darkMode ? "dark" : ""}>
        <Background />
        <TodoContainer />
      </main>
    </TodoContextProvider>
  );
}

export default App;
