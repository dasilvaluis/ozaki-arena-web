import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import RootLayout from '../src/components/root-layout';
import '../src/styles/globals.css';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#f7fafc',
      secondary: '#1a202c',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  );
}
