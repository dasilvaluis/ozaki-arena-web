import { Box, Flex, Heading } from '@chakra-ui/react';
import Link from 'next/link';
import { useRef } from 'react';
import menu from 'settings/menu.json';
import ContentContainer from '../../atoms/content-container';
import BoxedImage from '../../molecules/boxed-image';
import NavDesktop from './core/nav-desktop';
import NavMobile from './core/nav-mobile';

function Navbar() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  return (
    <header>
      <ContentContainer as={Flex} py={{ base: '15px', md: '20px' }} justifyContent="space-between" alignItems="center">
        <Link href="/">
          <BoxedImage width="50px" height="50px" src="/brand-logo.png" alt="Brand Logo" objectFit="contain" />
        </Link>
        <Box display={{ base: 'none', md: 'flex' }}>
          <NavDesktop menuEntries={menu.entries} />
        </Box>
        <Heading as="h5" size="lg" display={{ base: 'block', md: 'none' }}>Ozaki Arena</Heading>
        <Box display={{ base: 'flex', md: 'none' }}>
          <NavMobile portalRef={mobileMenuRef} menuEntries={menu.entries} />
        </Box>
      </ContentContainer>
      <ContentContainer>
        <div ref={mobileMenuRef} />
      </ContentContainer>
    </header>

  );
}

export default Navbar;
