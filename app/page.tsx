import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full h-screen">
      {/* Desktop Splash Image */}
      <Image
        src="/images/SplashSeatedCropped.jpg"
        alt="Home Splash"
        fill
        className="hidden sm:block" // hidden on mobile, visible on sm+
        style={{ 
          objectFit: "cover",
          objectPosition: "top",
        }}
        priority
      />

      {/* Mobile Splash Image */}
      <Image
        src="/images/SplashSeatedMobile.jpg"
        alt="Home Splash Mobile"
        fill
        className="block sm:hidden" // visible on mobile, hidden on sm+
        style={{ 
          objectFit: "cover",
          objectPosition: "top",
        }}
        priority
      />
    </section>
  );
}
