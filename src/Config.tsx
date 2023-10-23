import React from "react"
import { TodoRepository } from "@repositories/todoRepository"
import { TodoRepositoryProvider } from "./providers/RepositoryProvider"

declare type ConfigProps = {
    todoRepository: TodoRepository
}

export const Config = ({ todoRepository, children }: React.PropsWithChildren<ConfigProps>) => {
    return <TodoRepositoryProvider repository={todoRepository}>
        {children}
    </TodoRepositoryProvider>
}
