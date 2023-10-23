import React from "react"
import { BackendAPI } from "@clients/api/api"
import { LocalStorageClient } from "@clients/storage/localStorage"
import { TodoRepository } from "@repositories/todoRepository"

export const todoRepository = new TodoRepository(
    new BackendAPI(
        import.meta.env.BASE_API_URL,
        new LocalStorageClient(localStorage),
    )
)
export const TodoRepositoryContext = React.createContext(todoRepository)
