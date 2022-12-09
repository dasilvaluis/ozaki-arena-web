import { chakra, Heading } from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';
import Slider from './core/slider';

function Hero() {
  return (
    <Slider>
      <ContentContainer color="text">
        <Heading as="h1" size="4xl">Ozaki Arena</Heading>
        <Heading as="h2">Cea mai tare sala de catarat in Romania</Heading>
        <chakra.p>
          Bouldering | Catarat | Training | Ninja Warrior | Activitati pentru Copii
        </chakra.p>
      </ContentContainer>
    </Slider>
  );
}

export default Hero;
