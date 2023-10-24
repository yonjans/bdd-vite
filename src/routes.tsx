import { Route } from "react-router-dom"
import TodoPage from "./pages/TodoPage"
import RootPage from "./pages/RootPage"
import AboutPage from "./pages/AboutPage"
import TodoListPage from "./pages/TodoList"

const routes = <Route path="/" element={<RootPage />}>
<Route index element={<RootPage />} />
<Route path="about" element={<AboutPage />} />
<Route path="todos" element={<TodoListPage />}>
    <Route path=":id" element={<TodoPage />} />
</Route>
</Route>

export default routes
