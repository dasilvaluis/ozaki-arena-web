import { chakra } from '@chakra-ui/react';
import { ComponentProps } from 'react';
import ContentContainer from './content-container';

type Props = ComponentProps<typeof chakra.div>;

function MainContainer({ children, ...props }: Props) {
  return (
    <ContentContainer as="main" my="30px" {...props}>
      {children}
    </ContentContainer>
  );
}

export default MainContainer;
