import "./boxicons/css/boxicons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Start from "./pages/Start";
import MyComplaints from "./pages/MyComplaints";
import Add from "./pages/Add";
import User from "./pages/User";
import MobileLayout from "./components/layouts/MobileLayout";

import { useState, useEffect } from "react";

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
  }, []);

  const isMobile = windowDimension <= 900;

  return (
    <div>
      {!isMobile ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/start" element={<Start />} />
              <Route path="/add" element={<Add />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/myposts" element={<MyComplaints />} />
              <Route path="/user" element={<User />} />
            </Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MobileLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/start" element={<Start />} />
              <Route path="/add" element={<Add />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/myposts" element={<MyComplaints />} />
              <Route path="/user" element={<User />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
