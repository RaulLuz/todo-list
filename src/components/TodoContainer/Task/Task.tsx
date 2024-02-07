import { useTodoContext } from "../../../context/TodoContext";

interface Props {
  id: string;
  label: string;
  isCompleted: boolean;
}

const Task = ({ id, label, isCompleted}: Props) => {
  const { setTasks } = useTodoContext();

  const handleCompleteTask = () => {
    setTasks((prev) => {
      const newTasks = prev.map((task) => {
        if (task.id == id) return { ...task, isCompleted: !task.isCompleted };

        return task;
      });

      return newTasks;
    });
  };

  const handleRemoveTask = () => {
    setTasks(prev => prev.filter((task) => task.id !== id))
  }

  return (
    <div
      className="w-full py-3.5 px-5 sm:py-5 sm:px-6 bg-white dark:bg-[#25273D] flex items-center justify-between border-b border-[#E3E4F1] dark:border-[#393A4B] cursor-pointer group"
      onClick={handleCompleteTask}
    >
      <div className="flex items-center gap-x-3 sm:gap-x-6">
        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#E3E4F1] dark:border-[#393A4B] min-w-5 sm:min-w-5">
          {isCompleted && <img src="assets/svg/selected-task.svg" />}
        </div>
        <div className={`${isCompleted && 'text-[#D1D2DA] line-through dark:text-[#4D5067]'} text-[#494C6B] dark:text-[#C8CBE7] tracking-[-.25px] text-[0.75rem] sm:text-[1.125rem]`}>
          {label}
        </div>
      </div>
      <div className="hidden group-hover:block" onClick={handleRemoveTask}>
          <img src="assets/svg/remove-icon.svg" />
      </div>
    </div>
  );
};

export default Task;
