import { HStack } from '@chakra-ui/react';
import NavigationEntries from './menu-entries';

type Props = {
  menuEntries: {
    label: string;
    path: string;
  }[]
}

function NavDesktop({ menuEntries }: Props) {
  return (
    <HStack as="nav" justifyContent="flex-end">
      <NavigationEntries menuEntries={menuEntries} />
    </HStack>
  );
}

export default NavDesktop;
