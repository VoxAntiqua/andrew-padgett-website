'use client'

import Link from "next/link";
import SingerLogo from "./ui/SingerLogo";
import { usePathname } from "next/navigation";  // Import the usePathname hook

export default function Header() {
  // Get the current pathname
  const pathname = usePathname();

  // Function to determine if a link is active
  const isActive = (href: string) => pathname === href;

  return (
    <header>
      <nav className="py-8">
        <div className="flex justify-between items-center w-full px-8 lg:px-16">
          {/* Left half with SingerLogo, centered */}
          <div className="flex justify-center flex-1">
            <SingerLogo />
          </div>

          {/* Right half with navigation links, centered */}
          <div className="flex justify-center flex-1">
            <ul className="flex gap-10 items-center">
              {[
                { href: "/", label: "home" },
                { href: "/about", label: "about" },
                { href: "/listen", label: "listen" },
                { href: "/calendar", label: "calendar" },
                { href: "/press", label: "press" },
                { href: "/contact", label: "contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${
                      isActive(href) ? "font-bold text-lg" : "font-normal"
                    } transition-colors duration-200`}
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
      <div className="border-b border-slate-400 mx-auto w-4/5"></div>
    </header>
  );
}
