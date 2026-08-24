import React from 'react';

interface VideoCardProps {
  src: string;
  title?: string;
  muted?: boolean;
  controls?: boolean;
  autoPlay?: boolean;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  src,
  title = '',
  muted = true,
  controls = true,
  autoPlay = true,
}) => {
  return (
    <div className="card-elevated rounded-xl overflow-hidden bg-surface shadow-md hover:shadow-lg transition-shadow">
      <video
        className="w-full h-auto object-cover"
        src={src}
        title={title}
        muted={muted}
        controls={controls}
        autoPlay={autoPlay}
        playsInline
        loop
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {title && (
        <div className="p-2 text-center text-sm font-medium text-foreground bg-surface-2">
          {title}
        </div>
      )}
    </div>
  );
};
