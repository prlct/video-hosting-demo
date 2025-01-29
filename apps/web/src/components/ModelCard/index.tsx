import { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Badge, Box, Card, Group, Image, Text } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import { FaPause, FaPlay } from 'react-icons/fa';

import classes from './index.module.css';

interface ModelCardProps {
 name: string;
 image: string;
 onClick?: () => void;
}

const ModelCard: FC<ModelCardProps> = ({
 name,
 image,
 onClick,
}) => (
 <Card
  className={classes.card}
  onClick={onClick}
 >
  <Card.Section>
   <Image src={image} alt={name} w={276} height={450} fit="cover" />
  </Card.Section>

  <Box mt="10px">
   <Text fw={500} size="xl">
    {name}
   </Text>
  </Box>
 </Card>
);

export default ModelCard;
