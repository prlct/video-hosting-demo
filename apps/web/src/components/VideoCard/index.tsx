import { FC, useEffect, useState } from 'react';
import { Badge, Box, Card, Group, Image, Text } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';

import classes from './index.module.css';

interface VideoPlayerProps {
 title: string;
 models: string[];
 views: number;
 likes: number;
 duration: string;
 thumbnails: string[];
 defaultThumbnail?: string;
 onClick?: () => void
}

const VideoCard: FC<VideoPlayerProps> = ({
 title,
 models,
 views,
 likes,
 duration,
 thumbnails,
 defaultThumbnail,
 onClick
}) => {
 const [currentImage, setCurrentImage] = useState(defaultThumbnail);
 const [isHovered, setIsHovered] = useState(false);
 const [thumbnailIndex, setThumbnailIndex] = useState(0);

 useEffect(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let interval: any;
  if (isHovered) {
   interval = setInterval(() => {
    setThumbnailIndex((prevIndex) => (prevIndex + 1) % thumbnails.length);
   }, 600);
  } else {
   setThumbnailIndex(0); // Reset to the first thumbnail
  }
  return () => clearInterval(interval);
 }, [isHovered, thumbnails.length]);

 useEffect(() => {
  if (isHovered) {
   setCurrentImage(thumbnails[thumbnailIndex]);
  } else {
   setCurrentImage(defaultThumbnail);
  }
 }, [isHovered, thumbnailIndex, defaultThumbnail, thumbnails]);

 return (
  <Card
   className={classes.card}
   onClick={onClick}
   onMouseEnter={() => setIsHovered(true)}
   onMouseLeave={() => setIsHovered(false)}
  >
   <Card.Section pos="relative">
    <Image src={currentImage} alt={title} height={200} fit="cover" />
    <Badge className={classes.badge}>
     {duration}
    </Badge>
   </Card.Section>

   <Box mt="10px">
    <Text fw={500} size="xl">
     {title}
    </Text>
    <Text size="md" mt="5px" fw={500}>
     {models.join(', ')}
    </Text>
    <Group mt="5px">
     <Text size="sm" fw={400}>{views} Views</Text>
     <Group gap={4}>
      <IconHeartFilled size={20} />
      <Text size="sm" fw={400} flex={1}>
       {likes}
      </Text>
     </Group>
    </Group>
   </Box>
  </Card>
 );
};

export default VideoCard;
