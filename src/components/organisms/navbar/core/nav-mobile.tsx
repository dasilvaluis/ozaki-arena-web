import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Flex, Button, Link, useDisclosure, VStack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRef } from 'react';
import Drawer from './drawer';

type Props = {
  menuEntries: {
    label: string;
    path: string;
  }[]
}

function NavMobile({ menuEntries }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <Flex justifyContent="flex-end" py="20px">
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <VStack alignItems="left">
          {menuEntries.map((item) => (
            <Link as={NextLink} href={item.path} key={item.path}>
              <Button variant="text">
                {item.label}
              </Button>
            </Link>
          ))}
        </VStack>
      </Drawer>
    </Flex>
  );
}

export default NavMobile;
