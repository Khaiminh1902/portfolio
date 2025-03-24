"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="text-white font-bold flex md:gap-28 gap-12 items-center justify-center mt-6">
      <div>
        <Link
          href="/"
          className={`${isActive("/") ? "text-[#BB86FC]" : "text-white"}`}
        >
          Home
        </Link>
      </div>
      <div>
        <Link
          href="/about"
          className={`${isActive("/about") ? "text-[#BB86FC]" : "text-white"}`}
        >
          About
        </Link>
      </div>
      <div>
        <Link
          href="/projects"
          className={`${
            isActive("/projects") ? "text-[#BB86FC]" : "text-white"
          }`}
        >
          Projects
        </Link>
      </div>
      <div>
        <Link
          href="/contact"
          className={`${
            isActive("/contact") ? "text-[#BB86FC]" : "text-white"
          }`}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
