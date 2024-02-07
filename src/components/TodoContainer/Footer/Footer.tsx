import { useTodoContext } from "../../../context/TodoContext";

const Footer = () => {
  const { setSelectedFilter, setTasks, tasks, selectedFilter } =
    useTodoContext();

  const handleSelectedFilter = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleClearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.isCompleted));
  };

  return (
    <>
      <footer className="bg-white dark:bg-[#25273D] flex items-center justify-between pt-[1rem] pb-[.95rem] sm:pb-5 px-6 rounded-b-[5px]">
        <div className="text-[.75rem] sm:text-[0.875rem] tracking-[-.19px] font-normal text-[#9495A5] dark:text-[#5B5E7E]">
          {tasks.length} items left
        </div>
        <div className="text-[0.875rem] tracking-[-.19px] font-bold hidden gap-x-[1.188rem] text-[#9495A5] dark:text-[#5B5E7E] sm:flex">
          <button
            onClick={() => handleSelectedFilter("All")}
            className={selectedFilter == "All" ? "text-[#3A7CFD]" : ""}
          >
            All
          </button>
          <button
            onClick={() => handleSelectedFilter("Active")}
            className={selectedFilter == "Active" ? "text-[#3A7CFD]" : ""}
          >
            Active
          </button>
          <button
            onClick={() => handleSelectedFilter("Completed")}
            className={selectedFilter == "Completed" ? "text-[#3A7CFD]" : ""}
          >
            Completed
          </button>
        </div>
        <button
          className="text-[.75rem] sm:text-[0.875rem] tracking-[-.19px] font-normal text-[#9495A5] dark:text-[#5B5E7E]"
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      </footer>
      <div className="bg-white dark:bg-[#25273D] flex items-center justify-center pt-[1rem] pb-[.95rem] px-6 text-[0.875rem] tracking-[-.19px] font-bold gap-x-[1.188rem] text-[#9495A5] dark:text-[#5B5E7E] sm:hidden rounded-[5px] mt-4">
        <button
          onClick={() => handleSelectedFilter("All")}
          className={selectedFilter == "All" ? "text-[#3A7CFD]" : ""}
        >
          All
        </button>
        <button
          onClick={() => handleSelectedFilter("Active")}
          className={selectedFilter == "Active" ? "text-[#3A7CFD]" : ""}
        >
          Active
        </button>
        <button
          onClick={() => handleSelectedFilter("Completed")}
          className={selectedFilter == "Completed" ? "text-[#3A7CFD]" : ""}
        >
          Completed
        </button>
      </div>
    </>
  );
};

export default Footer;
