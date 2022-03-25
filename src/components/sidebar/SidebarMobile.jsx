import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebarmobile.scss';
import logo from "./Web-Logo1.png";

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home-alt'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Getting Started',
        icon: <i className='bx bx-star'></i>,
        to: '/start',
        section: 'start'
    },
    {
        display: 'Add Complaint',
        icon: <i className='bx bx-message-square-add'></i>,
        to: '/add',
        section: 'add'
    },
    {
        display: 'Contact',
        icon: <i className='bx bx-user'></i>,
        to: '/contact',
        section: 'contact'
    },
    {
        display: 'FAQ',
        icon: <i className='bx bx-receipt'></i>,
        to: '/faq',
        section: 'faq'
    },
    {
        display: 'Account',
        icon: <i className='bx bx-user-circle'></i>,
        to: '/user',
        section: 'user'
    },
]

const SidebarMobile = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebarmobile__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebarmobile'>
        <div className="sidebarmobile__logo">
            
            <img src={logo} />
        </div>
        <div ref={sidebarRef} className="sidebarmobile__menu">
            <div
                ref={indicatorRef}
                className="sidebarmobile__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index} style={{ textDecoration: 'none' }}>
                        <div className={`sidebarmobile__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebarmobile__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebarmobile__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default SidebarMobile;