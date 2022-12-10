import { Heading, Text } from '@chakra-ui/react';
import Head from 'components/organisms/head';
import Hero from 'components/organisms/hero';
import MainContainer from 'src/components/atoms/main-container';
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
      <MainContainer>{children}</MainContainer>
    </>
  );
}

export default PageTemplate;
