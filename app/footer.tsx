import { ibarra } from "./ui/fonts"

export default function Footer() {
    return <footer><div className={`${ibarra.className} m-3 text-xs`}>© {new Date().getFullYear()} Andrew Padgett. All rights reserved. Web design by Andrew Padgett. Splash image by <a href="https://www.robertlisak.com" target="_blank">Robert Lisak</a>. Portrait photography by <a href="https://www.garypaynephoto.com" target="_blank">Gary Payne</a></div></footer>
}