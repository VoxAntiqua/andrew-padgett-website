'use client'

import { ibarra } from "./ui/fonts"
import { usePathname } from "next/navigation"

export default function Footer() {
    const pathname = usePathname()
    const isHomePage = pathname === '/'
    return <footer className={`${
        isHomePage ? "absolute bottom-0 left-0 w-full bg-transparent text-slate-300 z-10" : "relative bg-white text-slate-700"
      }`}><div className={`${ibarra.className} m-3 text-xs text-left`}>© {new Date().getFullYear()} Andrew Padgett. All rights reserved. Web design by Andrew Padgett. Splash image by <a href="https://tatianadaubekphotography.zenfolio.com" target="_blank">Tatiana Daubek</a>. Portrait photography by <a href="https://www.garypaynephoto.com" target="_blank">Gary Payne</a></div></footer>
}