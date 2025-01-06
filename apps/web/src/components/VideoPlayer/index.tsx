import { FC, useRef, useState } from 'react';
import { Box, Image, Overlay, Stack, UnstyledButton } from '@mantine/core';
import { FaPause, FaPlay } from 'react-icons/fa';

import classes from './index.module.css';

interface VideoPlayerProps {
  src?: string;
  thumbnailUrl?: string;
  width: number | string;
  maxHeight?: number | string;
  height?: number | string;
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
  showPlayButton?: boolean;
  containerHeight?: number | string;
  opacity?: number;
  onLoadedHandler?: () => void;
  borderRadius?: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({
  src,
  thumbnailUrl,
  width,
  maxHeight,
  height,
  objectFit,
  showPlayButton = true,
  containerHeight,
  opacity,
  onLoadedHandler,
  borderRadius,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused || videoRef.current.ended) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <Box
      pos="relative"
      opacity={opacity}
      h={containerHeight}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => isPlaying && setShowButton(false)}
    >
      {src && showPlayButton && (
        <Overlay component={Stack} bg="none" justify="center" align="center">
          <UnstyledButton
            display={showButton ? 'flex' : 'none'}
            p={14}
            onClick={togglePlay}
            bg="rgba(73, 80, 87, 0.80)"
            className={classes.playButton}
          >
            {isPlaying ? <FaPause size={20} color="white" /> : <FaPlay size={20} color="white" />}
          </UnstyledButton>
        </Overlay>
      )}

      {src && (
        <video
          ref={videoRef}
          onLoadedData={onLoadedHandler}
          onClick={(e) => e.stopPropagation()}
          style={{ width, maxHeight, height, objectFit, borderRadius }}
        >
          <source src={src} />

          <track kind="captions" />
        </video>
      )}

      {!src && thumbnailUrl && (
        <Stack>
          <Image w={width} h={height} src={thumbnailUrl} fit="contain" />
        </Stack>
      )}
    </Box>
  );
};

export default VideoPlayer;
