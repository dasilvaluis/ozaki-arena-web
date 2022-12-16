import {
  Box, Center, Container, Grid, Heading, Text, VStack
} from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';
import { biResponsiveLg } from 'helpers/responsive';
import NextImage from 'next/image';
import team from 'settings/team.json';

function Team() {
  return (
    <ContentContainer as="section" my="5rem" id="home-team">
      <Container mb="3rem" textAlign="center">
        <Heading as="h2" size="xl" color="primary">
          Echipă
        </Heading>
        <Text as="b" fontSize="xl">
          Cațără-te cu încredere
          <br />
          Personalul nostru profesionist este aici pentru tine
        </Text>
      </Container>
      <Center maxW="2000px">
        <Grid
          display="inline-grid"
          justifyContent="center"
          templateColumns={biResponsiveLg('repeat(2, 1fr)', 'repeat(4, 1fr)')}
          gap={biResponsiveLg('1rem', '2rem')}
        >
          {team.entries.map((member) => (
            <VStack key={member.photo}>
              <NextImage
                width={205}
                height={157}
                src={member.photo}
                alt={member.name}
                style={{
                  borderRadius: 'var(--chakra-radii-lg)'
                }}
              />
              <Box textAlign="center">
                <Text as="b" fontSize={{ base: 'lg', sm: 'xl' }}>{member.name}</Text>
                <div>{member.role}</div>
              </Box>
            </VStack>
          ))}
        </Grid>
      </Center>
    </ContentContainer>
  );
}

export default Team;
