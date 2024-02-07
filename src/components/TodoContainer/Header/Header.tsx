import { useEffect } from "react";
import { useTodoContext } from "../../../context/TodoContext";

const Header = () => {
  const { darkMode, setDarkMode } = useTodoContext();

  useEffect(() => {    
    if (darkMode) {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
    }

    else {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="flex items-center justify-between w-full">
      <h1 className="text-white uppercase tracking-[0.838rem] sm:tracking-[0.938rem] text-[1.8rem] sm:text-[2.5rem] font-bold">
        Todo
      </h1>
      <button onClick={toggleDarkMode}>
        <img
          src={darkMode ? `/assets/svg/sun.svg` : "/assets/svg/moon.svg"}
          className="mt-[-5px]"
        />
      </button>
    </header>
  );
};

export default Header;
