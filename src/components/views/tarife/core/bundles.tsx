import {
  Box, Heading, ListItem, UnorderedList
} from '@chakra-ui/react';
import TextCard from 'components/molecules/text-card';
import textCardConstants from 'constants/text-card';
import { BundleMeta } from 'types';

const makeColor = (idx: number) => (idx % 2 ? 'primary' : 'secondary');

type Props = {
  bundles: BundleMeta[];
}

export default function Bundles({ bundles }: Props) {
  return (
    <section>
      <Heading as="h2" size="lg" mb="1.5rem" pl={textCardConstants.padding} color="secondary">Pachete speciale</Heading>
      {bundles.map((bundle, index) => (
        <Box key={bundle.label} my="2rem">
          <TextCard variant={makeColor(index)}>
            <Heading as="h3" size="md" mb="1.5rem">{bundle.label}</Heading>
            <UnorderedList>
              <ListItem>Abonament de 3 luni</ListItem>
              <ListItem>Închiriere gratuită de echipamente</ListItem>
              <ListItem>1 sesiune de instruire pe săptămână</ListItem>
            </UnorderedList>
          </TextCard>
        </Box>
      ))}
    </section>
  );
}
