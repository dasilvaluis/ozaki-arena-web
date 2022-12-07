import type { AppProps } from 'next/app';
import ThemeProvider from 'src/theme-provider';
import RootLayout from 'src/components/root-layout';
import 'src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}
