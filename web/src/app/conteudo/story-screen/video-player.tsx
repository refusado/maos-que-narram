import { CornersIn, CornersOut } from '@phosphor-icons/react/dist/ssr';
import {
  Controls,
  FullscreenButton,
  Gesture,
  MediaPlayerInstance,
  TimeSlider,
  useMediaState,
} from '@vidstack/react';
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
      className="aspect-video w-full overflow-hidden rounded-2xl bg-blue-700"
    >
      <MediaProvider>
        <Poster
          className="absolute inset-0 block h-full w-full rounded-md bg-black opacity-0 transition-opacity data-[visible]:opacity-100 [&>img]:h-full [&>img]:w-full [&>img]:object-cover"
          src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          alt="Girl walks into campfire with gnomes surrounding her friend ready for their next meal!"
        />
      </MediaProvider>

      <Gestures />

      <Controls.Root className="absolute inset-0 z-10 flex cursor-pointer flex-col opacity-0 transition-opacity duration-300 media-controls:opacity-100">
        <div className="w-full flex-1" />
        <Controls.Group className="flex items-center justify-center gap-3 bg-gradient-to-t from-blue-950/80 to-transparent px-4 py-3">
          <Timer />
          <Fullscreen />
        </Controls.Group>
      </Controls.Root>
    </MediaPlayer>
  );
}

function Gestures() {
  return (
    <>
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="pointerup"
        action="toggle:paused"
      />
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
    </>
  );
}

function Timer() {
  return (
    <TimeSlider.Root className="relative flex h-5 w-full cursor-pointer items-center rounded-full outline-none ring-inset data-[focus]:ring-2">
      <TimeSlider.Track className="h-2 w-full rounded-full bg-blue-100">
        <TimeSlider.TrackFill className="h-full w-[var(--slider-fill)] rounded-full bg-blue-500 duration-150 ease-linear" />
      </TimeSlider.Track>
    </TimeSlider.Root>
  );
}

function Fullscreen() {
  const isInFs = useMediaState('fullscreen');

  return (
    <FullscreenButton className="group relative cursor-pointer items-center justify-center text-neutral-100 outline-none ring-inset *:size-10 hover:opacity-80 data-[focus]:ring-2">
      {isInFs ? <CornersIn /> : <CornersOut />}
    </FullscreenButton>
  );
}
