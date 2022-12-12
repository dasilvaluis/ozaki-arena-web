import { useBreakpointValue } from '@chakra-ui/react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

type Props = Omit<NextImageProps, 'width' | 'height'> & {
  width: Record<string, string> | string[];
  height: Record<string, string> | string[];
};

const parsePx = (w?: string) => (w ? parseInt(w?.replace('px', ''), 10) : 0);

function ResponsiveNextImage({
  width,
  height,
  ...rest
}: Props) {
  const rWidth = useBreakpointValue(width);
  const rHeight = useBreakpointValue(height);

  return (
    <NextImage
      {...rest}
      width={parsePx(rWidth)}
      height={parsePx(rHeight)}
    />
  );
}

export default ResponsiveNextImage;
