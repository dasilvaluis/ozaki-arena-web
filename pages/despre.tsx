import PageTemplate from 'components/templates/page-template';
import { ImageMeta } from 'src/types';

type Props = {
  heroImage: ImageMeta;
}

export default function About({ heroImage }: Props) {
  return (
    <PageTemplate
      title="Despre Ozaki Arena"
      heroImage={heroImage}
    >
      About us
    </PageTemplate>
  );
}

export async function getStaticProps() {
  const heroImage: ImageMeta = {
    src: 'https://picsum.photos/1920/540',
    alt: 'About Page Hero'
  };

  return {
    props: {
      heroImage
    }
  };
}
