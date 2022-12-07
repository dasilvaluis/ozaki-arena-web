import { chakra } from '@chakra-ui/react';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof chakra.div>;

function ContentContainer({ children, ...props }: Props) {
  return (
    <chakra.div
      width={{
        base: '100%', md: '90%', lg: '80%'
      }}
      maxW="1500px"
      px={{ base: '20px', md: 'initial' }}
      mx="auto"
      {...props}
    >
      {children}
    </chakra.div>
  );
}

export default ContentContainer;
