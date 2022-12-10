import {
  Table, TableContainer, Tbody, Td, Tr
} from '@chakra-ui/react';

type Props = {
  columns: {
    label: string;
    value: string;
  }[];
}

export default function TwoColumnTable({ columns }: Props) {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="blackAlpha">
        <Tbody>
          {columns.map((row) => (
            <Tr key={`${row.label}-${row.value}`}>
              <Td>{row.label}</Td>
              <Td isNumeric>{row.value}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
