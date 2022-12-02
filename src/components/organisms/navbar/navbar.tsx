import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import menu from '../../../settings/menu.json';
import ContentContainer from '../../atoms/content-container';
import NavDesktop from './core/nav-desktop';
import NavMobile from './core/nav-mobile';

function Navbar() {
  return (
    <ContentContainer as={Flex} justifyContent="space-between" alignItems="center">
      <Image src="/brand-logo.png" width={50} height={50} alt="Brand Logo" />
      <NavDesktop menuEntries={menu.entries} />
      <NavMobile menuEntries={menu.entries} />
    </ContentContainer>
  );
}

export default Navbar;
