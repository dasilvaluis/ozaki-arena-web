import { Box, Heading } from '@chakra-ui/react';
import TextCard from 'components/molecules/text-card';
import TwoColumnTable from 'components/organisms/price-table/two-column-table';
import textCardConstants from 'constants/text-card';
import { PriceGroup } from 'types';

const makeColor = (idx: number) => (idx % 2 ? 'primary' : 'secondary');

type Props = {
  prices: PriceGroup[];
}

export default function PriceTables({ prices }: Props) {
  return (
    <section>
      <Heading as="h2" size="lg" mb="2rem" pl={textCardConstants.padding} color="secondary">Preturile noastre</Heading>
      {prices.map((priceGroup, index) => (
        <Box key={priceGroup.label} my="2rem">
          <TextCard variant={makeColor(index)}>
            <Heading as="h3" size="md" mb="1.5rem">{priceGroup.label}</Heading>
            <TwoColumnTable columns={priceGroup.prices} />
          </TextCard>
        </Box>
      ))}
    </section>
  );
}
