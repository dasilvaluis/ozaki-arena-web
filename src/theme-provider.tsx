import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { WithChildren } from './types';

const theme = extendTheme({
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Source Sans Pro', sans-serif"
  },
  semanticTokens: {
    colors: {
      primary: 'orange.500',
      secondary: 'gray.800',
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
