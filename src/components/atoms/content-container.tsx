import { chakra } from '@chakra-ui/react';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof chakra.div>;

function ContentContainer({ children, ...props }: Props) {
  return (
    <chakra.div width="100%" maxW="1000px" px="20px" mx="auto" {...props}>
      {children}
    </chakra.div>
  );
}

export default ContentContainer;
