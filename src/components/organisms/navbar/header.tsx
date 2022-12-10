import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Button, chakra, Flex, Heading, Show, useDisclosure
} from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';
import BoxedImage from 'components/molecules/boxed-image';
import Link from 'next/link';
import menu from 'settings/menu.json';
import headerConstants from 'src/constants/header';
import NavDesktop from './core/nav-desktop';
import NavMobile from './core/nav-mobile';

const navbarBreakpoint = 'lg';

const { headerHeight: headerHeightResponsiveMap } = headerConstants;

function Header() {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <chakra.header id="site-header" color="textOverPrimary" bgColor="secondary">
      <ContentContainer position="relative">
        <Flex height={headerHeightResponsiveMap} justifyContent="space-between" alignItems="center">
          <Link href="/">
            <BoxedImage width="3.125rem" src="/brand-logo.png" alt="Brand Logo" objectFit="contain" />
          </Link>
          <Show above={navbarBreakpoint}>
            <NavDesktop menuEntries={menu.entries} />
          </Show>
          <Show below={navbarBreakpoint}>
            <Heading as="h5" size="md" m={0}>Ozaki Arena</Heading>
            <Button onClick={onToggle} variant="link">
              <HamburgerIcon color="white" />
            </Button>
          </Show>
        </Flex>
        <Show below={navbarBreakpoint}>
          <NavMobile isOpen={isOpen} menuEntries={menu.entries} onItemClick={onClose} />
        </Show>
      </ContentContainer>
    </chakra.header>

  );
}

export default Header;
