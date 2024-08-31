import { ibarra } from "./fonts";

export default function SingerLogo() {
    return (
        <div className={`${ibarra.className} flex flex-col items-center leading-none text-black`}>
            <p className="text-[44px]">Andrew Padgett</p>
            <p className="text-[22px]">bass-baritone</p>
        </div>
    )
}