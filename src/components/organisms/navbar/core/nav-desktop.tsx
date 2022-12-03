import { Flex } from '@chakra-ui/react';
import NavigationEntries from './nav-entries';

type Props = {
  menuEntries: {
    label: string;
    path: string;
  }[]
}

function NavDesktop({ menuEntries }: Props) {
  return (
    <Flex justifyContent="flex-end">
      <NavigationEntries menuEntries={menuEntries} direction="row" />
    </Flex>
  );
}

export default NavDesktop;
