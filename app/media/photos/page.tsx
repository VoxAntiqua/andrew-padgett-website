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
      {/* Centered grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full max-w-screen-xl mx-auto">
        {/* Large photo on the left */}
        <div className="relative w-full lg:col-span-2" style={{ paddingTop: '100%' }}>
        <Link href={headshotImages[0]} target="_blank" rel="noopener noreferrer">
          <Image
            src={headshotImages[0]}
            alt="Large Headshot"
            fill
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            className="absolute inset-0 shadow-lg"
          />
          </Link>
        </div>

        {/* 2x2 grid for remaining photos */}
        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {headshotImages.slice(1, 5).map((image, index) => (
            <Link key={index} href={image} target="_blank" rel="noopener noreferrer">
              <div
                className="relative w-full"
                style={{ paddingTop: '100%' }} // Ensures the images are square
              >
                <Image
                  src={image}
                  alt={`Headshot ${index + 2}`}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  className="absolute inset-0 shadow-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
