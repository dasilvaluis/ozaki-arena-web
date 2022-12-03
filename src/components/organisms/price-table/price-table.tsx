import {
  Heading, Table, TableContainer, Tbody, Td, Tr
} from '@chakra-ui/react';
import type { PriceGroup } from './types';

type Props = {
  priceGroup: PriceGroup;
}

export default function PriceTable({ priceGroup }: Props) {
  return (
    <section>
      <Heading as="h3" size="md">{priceGroup.label}</Heading>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            {priceGroup.prices.map((price) => (
              <Tr key={`${priceGroup.label}-${price.label}`}>
                <Td>{price.label}</Td>
                <Td isNumeric>{price.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </section>
  );
}
