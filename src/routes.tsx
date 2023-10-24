import { Route } from "react-router-dom"
import TodoPage from "./pages/TodoPage"
import RootPage from "./pages/RootPage"
import AboutPage from "./pages/AboutPage"
import TodoListPage from "./pages/TodoList"
import RootLayout from "./layouts/RootLayout"
import TodoLayout from "./layouts/TodoLayout"

const routes = <Route path="/" element={<RootLayout />}>
    <Route index element={<RootPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="todos" element={<TodoLayout />}>
        <Route index element={<TodoListPage />} />
        <Route path=":id" element={<TodoPage />} />
    </Route>
</Route>

export default routes
