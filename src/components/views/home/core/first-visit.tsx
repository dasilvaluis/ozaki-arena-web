import {
  Box, Center, Container, Flex, Heading, Text
} from '@chakra-ui/react';
import NextImage from 'next/image';

function FirstVisit() {
  return (
    <Box as="section" bgColor="secondary" color="text">
      <Flex height="30rem">
        <Box position="relative" flex="0 1 60%">
          <NextImage
            fill
            src="https://picsum.photos/seed/welcome-to-ozaki/800/600"
            alt="Welcome to Ozaki Image"
            style={{
              objectFit: 'cover'
            }}
          />
        </Box>
        <Center color="white" mx="auto">
          <Container textAlign="center" maxWidth="sm">
            <Heading size="lg">
              Prima dată la
              {' '}
              <Text as="b" color="primary" whiteSpace="nowrap">Ozaki Arena</Text>
              ?
            </Heading>
            <Text fontSize="xl">
              Suntem pregătiți să primim oameni de toate vârstele și nivelurile.
            </Text>
            <Text fontSize="xl">
              Fă primul pas și află informațiile relevante pentru prima ta vizită.
            </Text>
          </Container>
        </Center>
      </Flex>
    </Box>
  );
}

export default FirstVisit;
