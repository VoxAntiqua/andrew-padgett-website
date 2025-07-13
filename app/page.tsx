import Image from "next/image"; // Import Image from Next.js

export default function Home() {
  return (
    <section className="relative w-full h-screen">
      {/* Splash Image */}
      <Image
        src="/images/SplashSeated.jpg"
        alt="Home Splash"
        fill  // Fill the entire viewport
        style={{ 
          objectFit: 'cover',
          objectPosition: 'top'  // <- This ensures the image crops only at the bottom
        }}        priority  // Prioritize loading this image
      />
    </section>
  );
}
