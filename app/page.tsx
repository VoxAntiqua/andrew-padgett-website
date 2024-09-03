import Image from "next/image"; // Import Image from Next.js

export default function Home() {
  return (
    <section className="relative w-full h-screen">
      {/* Splash Image */}
      <Image
        src="/images/HomeSplash.jpg"
        alt="Home Splash"
        layout="fill"  // Fill the entire viewport
        objectFit="cover"  // Cover the entire viewport
        priority  // Prioritize loading this image
      />
    </section>
  );
}
