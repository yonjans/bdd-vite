import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { TodoPage } from "./pages/TodoPage"

const Router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="todos/:id" element={<TodoPage />} />
  ),
)

export default Router
