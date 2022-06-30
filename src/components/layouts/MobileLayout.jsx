import { Outlet } from "react-router-dom";
import SidebarMobile from "../sidebar/SidebarMobile";

const MobileLayout = () => {
  return (
    <div
      style={{
        padding: "25px 0px 0px 130px",
      }}
    >
      <SidebarMobile />
      <Outlet />
    </div>
  );
};

export default MobileLayout;
