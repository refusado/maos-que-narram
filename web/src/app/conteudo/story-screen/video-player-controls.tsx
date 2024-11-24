import {
  Play,
  Pause,
  SpeakerSimpleHigh,
  SpeakerSimpleSlash,
  Rewind,
  FastForward,
  FrameCorners,
} from '@phosphor-icons/react';

export function VideoPlayerControls() {
  return (
    <aside className="flex h-fit w-fit flex-row items-center justify-center gap-4 rounded-full bg-blue-300/30 p-2 *:size-10 *:rounded-full *:bg-neutral-100 *:p-2 md:*:size-12 lg:flex-col lg:p-4 lg:*:size-14">
      <SpeakerSimpleHigh />
      <FrameCorners />
      {/* <SpeakerSimpleSlash /> */}
      <Rewind />
      <FastForward />
      <Play />
      {/* <Pause /> */}
    </aside>
  );
}
