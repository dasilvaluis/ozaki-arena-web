import MainContainer from 'components/atoms/main-container';
import Head from 'components/organisms/head';
import { Hero, Team } from 'components/views/home';

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <main>
        <Hero />
        <MainContainer as="div">
          <Team />
        </MainContainer>
      </main>
    </>
  );
}
