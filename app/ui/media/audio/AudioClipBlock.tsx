'use client'

import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Import default styles or customize as needed
import { AudioClip } from '../../../lib/definitions';

interface AudioClipBlockProps {
  clip: AudioClip;
}

const AudioClipBlock: React.FC<AudioClipBlockProps> = ({ clip }) => {
  return (
    <div className="audio-clip-block mb-8">
    

      <AudioPlayer
        src={clip.path}
        showJumpControls={false}
        customAdditionalControls={[]}
        layout="horizontal"
        autoPlayAfterSrcChange={false}
        header={<><h3 className="text-md font-bold mb-1">{clip.composer}: {clip.title}</h3>
        <p className="text-sm text-gray-600">{clip.collection ? `from ${clip.collection}` : ''}</p>
        <p className="text-sm text-gray-600">{clip.featuring ? `featuring ${clip.featuring}` : ''}</p>
        <p className="text-sm text-gray-600">{clip.director ? `directed by ${clip.director}` : ''}</p>
        <p className="text-sm text-gray-600">recorded {clip.live ? 'live, ' : ''}{clip.monthYear}</p></>}
      />
    </div>
  );
};

export default AudioClipBlock;
