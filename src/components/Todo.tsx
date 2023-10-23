import { Todo } from "@models/todo"

declare type TodoProps = {
    todo: Todo
}

export const TodoRC = (props: TodoProps) => {
    const todo = props.todo;
    return <>
        <h2>{todo.title}</h2>
        {todo.description && <p>{todo.description}</p>}
    </>
}
