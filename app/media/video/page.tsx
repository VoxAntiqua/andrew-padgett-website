import React from 'react';
import VideoCard from '@/app/ui/media/video/VideoCard';
import { videos } from '@/app/lib/videoData';

const Video: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Video;
