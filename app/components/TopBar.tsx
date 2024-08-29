"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useState } from "react";

export default function TopBar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const currentPath = usePathname();
  const pages = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" },
  ];
  const isActive = (path: string) => {
    return currentPath == path;
  };

  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto ">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white p-4">
          NextJS
        </span>

        <button
          type="button"
          className="inline-flex items-center m-3 p-2 w-10 h-10 justify-center text-sm rounded-lg sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          onClick={() => {
            setIsDropdownVisible(!isDropdownVisible);
          }}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={
            "w-full sm:block sm:w-auto p-4 md:bg-gray-900 " +
            (isDropdownVisible ? "bg-gray-800" : "hidden")
          }
        >
          <ul className="font-medium flex flex-col md:p-0 sm:flex-row sm:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  className={
                    "block py-2 px-3 text-white rounded md:bg-transparent " +
                    (isActive(page.path) ? "text-blue-500" : "mtext-white")
                  }
                  href={page.path}
                  onClick={() => setIsDropdownVisible(!isDropdownVisible)}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
