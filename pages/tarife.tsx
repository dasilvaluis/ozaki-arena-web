import { Stack } from '@chakra-ui/react';
import PageTemplate from 'components/templates/page-template';
import { Bundles, PriceTables } from 'components/views/tarife';
import prices from 'settings/prices.json';
import { ImageMeta } from 'types';

type Props = {
  heroImage: ImageMeta;
}

export default function Tarife({ heroImage }: Props) {
  return (
    <PageTemplate title="Tarife" subTitle="Găsește-ți ofertele" heroImage={heroImage}>
      <Stack my="4rem" gap="3rem" direction="column">
        <PriceTables prices={prices.entries} />
        <Bundles bundles={prices.bundles} />
      </Stack>
    </PageTemplate>
  );
}

export async function getStaticProps() {
  const heroImage: ImageMeta = {
    src: 'https://picsum.photos/seed/tarife/1920/540',
    alt: 'Prices Page Hero'
  };

  return {
    props: {
      heroImage
    }
  };
}
