'use client';

import { MediaPlayerInstance } from '@vidstack/react';
import { VideoPlayer } from './player';
import { VideoPlayerControls } from './controls';
import { useRef } from 'react';
import { Story } from '@/types';

interface StoryContainerProps {
  story: Story;
}

export function VideoPlayerContainer({ story }: StoryContainerProps) {
  const playerRef = useRef<MediaPlayerInstance>(null);
  const { title, youtube_video_id } = story;

  return (
    <>
      <VideoPlayer
        title={title}
        playerRef={playerRef}
        videoId={youtube_video_id}
      />
      <VideoPlayerControls playerRef={playerRef} />
    </>
  );
}
