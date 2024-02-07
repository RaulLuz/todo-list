import { useTodoContext } from "../../context/TodoContext";
import AddTask from "./AddTask/AddTask";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Task from "./Task/Task";

const TodoContainer = () => {
  const { darkMode, tasks, selectedFilter } = useTodoContext();

  const filteredTasks = tasks.filter(task => {
    if(selectedFilter == 'Completed') return task.isCompleted
    if(selectedFilter == 'Active') return task.isCompleted == false

    return task
  })

  return (
    <div
      className={`absolute translate-x-[-50%] left-2/4 top-[3rem] sm:top-[4.375rem] w-full px-6 sm:max-w-[33.75rem] sm:min-w-[33.75rem] sm:p-0 ${
        darkMode && "dark"
      }`}
    >
      <Header />
      <AddTask />
      <div className="[&>*:first-child]:rounded-t-[5px]">
        {filteredTasks?.map((task) => {
          return <Task key={task.id} id={task.id} label={task.label} isCompleted={task.isCompleted} />
        })}
      </div>
      <Footer />
    </div>
  );
};

export default TodoContainer;
