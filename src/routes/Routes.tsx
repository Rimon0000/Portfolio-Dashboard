import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from "../App";
import Dashboard from "@/pages/dashboard/Dashboard";
import AddProject from "@/pages/dashboard/AddProject";

  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
    //   errorElement: <ErrorPage></ErrorPage>,
      children: [
          {
              index: true,
              element: <Dashboard></Dashboard>
          },
          {
            path: "/add-project",
            element: <AddProject/>
          },


      ]
    },
  ]);
  
  export default router;