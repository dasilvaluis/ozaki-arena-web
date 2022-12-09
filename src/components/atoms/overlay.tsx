import { Box } from '@chakra-ui/react';

function Overlay() {
  return (
    <Box
      bg="rgba(0, 0, 0, 0.25)"
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      bottom={0}
    />
  );
}

export default Overlay;
