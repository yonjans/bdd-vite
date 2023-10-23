import { RouterProvider } from "react-router-dom";
import Router from "./router";
import { Config } from "./Config";
import { todoRepository } from "@shared/contexts";

const App = () => {
  return <Config todoRepository={todoRepository}>
    <RouterProvider router={Router} />
  </Config>
}

export default App
