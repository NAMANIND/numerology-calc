"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { anteroly } from "@/styles/fonts";

export default function Navbar() {
  const pathname = usePathname();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  const getLinkClass = (path) => {
    if (path === pathname) {
      return "   bg-[#9E51FF7A]  px-3  py-3 rounded-full ";
    }
    return "px-3 py-3";
  };

  return (
    <div
      className={`w-full flex fixed z-50 top-10 justify-center items-center text-white py-4  ${anteroly.className} `}
    >
      <ul
        className="flex justify-center items-center   bg-[#5A00B47A]  py-3  rounded-full
      
      transition-all duration-500 ease-in-out nav-links
      
        "
      >
        <li>
          <a href="/" className={getLinkClass("/")}>
            Home
          </a>
        </li>
        <li>
          <a href="/" className={getLinkClass("/ok")}>
            Numerology
          </a>
        </li>

        <li>
          <a href="/services" className={getLinkClass("/services")}>
            Services
          </a>
        </li>
        <li>
          <a href="/about" className={getLinkClass("/about")}>
            About
          </a>
        </li>
        <li>
          <a href="/blogs" className={getLinkClass("/blogs")}>
            Blog
          </a>
        </li>
        <li>
          <a href="/contact" className={getLinkClass("/contact")}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
