import { useState } from "react";
import { useTodoContext } from "../../../context/TodoContext";

const AddTask = () => {
  const { setTasks } = useTodoContext();
  const [taskInput, setTaskInput] = useState("");

  const handleTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        label: taskInput,
        isCompleted: false,
      },
    ]);
    setTaskInput("");
  };

  return (
    <div className="w-full rounded-[0.313rem] py-3.5 px-5 sm:py-5 sm:px-6 bg-white dark:bg-[#25273D] flex items-center gap-x-3 sm:gap-x-6 mt-[1.3rem] sm:mt-10 mb-4 sm:mb-6">
      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-[#E3E4F1] dark:border-[#393A4B] min-w-5 sm:min-w-5"></div>
      <form onSubmit={(e) => handleTaskSubmit(e)} className="w-full">
        <input
          type="text"
          placeholder="Create new todo..."
          className="w-full outline-none bg-white dark:bg-[#25273D] placeholder:text-[#9495A5] dark:placeholder:text-[#767992] placeholder:text-3 sm:placeholder:text-[1.125rem] placeholder:tracking-[-.25px] text-[#393A4B] dark:text-[#C8CBE7] tracking-[-.25px] text-[0.75rem] sm:text-[1.125rem]"
          onChange={(e) => handleTaskInput(e)}
          value={taskInput}
        />
      </form>
    </div>
  );
};

export default AddTask;
