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
          <Button
            variant="ghost"
            color="secondaryContrast"
            _hover={{
              backgroundColor: 'secondaryContrast',
              color: 'secondary'
            }}
            onClick={onItemClick}
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </>
  );
}

export default NavigationEntries;
