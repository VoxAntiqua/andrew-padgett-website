import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';

// Function to read image paths from the /public/images/headshots/ directory
function getHeadshotImages() {
  const headshotsDirectory = path.join(process.cwd(), 'public/images/headshots');
  const filenames = fs.readdirSync(headshotsDirectory);

  return filenames.map((filename) => `/images/headshots/${filename}`);
}

export const dynamic = 'force-static'; // Ensure static rendering

export default function Photos() {
  const headshotImages = getHeadshotImages(); // Fetch images here

  return (
    <div className="container mx-auto py-8">
      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {headshotImages.map((image, index) => (
          <Link key={index} href={image} target="_blank" rel="noopener noreferrer">
            <div
              className="relative w-full"
              style={{ paddingTop: '150%' }} // Adjust the paddingTop to create a portrait layout
            >
              <Image
                src={image}
                alt={`Headshot ${index + 1}`}
                fill // Makes the image fill the container
                style={{ objectFit: 'cover', objectPosition: 'top' }} // Keeps the object-fit and object-position styles
                className="absolute inset-0 shadow-lg" // Positioning the image correctly
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
