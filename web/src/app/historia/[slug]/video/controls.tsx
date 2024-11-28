import {
  Play,
  Pause,
  SpeakerSimpleHigh,
  SpeakerSimpleSlash,
  Rewind,
  FastForward,
  CornersOut,
} from '@phosphor-icons/react';
import {
  MediaPlayerInstance,
  useMediaRemote,
  useMediaState,
} from '@vidstack/react';
import { HTMLAttributes, ReactNode, RefObject } from 'react';

interface PlayerControlsProps {
  playerRef: RefObject<MediaPlayerInstance>;
}

export function VideoPlayerControls({ playerRef }: PlayerControlsProps) {
  const paused = useMediaState('paused', playerRef);
  const muted = useMediaState('muted', playerRef);
  const canPlay = useMediaState('canPlay', playerRef);
  const currentTime = useMediaState('currentTime', playerRef);

  const remote = useMediaRemote(playerRef);

  const play = () => remote.play();
  const pause = () => remote.pause();
  const mute = () => remote.mute();
  const unmute = () => remote.unmute();
  const enterFs = () => remote.enterFullscreen('prefer-media');
  const rewind = () => remote.seek(currentTime - 10);
  const fastForward = () => remote.seek(currentTime + 10);

  return (
    <aside
      className={`flex h-fit w-fit flex-row items-center justify-center gap-4 rounded-full bg-neutral-50 p-2 lg:flex-col lg:p-4 ${!canPlay ? 'cursor-progress opacity-50 *:pointer-events-none' : ''}`}
    >
      {muted ? (
        <ControlButton onClick={unmute} title="Desmutar">
          <SpeakerSimpleSlash />
        </ControlButton>
      ) : (
        <ControlButton onClick={mute} title="Mutar">
          <SpeakerSimpleHigh />
        </ControlButton>
      )}
      <ControlButton onClick={enterFs} title="Tela cheia">
        <CornersOut />
      </ControlButton>
      <ControlButton onClick={rewind} title="Voltar">
        <Rewind />
      </ControlButton>
      <ControlButton onClick={fastForward} title="Avançar">
        <FastForward />
      </ControlButton>
      {paused ? (
        <ControlButton onClick={play} title="Reproduzir">
          <Play />
        </ControlButton>
      ) : (
        <ControlButton onClick={pause} title="Pausar">
          <Pause />
        </ControlButton>
      )}
    </aside>
  );
}

interface ControlButton extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function ControlButton({ children, ...props }: ControlButton) {
  return (
    <button
      {...props}
      className="flex cursor-pointer items-center justify-center rounded-full bg-blue-200/50 p-2 *:size-7 hover:bg-blue-600/60 hover:text-neutral-100 active:bg-blue-700/80 md:*:size-8 lg:*:size-10"
    >
      {children}
    </button>
  );
}
