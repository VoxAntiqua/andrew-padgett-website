'use client';

import Link from "next/link";
import SingerLogo from "./ui/SingerLogo";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const isHomePage = pathname === "/"; // Check if current page is the home page

  return (
    // Conditional class based on isHomePage
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
                { href: "/media", label: "media" },
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
