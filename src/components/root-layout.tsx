import { ReactNode } from 'react';
import ContentContainer from './atoms/content-container';
import Footer from './organisms/footer/footer';
import Navbar from './organisms/navbar/navbar';

type Props = {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <ContentContainer as="main" my="30px">
        {children}
      </ContentContainer>
      <Footer />
    </>
  );
}
