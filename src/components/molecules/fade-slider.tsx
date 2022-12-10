import {
  Box, BoxProps, Fade, useInterval
} from '@chakra-ui/react';
import useRange from 'hooks/useRange';
import Image from 'next/image';
import type { ImageMeta } from 'types';

type Props = Omit<BoxProps, 'transitionDuration'> & {
  interval: number;
  transitionDuration: number;
  images: ImageMeta[]
};

function FadeSlider({
  width,
  height,
  images,
  interval,
  transitionDuration
}: Props) {
  const [currentSlideIndex, { next: nextSlide }] = useRange(images);

  useInterval(nextSlide, interval);

  const transition = {
    enter: { duration: transitionDuration },
    exit: { duration: transitionDuration }
  };

  return (
    <Box position="relative" width={width} height={height}>
      {images.map(({ src, alt }, imageIndex) => (
        <Fade
          key={src}
          in={currentSlideIndex === imageIndex}
          transition={transition}
        >
          <Image
            src={src}
            alt={alt}
            fill
            style={{
              objectFit: 'cover'
            }}
          />
        </Fade>
      ))}
    </Box>
  );
}

export default FadeSlider;
