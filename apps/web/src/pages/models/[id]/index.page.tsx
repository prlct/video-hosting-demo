// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Container, Title } from '@mantine/core';

import { modelApi } from 'resources/model';



const Model: NextPage = () => {
 const { query } = useRouter();
 const modelId = query.id;

 const { data: model } = modelApi.useGet({ id: modelId as string });

 if (!model) {
  return null;
 }

 return (
  <>
   <Head>
    <title>{model?.data.name || 'Model'}</title>
   </Head>

   <Container>
    <Title fw={400}>{model.data.name}</Title>

    {model.data.photos[0]?.file.url && (
     <Image
      src={model.data.photos[0].file.url}
      alt="thumbnail"
      width={900}
      height={600}
      style={{ objectFit: 'cover' }}
     />
    )}

    {/* {model && !isVideosLoading && videos.data.length > 0 && (
     <Box mt={50}>
      <Title>Videos</Title>
      <Flex gap={20} mt={40} wrap="wrap">
       {videos.data.map((item) => {
        const durationInSeconds = parseInt(item.video[0].provider_metadata.duration, 10);
        const formattedDuration = formatDuration(durationInSeconds);
        const thumbnails = generateThumbnails(
         item.video[0].provider_metadata.thumbnail,
         durationInSeconds,
         10
        );

        return (
         <VideoCard
          key={item.id}
          title={item.title}
          models={item.models.map((model) => model.name)}
          views={item.views}
          likes={item.likes}
          duration={formattedDuration}
          thumbnails={thumbnails}
          defaultThumbnail={item.thumbnail.url}
          onClick={() =>
           push({
            pathname: RoutePath.Video,
            query: {
             id: item.documentId,
            },
           })
          }
         />
        );
       })}
      </Flex>
      <Flex justify="center" mt={40}>
       <Pagination
        size="xl"
        total={videos.meta.pagination.pageCount}
        value={activePage}
        onChange={setPage}
       />
      </Flex>
     </Box>
    )} */}
   </Container>
  </>
 );
};

export default Model;
