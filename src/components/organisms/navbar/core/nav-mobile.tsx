import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box, Button, Collapse, useDisclosure, VStack
} from '@chakra-ui/react';
import { RefObject } from 'react';
import { createPortal } from 'react-dom';
import NavigationEntries from './menu-entries';

type Props = {
  portalRef: RefObject<HTMLDivElement>
  menuEntries: {
    label: string;
    path: string;
  }[]
}

function NavMobile({ menuEntries, portalRef }: Props) {
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box>
      <Button onClick={onToggle} variant="link">
        <HamburgerIcon />
      </Button>
      {portalRef.current && createPortal(
        <Collapse in={isOpen} animateOpacity>
          <VStack alignItems="left" as="nav" pb="1rem">
            <NavigationEntries menuEntries={menuEntries} onItemClick={onClose} />
          </VStack>
        </Collapse>,
        portalRef.current
      )}
    </Box>
  );
}

export default NavMobile;
