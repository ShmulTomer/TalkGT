import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebarmobile.scss";
import logo from "./TalkGT_Bottom.png";

const sidebarNavItems = [
  {
    display: "",
    icon: <i className="bx bx-home-alt"></i>,
    to: "/",
    section: "",
  },
  {
    display: "",
    icon: <i className="bx bx-star"></i>,
    to: "/start",
    section: "start",
  },
  {
    display: "",
    icon: <i className="bx bx-message-square-add"></i>,
    to: "/add",
    section: "add",
  },
  {
    display: "",
    icon: <i className="bx bx-receipt"></i>,
    to: "/myposts",
    section: "myposts",
  },
  {
    display: "",
    icon: <i className="bx bx-user"></i>,
    to: "/contact",
    section: "contact",
  },

  {
    display: "",
    icon: <i className="bx bx-user-circle"></i>,
    to: "/user",
    section: "user",
  },
];

const SidebarMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebarmobile__menu__item"
      );
      //indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight + 0.5);
    }, 50);
  }, []);

  // change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebarmobile">
      <div className="sidebarmobile__logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div ref={sidebarRef} className="sidebarmobile__menu">
        {/* <div
                ref={indicatorRef}
                className="sidebarmobile__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div> */}
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index} style={{ textDecoration: "none" }}>
            <div
              className={`sidebarmobile__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebarmobile__menu__item__icon">{item.icon}</div>
              <div className="sidebarmobile__menu__item__text">
                {item.display}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarMobile;
