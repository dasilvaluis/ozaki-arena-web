import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { WithChildren } from './types';

const theme = extendTheme({
  semanticTokens: {
    colors: {
      primary: 'gray.800',
      secondary: 'green.600',
      textOverPrimary: 'gray.200',
      text: {
        default: 'gray.200',
        _dark: 'gray.50'
      }
    }
  }
});

export default function ThemeProvider({ children }: WithChildren) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}
