import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/SidebarLinks";
import ChangeRole from "../pages/ChangeRole";
import Projects from "../pages/Projects";
import Users from "../pages/Users";

function DashBoardLayout() {
  const isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const [visible, setVisible] = useState(true);

  return (
    <Router>
    <div
      className={`${
        isTabletMid ? "bg-black" : "bg-indigo-100"
      } h-screen w-full flex flex-row`}
    >
      {/* Sidebar */}
      <div className={`${isTabletMid ? "w-0 md:w-56" : "w-60"}`}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full">
        <Routes>
          <Route path="/" element={<ChangeRole />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </div>
    </div>
  </Router>
);
}

export default DashBoardLayout;
