import { Spacer } from '@chakra-ui/react';
import Head from 'components/organisms/head';
import {
  FirstVisit, Hero, Intro, Team
} from 'components/views/home';

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <main>
        <Hero />
        <Spacer mt="4rem" />
        <Intro />
        <FirstVisit />
        <Team />
      </main>
    </>
  );
}
