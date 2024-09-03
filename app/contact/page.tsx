'use client'

import Image from "next/image";
import React, { useState } from "react";

export default function Contact() {
  // State to manage notification visibility
  const [showNotification, setShowNotification] = useState(false);

  // Function to handle copying email to clipboard
  const copyEmailToClipboard = () => {
    const email = "andrew.padgett.88" + "@" + "gmail.com"
    navigator.clipboard.writeText(email).then(() => {
      setShowNotification(true); // Show the notification
      setTimeout(() => setShowNotification(false), 2500); // Hide after 2 seconds
    });
  };

  // Function to dynamically construct the email address for display
  const renderEmail = () => {
    const username = "andrew.padgett.88";
    const domain = "gmail.com";
    return `${username} (at) ${domain}`;
  };

  return (
    <section className="p-8 lg:px-16">
      <div className="container flex flex-wrap gap-12 h-[calc(100vh-14rem)]">
        {/* Image section */}
        <div className="flex-1 relative h-full">
          <Image
            src="/images/bcsdsinging.jpg"
            alt="Singing"
            layout="fill"  // Fill the container
            objectFit="contain"  // Contain the image while maintaining aspect ratio
            objectPosition="center"  // Center the image
          />
        </div>

        {/* Text section */}
        <div className="flex-1 flex flex-col justify-center h-full gap-4 relative">
          <p>For bookings and inquiries, email me at:</p>
          <p>
            {/* Clickable email that triggers the copy function */}
            <span
              className="cursor-pointer text-blue-800 hover:underline"
              onClick={copyEmailToClipboard}
            >
              {renderEmail()} {/* Dynamically rendered email to avoid easy scraping */}
            </span>
          </p>

          {/* Notification just below the email text */}
          <div
            className={`mt-2 transition-opacity duration-500 ${
              showNotification ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-slate-800 text-white px-4 py-2 rounded shadow-lg inline-block">
              Email copied to clipboard!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
