import { useTodoContext } from "../../context/TodoContext";

const Background = () => {
  const { darkMode } = useTodoContext();

  return (
    <div
      className={`${
        darkMode
          ? "bg-[url('/assets/header-background.png')]"
          : "bg-[url('/assets/header-background-white.png')]"
      } bg-cover bg-no-repeat bg-center min-h-[12.5rem] sm:min-h-[18.75rem] w-full`}
    ></div>
  );
};

export default Background;
