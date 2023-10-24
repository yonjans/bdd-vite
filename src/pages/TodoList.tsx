import { Link } from "react-router-dom"

const TodoListPage = () => {
    return <>
        This is todo list page.<br/>
        Open this <Link to={'/todos/123'}>Todo</Link>
    </>
}

export default TodoListPage