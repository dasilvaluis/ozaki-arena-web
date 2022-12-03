import {
  Button, HStack, Link, Flex,
} from '@chakra-ui/react';
import NextLink from 'next/link';

type Props = {
  menuEntries: {
    label: string;
    path: string;
  }[]
}

function NavDesktop({ menuEntries }: Props) {
  return (
    <Flex justifyContent="flex-end" py="20px">
      <HStack as="nav" spacing="0px">
        {menuEntries.map((item) => (
          <Link as={NextLink} href={item.path} key={item.path}>
            <Button variant="nav">
              {item.label}
            </Button>
          </Link>
        ))}
      </HStack>
    </Flex>
  );
}

export default NavDesktop;
