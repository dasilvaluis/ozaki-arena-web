import { Button } from '@chakra-ui/react';
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
        <Button
          key={item.path}
          as={NextLink}
          href={item.path}
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
      ))}
    </>
  );
}

export default NavigationEntries;
