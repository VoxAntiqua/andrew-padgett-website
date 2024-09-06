import React from 'react';
import { Album } from '@/app/lib/definitions';

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
      <div className="w-full aspect-square">
        <img
          src={album.imagePath}
          alt={album.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1">{album.title}</h3>
        {album.subtitle && (
          <p className="text-sm text-gray-600 mb-2">{album.subtitle}</p>
        )}
        <p className="text-sm text-gray-600 mb-2">
          <a
            href={album.ensemble.url}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {album.ensemble.name}
          </a>
          {album.director && ` | Directed by ${album.director}`}
        </p>
        <p className="text-sm text-gray-600 mb-2">{album.year}</p>

        {/* Solo Tracks Section */}
        {album.soloTracks && album.soloTracks.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Solo Tracks:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {album.soloTracks.map((track) => (
                <li key={track.number}>
                  <a
                    href={track.spotifyUrl}
                    className="text-blue-500 hover:underline"
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

        {/* Streaming Links Section */}
        <div className="flex space-x-4">
          <a
            href={album.spotifyUrl}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
          <a
            href={album.appleMusicUrl}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Music
          </a>
          <a
            href={album.amazonUrl}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
