import {
  Box, Flex, Heading, chakra
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRef } from 'react';
import menu from 'settings/menu.json';
import ContentContainer from '../../atoms/content-container';
import BoxedImage from '../../molecules/boxed-image';
import NavDesktop from './core/nav-desktop';
import NavMobile from './core/nav-mobile';

const responsive = <B, M>(base: B, desktop: M) => ({ base, lg: desktop });
const mobileDisplay = responsive('block', 'none');
const desktopDisplay = responsive('none', 'block');

function Header() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  return (
    <chakra.header color="textOverPrimary" bgColor="primary">
      <ContentContainer>
        <Flex py={responsive('1rem', '1.25rem')} justifyContent="space-between" alignItems="center">
          <Link href="/">
            <BoxedImage width="3.125rem" height="3.125rem" src="/brand-logo.png" alt="Brand Logo" objectFit="contain" />
          </Link>
          <Box display={desktopDisplay}>
            <NavDesktop menuEntries={menu.entries} />
          </Box>
          <Heading as="h5" size="md" display={mobileDisplay}>Ozaki Arena</Heading>
          <Box display={mobileDisplay}>
            <NavMobile portalRef={mobileMenuRef} menuEntries={menu.entries} />
          </Box>
        </Flex>
        <Box display={mobileDisplay} ref={mobileMenuRef} />
      </ContentContainer>
    </chakra.header>

  );
}

export default Header;
