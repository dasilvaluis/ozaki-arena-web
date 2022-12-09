import { Heading, Text } from '@chakra-ui/react';
import MainContainer from 'components/atoms/main-container';
import Head from 'components/head';
import HeroSlider from 'components/organisms/hero-slider/hero-slider';

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <main>
        <HeroSlider>
          <Heading as="h1" size="4xl" mb=".25rem">Ozaki Arena</Heading>
          <Heading as="h3" size="lg" ml="0.2rem">Sala ta de alpinism din Sibiu</Heading>
          <Text ml="0.2rem" mt=".75rem">
            Cățărat | Training | Ninja Warrior | Instrucţie | Activități pentru copii
          </Text>
        </HeroSlider>
        <MainContainer as="div">
          Morality christian deceptions burying abstract snare abstract reason inexpedient passion.
          Play good faith free passion battle horror noble virtues chaos philosophy reason ultimate.
          Victorious horror snare decrepit ultimate disgust ascetic horror truth reason truth
          convictions.
          Love madness chaos salvation reason ultimate intentions philosophy contradict sexuality.
          <br />
          Spirit eternal-return morality against moral of war play pinnacle war value derive.
          Salvation philosophy gains insofar madness ideal love of madness madness suicide
          fearful merciful.
          Pious overcome pious inexpedient contradict.
          Christianity ubermensch contradict holiest faithful dead passion eternal-return christian.
          <br />
          Sexuality disgust ocean enlightenment joy depths ultimate inexpedient will.
          Snare strong law superiority deceptions.
          Virtues convictions derive ubermensch christian intentions overcome burying revaluation
          aversion against sexuality ideal decrepit.
          Pinnacle deceptions derive pious chaos. Endless superiority pinnacle suicide
          ascetic play spirit hope.
          Hatred strong pinnacle ascetic burying disgust eternal-return.
          Derive convictions pious enlightenment reason convictions evil virtues law faithful
          chaos ideal evil christianity.
          <br />
          Chaos revaluation aversion morality.
        </MainContainer>
      </main>
    </>
  );
}
