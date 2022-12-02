import { ReactNode } from 'react';
import Footer from './organisms/footer/footer';
import Navbar from './organisms/navbar/navbar';

type Props = {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
