import React, { useContext, createContext, useState } from "react";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white border-r shadow-sm z-40 md:lg-0 transition-all ${
          expanded ? "w-56" : "w-0"
        } overflow-hidden`}
      >
        <nav className="h-full flex flex-col">
          {/* Sidebar Items */}
         <div className="h-20 text-3xl font-semibold flex justify-center text-center md:h-10">
          
         </div>
         
          <SidebarContext.Provider value={{ expanded }}>
            <ul
              className={`flex-1 px-3 transition-all ${
                expanded ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {children}
            </ul>
          </SidebarContext.Provider>
        </nav>
      </aside>

      {/* Hamburger Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="fixed top-4 md:hidden left-4 z-50 p-2 bg-white border rounded-md shadow-md focus:outline-none hover:bg-gray-200 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

    </div>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-all duration-300
        ${
          expanded
            ? active
              ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-blue-800"
              : "hover:bg-indigo-50 text-gray-600"
            : "opacity-0 pointer-events-none"
        }`} 
    >
      {icon}
      <span
        className={`overflow-hidden transition-all text-md ml-3 ${
          expanded ? "block" : "hidden"
        }`}
      >
        {text}
      </span>
      {alert && expanded && (
        <div
          className="absolute right-2 w-2 h-2 rounded bg-blue-400"
        />
      )}
    </li>
  );
}
