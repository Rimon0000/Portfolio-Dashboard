import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-slate-800 col-span-2 min-h-screen sticky">
      <div className="text-white text-center font-bold text-xl h-12 flex items-center justify-center">
        <h1 className="uppercase">RIMON</h1>
      </div>
      <nav className="flex flex-col gap-2 px-4 lg:px-5 py-1">
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
          to="/dashboard/create-testimonial"
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
          <span className="truncate">Add Testimonial</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
