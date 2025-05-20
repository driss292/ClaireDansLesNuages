"use client";

import { navigationData } from "@/lib/data";
import NavItem from "./NavItem";
import DebugTailwind from "../Debug/debugTailwind";
import { Menu, X } from "lucide-react"; // Icônes pour le bouton
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="max-w-7xl w-full mx-auto min-h-11 h-11 flex justify-end items-center bg-white px-10">
      <DebugTailwind />
      <div className="w-full justify-evenly items-center hidden sm:flex">
        {navigationData.map((item) => (
          <NavItem
            key={item.name}
            item={item}
            onClick={() => setIsOpen(false)}
            className="text-[var(--foreground)] font-copperplateLight text-[10px] sm:text-xs md:text-sm lg:text-lg hover:text-black"
          />
        ))}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="text-black focus:outline-none block sm:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-32 left-0 w-full bg-white z-10 flex flex-col justify-center items-center">
          <div className="w-full max-w-7xl px-4 py-6 mx-auto">
            <div className="flex flex-col justify-center items-center">
              {navigationData.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  onClick={() => setIsOpen(false)}
                  className="text-[var(--foreground)] py-3 font-copperplateLight text-xl sm:text-xs md:text-sm lg:text-lg hover:text-black"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
