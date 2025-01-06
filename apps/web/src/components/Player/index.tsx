import React, { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

interface PlayerProps {
 file: string;
 poster?: string;
 width?: string | number;
 height?: string | number;
 [key: string]: any;
}

const Player: React.FC<PlayerProps> = ({ file, poster, width = '100%', height = '100%', watermarkText, ...props }) => {
 const containerRef = useRef<HTMLDivElement | null>(null);
 const [scriptLoaded, setScriptLoaded] = useState(false);
 const playerId = `player-${Math.random().toString(36).substr(2, 9)}`;

 useEffect(() => {
  if (!scriptLoaded) return;
  if (typeof window === 'undefined' || !window.Playerjs || !containerRef.current) return;

  // Clear previous content
  containerRef.current.innerHTML = '';

  const playerElement = document.createElement('div');
  playerElement.setAttribute('id', playerId);
  playerElement.style.width = typeof width === 'string' ? width : `${width}px`;
  playerElement.style.height = typeof height === 'string' ? height : `${height}px`;

  containerRef.current.appendChild(playerElement);

  // eslint-disable-next-line no-new, @typescript-eslint/no-explicit-any
  new window.Playerjs({
   id: playerId,
   file,
   poster,
   hls: 1,
   text1: watermarkText,
   ...props,
  });

 }, [scriptLoaded, file, poster, width, height, props]);


 return (
  <>
   <Script
    src="/playerjs/playerjs.js"
    strategy="afterInteractive"
    onLoad={() => {
     console.log('loaded')
     // The script is now fully loaded and window.Playerjs should be available
     setScriptLoaded(true);
    }}
   />
   <div ref={containerRef} />
  </>
 );
};

export default Player;
