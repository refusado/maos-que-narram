export function VideoPlayer({ videoId }: { videoId: string }) {
  return (
    <div
      style={{
        backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)`,
      }}
      className="aspect-video w-full rounded-2xl bg-blue-900/20 bg-cover bg-center bg-no-repeat"
    ></div>
  );
}
