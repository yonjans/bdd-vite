
import _ from "lodash"
import { useContext, useState, useEffect } from "react"
import { Navigate, useParams } from "react-router"
import { TodoRC } from "../components/Todo"
import { Todo } from "@models/todo"
import { TodoRepositoryContext } from "@shared/contexts"

declare type TodoPageParam = {
    id: string
}

const TodoPage = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [todo, setTodo] = useState<Todo | null>(null)
    
    const params = useParams<TodoPageParam>()

    if (_.isUndefined(params.id)) {
        // TODO: report wrong use of path and show toast message
        return <Navigate to={'/'} />
    }


    const todoRepository = useContext(TodoRepositoryContext)
    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const todo = await todoRepository.get(params.id!)
                console.log(todo)
                setTodo(todo)
                setIsLoading(false)
            } catch (err) {
                // TODO: show message from error
                setError('Failed to load todo')
            } finally {
                setIsLoading(false)
            }
        }
      
        fetchTodo();
    }, [])
    
    return isLoading ? <p>Loading</p>
        : !_.isNull(error) ? <p>{error}</p>
            : <>{todo && <TodoRC todo={todo} />}</>
}

export default TodoPage
