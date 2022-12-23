import { chakra, Container } from '@chakra-ui/react';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof chakra.div>;

function ContentContainer({ children, ...props }: Props) {
  return (
    <Container
      width={{
        base: '100%', md: '90%'
      }}
      maxW="1200px"
      mx="auto"
      sx={{
        '& &': {
          with: 'initial',
          padding: 'initial'
        }
      }}
      {...props}
    >
      {children}
    </Container>
  );
}

export default ContentContainer;
