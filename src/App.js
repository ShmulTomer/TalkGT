import './boxicons/css/boxicons.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Start from './pages/Start';
import FAQ from './pages/FAQ';
import Add from './pages/Add';
import User from './pages/User';
import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { Link } from 'react-router-dom';

function App() {

    const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    
    const isMobile = windowDimension <= 640;
  }, []);

  const isMobile = windowDimension <= 640;

//   if(isMobile) {
//     return (
//         <MobileNavbar.Wrapper>
//               <MobileNavbar.Items>
//                 <MobileNavbar.Item>
                  
//                 <Link to={"/faq"} key="1" style={{ textDecoration: 'none' }}>
//                         Home
//                     </Link>


//                 </MobileNavbar.Item>
//                 <MobileNavbar.Item>
//                   Blog
//                 </MobileNavbar.Item>
//                 <MobileNavbar.Item>
//                   About
//                 </MobileNavbar.Item>
//               </MobileNavbar.Items>
//             </MobileNavbar.Wrapper>
//       );
//   }

  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<AppLayout />}>
                  <Route index element={<Dashboard />} />
                  <Route path='/start' element={<Start />} />
                  <Route path='/add' element={<Add />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/faq' element={<FAQ />} />
                  <Route path='/user' element={<User />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );

}



export default App;
