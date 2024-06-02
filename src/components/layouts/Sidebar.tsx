import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const Sidebar = () => {
  const currentUser = useAppSelector(useCurrentUser);
  const dispatch = useAppDispatch()

  //handle logout
  const handleLogout = () =>{
    dispatch(logout())
  }

  return (
    <aside className="bg-slate-800 col-span-2 min-h-screen sticky">
      <div className="text-white text-center font-bold text-xl h-12 flex items-center px-4 lg:px-5 my-1">
        <div className="flex justify-between gap-5">
          <img className="w-[30px] h-[30px] rounded-full shrink-0" src="https://i.ibb.co/MG1QK6P/images.png" alt="" />
          <h1 className="uppercase truncate">RIMON</h1>
        </div>
      </div>
      <hr />
      <nav className="flex flex-col gap-2 px-4 lg:px-5 py-1 mt-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(
              "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
              {
                "text-white bg-black": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Dashboard</span>
        </NavLink>

        <div className="flex justify-between text-slate-300 font-semibold text-lg mt-2 mb-1">
        <h1 className="truncate">Projects</h1>
        <h1 className="truncate">+</h1>
        </div>
        <NavLink
          to="/add-project"
          className={({ isActive }) =>
            cn(
              "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
              {
                "text-white bg-black": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Add Project</span>
        </NavLink>
        <NavLink
          to="/all-projects"
          className={({ isActive }) =>
            cn(
              "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
              {
                "text-white bg-black": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">All Projects</span>
        </NavLink>

        <div className="flex justify-between text-slate-300 font-semibold text-lg mt-2 mb-1">
        <h1 className="truncate">Blogs</h1>
        <h1 className="truncate">+</h1>
        </div>
        <NavLink
          to="/add-blog"
          className={({ isActive }) =>
            cn(
              "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
              {
                "text-white bg-black": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Add Blog</span>
        </NavLink>
        <NavLink
          to="/all-blogs"
          className={({ isActive }) =>
            cn(
              "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
              {
                "text-white bg-black": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">All Blogs</span>
        </NavLink>

        <div className="flex justify-between text-slate-300 font-semibold text-lg mt-2 mb-1">
        <h1 className="truncate">Skills</h1>
        <h1 className="truncate">+</h1>
        </div>
        <NavLink
          to="/add-skill"
          className={({ isActive }) =>
            cn(
              "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
              {
                "text-white bg-black": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Add Skill</span>
        </NavLink>
        <NavLink
          to="/all-skills"
          className={({ isActive }) =>
            cn(
              "p-2 bg-green-300 rounded-md transition-all flex gap-2 items-center",
              {
                "text-white bg-black": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">All Skills</span>
        </NavLink>

        <div className="absolute bottom-0">
          <NavLink to={currentUser ? "/" : "/login"}>
            <Button onClick={handleLogout}>{currentUser ? "Logout" : "Login"}</Button>
          </NavLink>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
