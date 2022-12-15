import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box, Button, Center, Container, Flex, Heading, Spacer, Text
} from '@chakra-ui/react';
import routes from 'constants/routes';
import { biResponsiveMd } from 'helpers/responsive';
import NextImage from 'next/image';
import NextLink from 'next/link';

function FirstVisit() {
  return (
    <Box as="section" bgColor="secondary" color="text">
      <Flex minHeight="30rem" direction={biResponsiveMd('column', 'row')}>
        <Box position="relative" minHeight="20rem" flex="0 1 50%">
          <NextImage
            fill
            src="https://picsum.photos/seed/welcome-to-ozaki/800/600"
            alt="Welcome to Ozaki Image"
            style={{
              objectFit: 'cover'
            }}
          />
        </Box>
        <Center color="white" py="3rem" mx="auto">
          <Container textAlign="center" maxWidth="md">
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
            <Spacer mb="1.5rem" />
            <Button as={NextLink} href={routes.primaVizita} colorScheme="yellowGreen" rightIcon={<ChevronRightIcon />} variant="solid">afla mai multe</Button>
          </Container>
        </Center>
      </Flex>
    </Box>
  );
}

export default FirstVisit;
