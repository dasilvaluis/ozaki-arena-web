import {
  Box, chakra, Flex, Heading
} from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';
import BoxedImage from 'components/molecules/boxed-image';
import Link from 'next/link';
import { useRef } from 'react';
import menu from 'settings/menu.json';
import headerConstants from 'src/constants/header';
import { biResponsiveXl } from 'src/helpers/responsive';
import NavDesktop from './core/nav-desktop';
import NavMobile from './core/nav-mobile';

const mobileDisplay = biResponsiveXl('block', 'none');
const desktopDisplay = biResponsiveXl('none', 'block');

const { headerHeight: headerHeightResponsiveMap } = headerConstants;

function Header() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  return (
    <chakra.header id="site-header" color="textOverPrimary" bgColor="primary">
      <ContentContainer>
        <Flex height={headerHeightResponsiveMap} justifyContent="space-between" alignItems="center">
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
