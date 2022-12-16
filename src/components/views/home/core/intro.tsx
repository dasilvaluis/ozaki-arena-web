import { Container, Heading, Text } from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';
import { biResponsiveXl } from 'helpers/responsive';

export default function Intro() {
  return (
    <ContentContainer>
      <Container textAlign="center" my={biResponsiveXl('5rem', '10rem')} maxWidth={biResponsiveXl('xl', '2xl')} id="home-intro">
        <Heading size={biResponsiveXl('xl', '2xl')} color="primary" mb="1rem" lineHeight={{ xl: '1.25' }}>
          Depășește-ți Limitele
        </Heading>
        <Text as="b" fontSize={biResponsiveXl('xl', '2xl')}>
          Aceasta este sala ta de cățărat,
          unde îți vei debloca forța interioară și vei atinge noi culmi!
        </Text>
      </Container>
    </ContentContainer>
  );
}
