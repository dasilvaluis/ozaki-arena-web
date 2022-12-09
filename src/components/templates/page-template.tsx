import { Heading } from '@chakra-ui/react';
import Head from 'components/head';
import Hero from 'components/organisms/hero/hero';
import MainContainer from 'src/components/atoms/main-container';
import type { ImageMeta, WithChildren } from 'src/types';

type Props = WithChildren & {
  title: string;
  heroImage: ImageMeta;
}

function PageTemplate({ title, heroImage, children }: Props) {
  return (
    <>
      <Head title={title} />
      <Hero heroImage={heroImage}>
        <Heading as="h1" size="xl" color="text">{title}</Heading>
      </Hero>
      <MainContainer>{children}</MainContainer>
    </>
  );
}

export default PageTemplate;
