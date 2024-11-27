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
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="24"
             height="24"
             viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
             className="lucide lucide-user"
           >
             <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
             <circle cx="12" cy="7" r="4" />
           </svg>
         }
         alt="Change Role"
         className="w-6 h-6 rounded-md"
         text="Change Role"
         active={isActive}
       />
       
        )}
      </NavLink>
      <NavLink to="/Projects" className="no-underline">
        {({ isActive }) => (
          <SidebarItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-handshake"
            >
              <path d="m11 17 2 2a1 1 0 1 0 3-3" />
              <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
              <path d="m21 3 1 11h-2" />
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
              <path d="M3 4h8" />
            </svg>
          }
            text="Teams"
            active={isActive}
          />
        )}
      </NavLink>
      <NavLink to="/Users" className="no-underline">
        {({ isActive }) => (
          <SidebarItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-badge"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
            </svg>
          }text="Users"
            active={isActive}
          />
        )}
      </NavLink>
    </Sidebar>
  );
}
