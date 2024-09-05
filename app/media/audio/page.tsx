import React from 'react';
import { audioClips } from '../../lib/audioData';
import AudioClipBlock from '../../ui/media/audio/AudioClipBlock';

const AudioPage = () => {
  return (
    <div className="audio-page container mx-auto p-8 lg:px-16 py-8">
      {/* Grid layout with two columns on large screens and one column on smaller screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
        {audioClips.map((clip) => (
          <AudioClipBlock key={clip.id} clip={clip} />
        ))}
      </div>
    </div>
  );
};

export default AudioPage;
