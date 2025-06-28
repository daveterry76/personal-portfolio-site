import { FaGithub } from "react-icons/fa";
import { MediaIcon } from "components";
import { useRef } from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  externalLink: string;
  githubLink: string;
  videoLink: string; // can be .mp4 or .gif
}

const arrayToString = (array: string[]) => {
  return array.length === 0 ? "" : array.join(", ");
};

export const MobileProjectCard = ({
  title,
  subtitle,
  description,
  technologies,
  githubLink,
  videoLink,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isGif = videoLink.endsWith(".gif");

  const handleMouseEnter = () => {
    if (!isGif) videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (!isGif && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="border max-w-md w-full rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden dark:border-gray-700">
      <div
        className="w-full relative aspect-video"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isGif ? (
          <img
            src={videoLink}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoLink}
            muted
            loop
            preload="metadata"
          />
        )}

        <div className="absolute inset-0 flex flex-col p-4 gap-2 justify-between opacity-0 bg-black bg-opacity-80 hover:opacity-90 transition-opacity hover:bg-darkTheme text-white-900">
          <div>
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="font-medium text-sm">{subtitle}</p>
          </div>
          <p className="text-sm">{description}</p>
          <div className="flex flex-col text-sm gap-2">
            <p>{arrayToString(technologies)}</p>
            <div className="flex gap-2">
              {githubLink && (
                <MediaIcon
                  icon={<FaGithub className="w-6 h-6 text-white-900" />}
                  href={githubLink}
                  className="mr-4"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
