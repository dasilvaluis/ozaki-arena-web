import { Box, Heading } from '@chakra-ui/react';
import ContentBox from 'components/molecules/content-box';
import TwoColumnTable from 'components/organisms/price-table/two-column-table';
import { PriceGroup } from 'types';

const makeColor = (idx: number) => (idx % 2 ? 'primary' : 'secondary');

type Props = {
  prices: PriceGroup[];
}

export default function PriceTables({ prices }: Props) {
  return (
    <section>
      <Heading as="h2" size="lg" mb="2rem" pl="2rem" color="secondary">Preturile noastre</Heading>
      {prices.map((priceGroup, index) => (
        <Box key={priceGroup.label} my="2rem">
          <ContentBox bgColor={makeColor(index)}>
            <Heading as="h3" size="md" mb="1.5rem">{priceGroup.label}</Heading>
            <TwoColumnTable columns={priceGroup.prices} />
          </ContentBox>
        </Box>
      ))}
    </section>
  );
}
