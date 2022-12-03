import { Flex } from '@chakra-ui/react';
import menu from '../../../settings/menu.json';
import ContentContainer from '../../atoms/content-container';
import BoxedImage from '../../molecules/boxed-image';
import NavDesktop from './core/nav-desktop';
import NavMobile from './core/nav-mobile';

function Navbar() {
  return (
    <ContentContainer as={Flex} justifyContent="space-between" alignItems="center">
      <BoxedImage width="50px" height="50px" src="/brand-logo.png" alt="Brand Logo" objectFit="contain" />
      <NavDesktop menuEntries={menu.entries} />
      <NavMobile menuEntries={menu.entries} />
    </ContentContainer>
  );
}

export default Navbar;
