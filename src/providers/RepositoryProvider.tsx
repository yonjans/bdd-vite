import { TodoRepository } from "@repositories/todoRepository"
import React from "react"
import { TodoRepositoryContext } from "@shared/contexts"

declare type TodoRepositoryProviderProps = {
    repository: TodoRepository
}

export const TodoRepositoryProvider = ({repository, children}: React.PropsWithChildren<TodoRepositoryProviderProps>) => {
    return <TodoRepositoryContext.Provider value={repository}>
        {children}
    </TodoRepositoryContext.Provider>
}
