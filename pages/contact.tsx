import { Box, Stack } from '@chakra-ui/react';
import PageTemplate from 'components/templates/page-template';
import { Contacts, Map } from 'components/views/contact';
import { biResponsiveLg } from 'helpers/responsive';
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
      <Stack direction={biResponsiveLg('column', 'row')} gap={biResponsiveLg('2rem', '5rem')}>
        <Contacts />
        <Box flex="1 0 auto">
          <Map />
        </Box>
      </Stack>
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
