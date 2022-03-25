import { Outlet } from "react-router-dom";
import SidebarMobile from "../sidebar/SidebarMobile";


const MobileLayout = () => {
    return <div style = {{
        padding: '50px 0px 0px 250px'
    }}>

        <SidebarMobile />
        <Outlet />
    </div>;
}

export default MobileLayout;