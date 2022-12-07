import {
  Button, Link
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { MouseEventHandler } from 'react';
import { MenuEntry } from '../types';

type Props = {
  menuEntries: MenuEntry[],
  onItemClick?: MouseEventHandler,
}

function NavigationEntries({ menuEntries, onItemClick }: Props) {
  return (
    <>
      {menuEntries.map((item) => (
        <Link as={NextLink} href={item.path} key={item.path}>
          <Button variant="nav" pt="0em" onClick={onItemClick}>
            {item.label}
          </Button>
        </Link>
      ))}
    </>
  );
}

export default NavigationEntries;
