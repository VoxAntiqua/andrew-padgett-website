import Link from "next/link";
import SingerLogo from "./ui/singer-logo";

export default function Header() {
    return (
      <header>
        <nav className="px-8 py-8">
          <ul className="container flex items-center justify-between">
            {/* Left-aligned SingerLogo */}
            <SingerLogo />
            {/* Right-aligned links */}
            <div className="flex gap-10 items-center ml-auto">
              <li>
                <Link href="/">home</Link>
              </li>
              <li>
                <Link href="/about">about</Link>
              </li>
              <li>
                <Link href="/listen">listen</Link>
              </li>
              <li>
                <Link href="/calendar">calendar</Link>
              </li>
              <li>
                <Link href="/press">press</Link>
              </li>
              <li>
                <Link href="/contact">contact</Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
  