import { Text } from '@chakra-ui/react';
import PageTemplate from 'components/templates/page-template';
import { ImageMeta } from 'src/types';

type Props = {
  heroImage: ImageMeta;
}

export default function About({ heroImage }: Props) {
  return (
    <PageTemplate
      title="Despre Noi"
      subTitle="Aflați despre sala de sport"
      heroImage={heroImage}
    >
      <Text>About us</Text>
    </PageTemplate>
  );
}

export async function getStaticProps() {
  const heroImage: ImageMeta = {
    src: 'https://picsum.photos/seed/about/1920/540',
    alt: 'About Page Hero'
  };

  return {
    props: {
      heroImage
    }
  };
}
