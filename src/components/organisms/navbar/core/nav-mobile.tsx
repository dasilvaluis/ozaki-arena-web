import { Collapse, VStack } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';
import NavigationEntries from './menu-entries';

type Props = {
  isOpen: boolean;
  onItemClick: MouseEventHandler;
  menuEntries: {
    label: string;
    path: string;
  }[]
}

function NavMobile({ menuEntries, isOpen, onItemClick }: Props) {
  return (
    <Collapse in={isOpen} animateOpacity>
      <VStack alignItems="left" as="nav" py="1rem">
        <NavigationEntries menuEntries={menuEntries} onItemClick={onItemClick} />
      </VStack>
    </Collapse>
  );
}

export default NavMobile;
