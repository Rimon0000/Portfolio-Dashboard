import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from "../App";
import Dashboard from "@/pages/dashboard/Dashboard";

  
  
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
        //   {
        //     path: "/login",
        //     element: <Login></Login>,
        //   },


      ]
    },
  ]);
  
  export default router;