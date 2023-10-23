import { BackendAPI } from '@clients/api/api';
import { IJsonAPI } from '@clients/api/types';

import type { Todo } from '@models/todo';
import type { ICRUDRepository } from '@repositories/types';

interface TodoData {
    title: string
}

export class TodoRepository implements ICRUDRepository<Todo, TodoData> {

    private api: IJsonAPI;

    constructor(api: BackendAPI) {
        this.api = api
    }
    async get(id: string): Promise<Todo> {
        const resp = await this.api.get<Todo>(`todos/${id}`)
        return resp.data
    }
    async post(data: TodoData): Promise<Todo> {
        const resp = await this.api.post<TodoData, Todo>(`todos/new`, data)
        return resp.data
    }
    async put(id: string, data: TodoData): Promise<Todo> {
        const resp = await this.api.put<TodoData, Todo>(`todos/${id}`, data)
        return resp.data
    }
    async delete(id: string): Promise<{}> {
        const resp = await this.api.delete(`todos/${id}`)
        return resp.data
    }
}
