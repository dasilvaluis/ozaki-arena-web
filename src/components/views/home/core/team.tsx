import {
  Box, Container, Grid, Heading, Text, VStack
} from '@chakra-ui/react';
import NextImage from 'next/image';
import team from 'settings/team.json';

function Team() {
  return (
    <section>
      <Heading as="h3" size="xl" color="primary" mb="2rem" textAlign="center">Echipă</Heading>
      <Container maxW="4xl">
        <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap="2rem" justifyContent="center">
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
                <Text>{member.role}</Text>
              </Box>
            </VStack>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default Team;
