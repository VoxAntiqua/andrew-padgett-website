import Link from "next/link";
import SingerLogo from "./ui/SingerLogo";

export default function Header() {
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
            </ul>
          </div>
        </div>
      </nav>

      {/* Separate dividing line spanning about 80% of the viewport width */}
      <div className="border-b border-gray-500 mx-auto w-4/5"></div>
    </header>
  );
}
