import { Box, Heading } from '@chakra-ui/react';
import { Fragment } from 'react';
import prices from 'settings/prices.json';
import MainContainer from 'src/components/atoms/main-container';
import PriceTable from 'src/components/organisms/price-table/price-table';
import Head from '../src/components/head';

export default function Prices() {
  return (
    <>
      <Head title="Tarife" />
      <MainContainer>
        <Heading as="h1" size="lg">Tarife</Heading>

        {prices.entries.map((priceGroup) => (
          <Fragment key={priceGroup.label}>
            <Box my="30px">
              <PriceTable priceGroup={priceGroup} />
            </Box>
          </Fragment>
        ))}
      </MainContainer>
    </>
  );
}
