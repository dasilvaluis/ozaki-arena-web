import { TimeIcon } from '@chakra-ui/icons';
import {
  Box, Button, Center, HStack, Icon, Text
} from '@chakra-ui/react';
import PageTemplate from 'components/templates/page-template';
import NextLink from 'next/link';
import { ImageMeta } from 'types';

type Props = {
  heroImage: ImageMeta;
}

export default function Leaderboard({ heroImage }: Props) {
  return (
    <PageTemplate
      title="Leaderboard"
      subTitle="Treci la nivelul următor"
      heroImage={heroImage}
    >
      <Center py="6rem" flexDirection="column">
        <HStack>
          <Text as="b" color="secondary" fontSize="3xl" textTransform="uppercase" mb={0}>in curand</Text>
          <Icon boxSize={6} as={TimeIcon} color="primary" />
        </HStack>
        <Box mt="1rem">
          <Button as={NextLink} href="/" colorScheme="burntOrange">Acasă</Button>
        </Box>
      </Center>

    </PageTemplate>
  );
}

export async function getStaticProps() {
  const heroImage: ImageMeta = {
    src: 'https://picsum.photos/seed/leader-board/1920/540',
    alt: 'Leaderboard Page Hero'
  };

  return {
    props: {
      heroImage
    }
  };
}
