import { Box, Container } from '@chakra-ui/react';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof Container>;

function ContentContainer({ children, ...props }: Props) {
  return (
    <Box width="100%" maxW="1000px" px="20px" {...props}>
      {children}
    </Box>
  );
}

export default ContentContainer;
