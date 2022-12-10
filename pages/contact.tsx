import { Text } from '@chakra-ui/react';
import PageTemplate from 'components/templates/page-template';
import { ImageMeta } from 'types';

type Props = {
  heroImage: ImageMeta;
}

export default function Contact({ heroImage }: Props) {
  return (
    <PageTemplate
      title="Contact"
      subTitle="Gaseste-ne"
      heroImage={heroImage}
    >
      <Text>Contact</Text>
    </PageTemplate>
  );
}

export async function getStaticProps() {
  const heroImage: ImageMeta = {
    src: 'https://picsum.photos/seed/contact/1920/540',
    alt: 'Contact Page Hero'
  };

  return {
    props: {
      heroImage
    }
  };
}
