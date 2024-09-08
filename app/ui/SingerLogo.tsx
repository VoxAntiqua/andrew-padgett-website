import { ibarra } from "./fonts";

interface SingerLogoProps {
  isWhite?: boolean;
}

export default function SingerLogo({ isWhite = false }: SingerLogoProps) {
  return (
    <div
      className={`${
        ibarra.className
      } flex flex-col items-center leading-none ${isWhite ? "text-white" : "text-black"}`}
    >
      {/* Prevent line break with whitespace-nowrap */}
      <p className="whitespace-nowrap text-[28px] md:text-[34px] lg:text-[44px]">
        Andrew Padgett
      </p>
      {/* Responsive font size for the subtitle */}
      <p className="text-[14px] md:text-[18px] lg:text-[22px]">bass-baritone</p>
    </div>
  );
}
