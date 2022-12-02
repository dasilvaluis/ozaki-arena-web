import {
  BoxProps,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent, DrawerOverlay,
  DrawerProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props =
  Pick<DrawerProps, 'isOpen' | 'placement' | 'onClose' | 'finalFocusRef'> &
  Pick<BoxProps, 'p'> & {
  children: ReactNode;
}

function DrawerMenu({
  p = 15,
  placement = 'right',
  isOpen,
  children,
  onClose,
  finalFocusRef,
}: Props) {
  return (
    <Drawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      finalFocusRef={finalFocusRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton alignSelf="end" mx={p} my={p} />
        <DrawerBody mt={p}>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default DrawerMenu;
