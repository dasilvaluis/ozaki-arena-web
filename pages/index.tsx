import { Heading, Text } from '@chakra-ui/react';
import MainContainer from 'components/atoms/main-container';
import Head from 'components/organisms/head';
import Slider from 'components/organisms/hero-slider';

export default function Home() {
  return (
    <>
      <Head title="Home" />
      <main>
        <Slider>
          <Heading as="h1" size="4xl">Ozaki Arena</Heading>
          <Heading as="h3" size="lg" ml="0.2rem">Sala ta de cățărat</Heading>
          <Text ml="0.2rem" mb="0">
            Cățărat | Training | Ninja Warrior | Instrucţie | Activități pentru copii
          </Text>
        </Slider>
        <MainContainer as="div">
          <Text>
            Morality christian deceptions burying abstract snare
            abstract reason inexpedient passion.
            Play good faith free passion battle horror noble
            virtues chaos philosophy reason ultimate.
            Victorious horror snare decrepit ultimate disgust ascetic horror truth reason truth
            convictions.
          </Text>
          <Text>
            Spirit eternal-return morality against moral of war play pinnacle war value derive.
            Salvation philosophy gains insofar madness ideal love of madness madness suicide
            fearful merciful.
            Pious overcome pious inexpedient contradict.
            Christianity ubermensch contradict holiest faithful dead
            passion eternal-return christian.
          </Text>
        </MainContainer>
      </main>
    </>
  );
}
