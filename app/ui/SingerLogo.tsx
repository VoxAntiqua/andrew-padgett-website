import { ibarra } from "./fonts";

interface SingerLogoProps {
    isWhite?: boolean;
  }

export default function SingerLogo({isWhite = false}) {
    return (
        <div className={`${ibarra.className} flex flex-col items-center leading-none {isWhite ? "text-white" : "text-black"}`}>
            <p className="text-[44px]">Andrew Padgett</p>
            <p className="text-[22px]">bass-baritone</p>
        </div>
    )
}