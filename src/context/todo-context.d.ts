import { ReactNode } from "react";

export interface ITodoContextProvider {
    children: ReactNode
}

export interface ITodoContext {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
    tasks: Tasks[]
    setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>
    selectedFilter: string,
    setSelectedFilter: React.Dispatch<React.SetStateAction<string>>
}

interface Tasks {
    id: string
    label: string
    isCompleted: boolean
}
