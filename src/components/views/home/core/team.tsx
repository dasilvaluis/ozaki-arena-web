import {
  Box, Center, Container, Flex, Heading, Text, VStack
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
        <Flex
          display="inline-flex"
          justifyContent="center"
          gap={biResponsiveLg('1rem', '2rem')}
          flexWrap="wrap"
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
        </Flex>
      </Center>
    </ContentContainer>
  );
}

export default Team;
