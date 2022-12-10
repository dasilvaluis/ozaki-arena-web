import { Box, BoxProps } from '@chakra-ui/react';

type Props = Pick<BoxProps, 'opacity'>;

function Overlay({ opacity = 0.3 }: Props) {
  return (
    <Box
      bg="secondary"
      opacity={opacity}
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      bottom={0}
    />
  );
}

export default Overlay;
