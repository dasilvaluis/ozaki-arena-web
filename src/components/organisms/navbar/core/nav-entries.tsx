import {
  Button, Link, Stack, StackProps
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { MouseEventHandler } from 'react';
import { MenuEntry } from '../types';

type Props = Pick<StackProps, 'direction'> & {
  menuEntries: MenuEntry[],
  onItemClick?: MouseEventHandler,
}

function NavigationEntries({ direction, menuEntries, onItemClick }: Props) {
  return (
    <Stack direction={direction} as="nav" alignItems="left">
      {menuEntries.map((item) => (
        <Link as={NextLink} href={item.path} key={item.path}>
          <Button variant="ghost" onClick={onItemClick}>
            {item.label}
          </Button>
        </Link>
      ))}
    </Stack>
  );
}

export default NavigationEntries;
