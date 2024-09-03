import Image from "next/image";

export default function Contact() {
  return (
    <section className="p-8 lg:px-16">
      <div className="container flex flex-wrap gap-12 h-[calc(100vh-14rem)]"> {/* Adjusts for any header or padding height */}
        {/* Image section */}
        <div className="flex-1 relative h-full">
          <Image
            src="/images/bcsdsinging.jpg"
            alt="Singing"
            layout="fill"  // Fill the container
            objectFit="contain"  // Cover the container while maintaining aspect ratio
            objectPosition="center"  // Center the image
          />
        </div>

        {/* Text section */}
        <div className="flex-1 flex flex-col justify-center h-full">
          <p>For bookings and inquiries, email me at:</p>
          <p>andrew.padgett.88 (at) gmail.com</p>
        </div>
      </div>
    </section>
  );
}
