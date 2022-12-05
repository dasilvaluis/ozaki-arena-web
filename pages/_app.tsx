import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import RootLayout from '../src/components/root-layout';
import '../src/styles/globals.css';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#aace58',
      secondary: 'rgb(25, 22, 23)'
    }
  }
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
