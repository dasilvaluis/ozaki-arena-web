import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Button, Flex, useDisclosure
} from '@chakra-ui/react';
import { RefObject } from 'react';
import { createPortal } from 'react-dom';
import NavigationEntries from './nav-entries';

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
    <Flex justifyContent="flex-end" py="20px">
      <Button onClick={onToggle} variant="link">
        <HamburgerIcon />
      </Button>
      {isOpen && portalRef.current && createPortal(
        <NavigationEntries direction="column" menuEntries={menuEntries} onItemClick={onClose} />,
        portalRef.current
      )}
    </Flex>
  );
}

export default NavMobile;
