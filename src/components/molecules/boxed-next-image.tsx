import { Box, BoxProps } from '@chakra-ui/react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

type Props = BoxProps & Pick<NextImageProps, 'src' | 'alt'> & {
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
};

function BoxedNextImage({
  src,
  alt,
  objectFit = 'contain',
  ...props
}: Props) {
  return (
    <Box position="relative" {...props}>
      <NextImage
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

export default BoxedNextImage;
