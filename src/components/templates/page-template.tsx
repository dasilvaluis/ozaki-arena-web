import { Heading, Text } from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';
import Head from 'components/organisms/head';
import Hero from 'components/organisms/hero';
import type { ImageMeta, WithChildren } from 'types';

type Props = WithChildren & {
  title: string;
  subTitle?: string;
  heroImage: ImageMeta;
}

function PageTemplate({
  title, subTitle, heroImage, children
}: Props) {
  return (
    <>
      <Head title={title} />
      <Hero heroImage={heroImage}>
        <Heading as="h1" size="2xl" color="text">{title}</Heading>
        {!!subTitle && <Text fontSize="xl" color="text" ml="0.2rem" mb={0}>{subTitle}</Text>}
      </Hero>
      <ContentContainer as="main" my="3rem">
        {children}
      </ContentContainer>
    </>
  );
}

export default PageTemplate;
