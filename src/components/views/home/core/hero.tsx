import { Heading, Text } from '@chakra-ui/react';
import Slider from 'components/organisms/hero-slider';

function Hero() {
  return (
    <Slider>
      <Heading as="h1" size="4xl">Ozaki Arena</Heading>
      <Heading as="h3" size="lg" ml="0.2rem">Sala ta de cățărat</Heading>
      <Text ml="0.2rem" mb="0">
        Cățărat | Training | Ninja Warrior | Instrucţie | Activități pentru copii
      </Text>
    </Slider>
  );
}

export default Hero;
