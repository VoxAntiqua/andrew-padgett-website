'use client';

import Link from "next/link";
import SingerLogo from "./ui/SingerLogo";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const isActive = (href: string) => pathname === href;
  const isHomePage = pathname === "/";

  return (
    <header
      className={`${
        isHomePage ? "absolute top-0 left-0 w-full bg-transparent text-white z-10" : "relative bg-white text-black"
      }`}
    >
      <nav className={`py-8 ${isHomePage ? "bg-transparent" : "bg-white"}`}>
        <div className="flex justify-between items-center w-full px-8 lg:px-16">
          {/* Left half with SingerLogo, centered */}
          <div className="flex justify-center flex-1">
            <SingerLogo isWhite={isHomePage} /> {/* Control logo text color */}
          </div>

          {/* Right half with navigation links, centered */}
          <div className="flex justify-center flex-1">
            <ul className="flex gap-10 items-center">
              {[
                { href: "/", label: "home" },
                { href: "/about", label: "about" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${
                      isActive(href) ? "font-bold text-lg" : "font-normal"
                    } transition-colors duration-200 hover:underline`}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* Media link with dropdown - Now between 'about' and 'calendar' */}
              <li className="relative">
                <button
                  className={`${
                    isActive("/media") ? "font-bold text-lg" : "font-normal"
                  } transition-colors duration-200 hover:underline`}
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                  media
                </button>
                {/* Dropdown menu with fade-in/out transition */}
                <ul
                  className={`absolute mt-2 bg-white text-black py-2 shadow-md transition-opacity duration-200 ease-in-out transform ${
                    isDropdownOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  {[
                    { href: "/media/audio", label: "audio" },
                    { href: "/media/video", label: "video" },
                    { href: "/media/discography", label: "discography" },
                    { href: "/media/photos", label: "photos" },
                  ].map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => setDropdownOpen(false)} // Close dropdown when clicking a link
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Remaining menu items */}
              {[
                { href: "/calendar", label: "calendar" },
                { href: "/press", label: "press" },
                { href: "/contact", label: "contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${
                      isActive(href) ? "font-bold text-lg" : "font-normal"
                    } transition-colors duration-200 hover:underline`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Separate dividing line spanning about 80% of the viewport width */}
      <div className={`border-b ${isHomePage ? "border-white" : "border-slate-400"} mx-auto w-4/5`}></div>
    </header>
  );
}
