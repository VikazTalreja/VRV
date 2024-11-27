import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar, { SidebarItem } from "./Sidebar";
import { User } from 'lucide-react';

export default function SidebarApp() {
  return (
    <Sidebar>
      <NavLink to="/" className="no-underline">
        {({ isActive }) => (
          <SidebarItem
            icon={
              <img
                src={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>}
                alt="Change Role"
                className="w-6 h-5 rounded-md"
              />
            }
            text="Change Role"
            active={isActive}
          />
        )}
      </NavLink>
      <NavLink to="/Projects" className="no-underline">
        {({ isActive }) => (
          <SidebarItem
            icon={
              <img src={"#"} alt="Projects" className="w-6 h-5 rounded-md" />
            }
            text="Projects"
            active={isActive}
          />
        )}
      </NavLink>
      <NavLink to="/Users" className="no-underline">
        {({ isActive }) => (
          <SidebarItem
            icon={<img src={"#"} alt="Users" className="w-6 h-5 rounded-md" />}
            text="Users"
            active={isActive}
          />
        )}
      </NavLink>
    </Sidebar>
  );
}
