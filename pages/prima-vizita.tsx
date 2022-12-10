import { Stack } from '@chakra-ui/react';
import PageTemplate from 'components/templates/page-template';
import { FirstTime, Intro, Rules } from 'components/views/first-visit';
import { biResponsiveMd } from 'helpers/responsive';
import { ImageMeta } from 'types';

type Props = {
  heroImage: ImageMeta;
}

const sectionsGap = biResponsiveMd('3rem', '5rem');

export default function Contact({ heroImage }: Props) {
  return (
    <PageTemplate
      title="Prima Vizita"
      subTitle="Cățărat este pentru toată lumea"
      heroImage={heroImage}
    >
      <Stack my={sectionsGap} gap={sectionsGap} direction="column">
        <Intro />
        <FirstTime />
        <Rules />
      </Stack>

    </PageTemplate>
  );
}

export async function getStaticProps() {
  const heroImage: ImageMeta = {
    src: 'https://picsum.photos/seed/first-visit/1920/540',
    alt: 'First Visit Page Hero'
  };

  return {
    props: {
      heroImage
    }
  };
}
