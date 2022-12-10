import {
  Box, BoxProps
} from '@chakra-ui/react';
import { WithChildren } from 'src/types';

type Props = WithChildren & Required<Pick<BoxProps, 'bgColor'>>

export default function ContentBox({ children, bgColor }: Props) {
  return (
    <Box bgColor={bgColor} padding="2rem" color="white">
      {children}
    </Box>
  );
}
