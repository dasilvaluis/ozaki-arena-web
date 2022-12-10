import PageTemplate from 'components/templates/page-template';
import { ImageMeta } from 'types';

type Props = {
  heroImage: ImageMeta;
}

export default function Leaderboard({ heroImage }: Props) {
  return (
    <PageTemplate
      title="Leaderboard"
      subTitle="Treci la nivelul următor"
      heroImage={heroImage}
    >
      Content

    </PageTemplate>
  );
}

export async function getStaticProps() {
  const heroImage: ImageMeta = {
    src: 'https://picsum.photos/seed/leader-board/1920/540',
    alt: 'Leaderboard Page Hero'
  };

  return {
    props: {
      heroImage
    }
  };
}
