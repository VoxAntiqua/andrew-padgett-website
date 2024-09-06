import React from 'react';
import { Video } from '@/app/lib/definitions'; // Adjust the import path as necessary

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
    return (
      <div className="bg-white shadow-md overflow-hidden flex flex-col max-w-sm">
        {/* Responsive Container for YouTube Video */}
        <div className="relative w-full aspect-w-16 aspect-h-9">
          {/* Embedded YouTube Video */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={video.youtubeEmbedCode}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
  
        {/* Video Info */}
        <div className="p-4 flex-1">
          <h3 className="text-lg font-bold mb-0">{video.title}</h3>
          {video.composerOrSubtitle ? <h4 className='mt-0'>{video.composerOrSubtitle}</h4> : null}
          <p className="text-sm text-slate-600 my-1">recorded {video.monthYear} with <a href={video.ensemble.url} className='hover:underline text-blue-700'>{video.ensemble.name}</a></p>
          {video.featuring && (
            <p className="text-sm text-slate-600 mb-1">Featuring {video.featuring}</p>
          )}
        </div>
      </div>
    );
  };
  
  export default VideoCard;