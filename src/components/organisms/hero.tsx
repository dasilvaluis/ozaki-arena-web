import { Box } from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';
import Overlay from 'components/atoms/overlay';
import Image from 'next/image';
import { biResponsiveMd } from 'src/helpers/responsive';
import type { ImageMeta, WithChildren } from 'types';

type Props = WithChildren & {
  heroImage: ImageMeta
}

function Hero({ children, heroImage }: Props) {
  return (
    <Box width="100%" height={biResponsiveMd('15rem', '30rem')} position="relative">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        style={{
          objectFit: 'cover'
        }}
      />
      <Overlay />
      <Box position="absolute" bottom="0" transform="translateY(-50%)" width="100%">
        <ContentContainer color="text">
          {children}
        </ContentContainer>
      </Box>
    </Box>
  );
}

export default Hero;
