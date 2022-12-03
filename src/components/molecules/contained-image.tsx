import { Box, BoxProps } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

type Props = Pick<BoxProps, 'width' | 'height'> & Pick<ImageProps, 'src' | 'alt'>;

function ContainedImage({
  width,
  height,
  src,
  alt,
}: Props) {
  return (
    <Box width={width} height={height} position="relative">
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit: 'contain',
        }}
      />
    </Box>
  );
}

export default ContainedImage;
