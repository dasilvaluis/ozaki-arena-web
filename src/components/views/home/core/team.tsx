import {
  Box, Heading, HStack, Text, VStack
} from '@chakra-ui/react';
import Image from 'next/image';
import team from 'settings/team.json';

function Team() {
  return (
    <section>
      <Heading as="h3" size="xl" color="primary" mb="2rem" textAlign="center">Echipă</Heading>
      <HStack gap="2rem" direction="row" pt="1.5rem" pl="1.5rem" justifyContent="center">
        {team.entries.map((member) => (
          <VStack key={member.photo} maxWidth="250px">
            <Box position="relative">
              <Box
                bgColor="primary"
                width="100%"
                height="100%"
                position="absolute"
                top="-1.5rem"
                left="-1.5rem"
              />
              <Box position="relative">
                <Image
                  width={205}
                  height={157}
                  src={member.photo}
                  alt={member.name}
                />
              </Box>
            </Box>
            <Box textAlign="center">
              <Text as="b" fontSize="xl">{member.name}</Text>
              <Text>{member.role}</Text>
            </Box>
          </VStack>
        ))}
      </HStack>
    </section>
  );
}

export default Team;
