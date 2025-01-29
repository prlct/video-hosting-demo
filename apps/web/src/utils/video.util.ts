export const generateThumbnails = (baseUrl: string, duration: number, count: number) => {
 const interval = duration / count;
 return Array.from({ length: count }, (_, i) => {
  const time = Math.floor(interval * i); // Calculate time in seconds
  return `${baseUrl}?time=${time}s`;
 });
};

export const formatDuration = (duration: number): string => {
 const totalSeconds = Math.floor(duration); // Round down to the nearest second
 const minutes = Math.floor(totalSeconds / 60);
 const seconds = totalSeconds % 60;
 return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
