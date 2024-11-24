import { MediaPlayerInstance } from '@vidstack/react';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { RefObject } from 'react';

interface PlayerProps {
  title: string;
  videoId: string;
  playerRef: RefObject<MediaPlayerInstance>;
}

export function VideoPlayer({ videoId, playerRef, title }: PlayerProps) {
  return (
    <MediaPlayer
      ref={playerRef}
      title={title}
      src={`youtube/${videoId}`}
      playsInline
      className="aspect-video w-full rounded-2xl bg-red-700"
    >
      <MediaProvider>
        <Poster
          className="absolute inset-0 block h-full w-full rounded-md bg-black opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
        />
      </MediaProvider>
    </MediaPlayer>
  );
}
