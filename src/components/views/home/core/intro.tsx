import { Container, Heading, Text } from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';

export default function Intro() {
  return (
    <ContentContainer>
      <Container textAlign="center" my="5rem" maxWidth="xl" id="home-intro">
        <Heading size="2xl" color="primary" mb="1rem" lineHeight="1.15em">
          Găsește-ți punctul de rupere
        </Heading>
        <Text as="b" fontSize="xl">
          Aceasta este sala ta de cățărat,
          unde îți vei debloca forța interioară și vei atinge noi culmi!
        </Text>
      </Container>
    </ContentContainer>
  );
}
