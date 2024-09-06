import React from 'react';
import { Album } from '@/app/lib/definitions';

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <div className="bg-white shadow-md overflow-hidden max-w-sm flex flex-col justify-between">
      {/* Album Image */}
      <div className="w-full aspect-square">
        <img
          src={album.imagePath}
          alt={album.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Album Info */}
      <div className="p-4 flex-1">
        <h3 className="text-lg font-bold mb-0.5">{album.title}</h3>
        {album.subtitle && (
          <p className="text-sm text-slate-600 mb-1">{album.subtitle}</p>
        )}
        <p className="text-sm text-slate-600 mb-2">
          <a
            href={album.ensemble.url}
            className="text-blue-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {album.ensemble.name}
          </a>
          {album.director && ` | Directed by ${album.director}`}
          {` | released ${album.year}`}
        </p>

        {/* Solo Tracks Section */}
        {album.soloTracks && album.soloTracks.length > 0 && (
          <div className="mb-2">
            <h4 className="text-sm font-semibold mb-0">Solo Tracks:</h4>
            <ul className="list-disc pl-5 space-y-0">
              {album.soloTracks.map((track) => (
                <li key={track.number}>
                  <a
                    href={track.spotifyUrl}
                    className="text-blue-700 text-sm hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {track.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Streaming Links with Icons */}
      <div className="flex justify-center items-center mt-auto pb-4 space-x-4">
        {/* Spotify Icon */}
        <a
          href={album.spotifyUrl}
          className="text-gray-500 hover:text-green-600 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen on Spotify"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7"
          >
            <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z"/>
          </svg>
        </a>

        {/* Apple Music Icon */}
        <a
          href={album.appleMusicUrl}
          className="text-gray-500 hover:text-red-600 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen on Apple Music"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 transform -translate-y-0.5"
          >
            <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z"/>
          </svg>
        </a>

        {/* Amazon Icon */}
        <a
          href={album.amazonUrl}
          className="text-gray-500 hover:text-yellow-600 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Listen on Amazon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-7 h-7 transform translate-y-0.5"
          >
            <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.383-2.294-.385-.579-1.124-.82-1.775-.82-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66.704-3.716 4.06-4.838 7.066-4.838 1.537 0 3.547.41 4.758 1.574 1.538 1.436 1.392 3.352 1.392 5.438v4.923c0 1.481.616 2.13 1.192 2.929.204.287.247.63-.01.839-.647.541-1.794 1.537-2.423 2.099l-.008-.007zm3.559 1.988c-2.748 1.472-5.735 2.181-8.453 2.181-4.027 0-7.927-1.393-11.081-3.706-.277-.202-.481.154-.251.416 2.925 3.326 6.786 5.326 11.076 5.326 3.061 0 6.614-1.214 9.066-3.494.406-.377.058-.945-.357-.723zm.67 2.216c-.091.227.104.32.31.147 1.339-1.12 1.685-3.466 1.411-3.804-.272-.336-2.612-.626-4.04.377-.22.154-.182.367.062.337.805-.096 2.595-.312 2.913.098.319.41-.355 2.094-.656 2.845z" fill-rule="evenodd" clip-rule="evenodd"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AlbumCard;
