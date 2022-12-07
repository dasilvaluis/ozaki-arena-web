import { Box, BoxProps } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

type Props = BoxProps & Pick<ImageProps, 'src' | 'alt'> & {
  objectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
};

function BoxedImage({
  width,
  height,
  src,
  alt,
  objectFit,
  ...props
}: Props) {
  return (
    <Box width={width} height={height || width} position="relative" {...props}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{
          objectFit
        }}
      />
    </Box>
  );
}

export default BoxedImage;
