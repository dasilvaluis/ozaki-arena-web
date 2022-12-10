import { Box, Flex } from '@chakra-ui/react';
import { WithChildren } from 'types';
import Footer from '../organisms/footer/footer';
import Header from '../organisms/navbar/header';

export default function RootLayout({ children }: WithChildren) {
  return (
    <Flex minHeight="100vh" direction="column">
      <Header />
      <Box flex="1">{children}</Box>
      <Footer />
    </Flex>
  );
}
