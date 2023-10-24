import React from "react";
import { Config } from "./Config";
import { todoRepository } from "@shared/contexts";

import type { Router } from "@remix-run/router"
import { RouterProvider } from "react-router-dom";

declare type AppProps = {
  router: Router
}

const App = ({router}: AppProps) => {
  return <React.StrictMode>
    <Config todoRepository={todoRepository}>
      <RouterProvider router={router} />
    </Config>
  </React.StrictMode>
}

export default App
