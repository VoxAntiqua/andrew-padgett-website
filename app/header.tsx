'use client';

import Link from "next/link";
import SingerLogo from "./ui/SingerLogo";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isActive = (href: string) => pathname === href;
  const isHomePage = pathname === "/";
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`${
        isHomePage ? "absolute top-0 left-0 w-full bg-transparent text-white z-10" : "relative bg-white text-black"
      }`}
    >
      <nav className={`py-4 md:py-8 ${isHomePage ? "bg-transparent" : "bg-white"}`}>
        <div className="flex items-center justify-between w-full px-4 md:px-8 lg:px-16">
          {/* Centered SingerLogo for mobile view */}
          <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none flex-1 lg:flex lg:justify-center">
            <Link href={'/'}>
              <SingerLogo isWhite={isHomePage} />
            </Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden flex justify-end flex-1">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isHomePage ? "text-white" : "text-black"} focus:outline-none`}
            >
              {isMobileMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </button>
          </div>

          {/* Right half with navigation links, centered for large screens */}
          <div className={`hidden lg:flex justify-center flex-1`}>
            <ul className="flex gap-10 items-center">
              {[
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

              {/* Media link with dropdown */}
              <li className="relative" ref={dropdownRef}>
                <button
                  className={`${
                    pathname.startsWith('/media/') ? "font-bold text-lg" : "font-normal"
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
                        onClick={() => setDropdownOpen(false)}
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

        {/* Mobile Menu Items */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-[-20px]'
          } overflow-hidden`}
        >
          <ul className="flex flex-col gap-4 items-center py-4">
            {[
              { href: "/about", label: "about" },
              { href: "/media/audio", label: "audio" },
              { href: "/media/video", label: "video" },
              { href: "/media/discography", label: "discography" },
              { href: "/media/photos", label: "photos" },
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
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Separate dividing line spanning about 80% of the viewport width */}
      <div className={`border-b ${isHomePage ? "hidden" : "border-slate-400"} mx-auto w-4/5`}></div>
    </header>
  );
}