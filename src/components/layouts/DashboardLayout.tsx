
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = ()=>{
    return (
        <div className="grid grid-cols-12">
            <Sidebar></Sidebar>
            <div className="col-span-10 h-full p-5">
            <Outlet></Outlet>
            </div>
        </div>
    )
}

export default DashboardLayout;