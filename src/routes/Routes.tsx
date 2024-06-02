import {
    createBrowserRouter,
  } from "react-router-dom";
  import App from "../App";
import Dashboard from "@/pages/dashboard/Dashboard";
import AddProject from "@/pages/projects/AddProject";
import AllProject from "@/pages/projects/AllProject";
import UpdateProject from "@/pages/projects/UpdateProject";
import AddBlog from "@/pages/blogs/AddBlog";
import AllBlog from "@/pages/blogs/AllBlog";
import UpdateBlog from "@/pages/blogs/UpdateBlog";

  
  
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
          {
            path: "/all-projects",
            element: <AllProject/>
          },
          {
            path: "/update-project/:id",
            element: <UpdateProject/>
          },
          {
            path: "/add-blog",
            element: <AddBlog/>
          },
          {
            path: "/all-blogs",
            element: <AllBlog/>
          },
          {
            path: "/update-blog/:id",
            element: <UpdateBlog/>
          },


      ]
    },
  ]);
  
  export default router;