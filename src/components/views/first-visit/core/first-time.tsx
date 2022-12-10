import {
  Box, Flex, Heading, ListItem, Spacer, Text, UnorderedList
} from '@chakra-ui/react';
import ContentBox from 'components/molecules/content-box';
import Image from 'next/image';
import { biResponsiveLg } from 'src/helpers/responsive';

export default function FirstTime() {
  return (
    <section>
      <Heading as="h3" size="xl" color="primary" mb="2rem">Prima dată la Ozaki</Heading>
      <Flex gap="2rem" direction={biResponsiveLg('column', 'row')}>
        <Box flex={1}>
          <Text>
            Ești un alpinist începător în căutarea unui loc sigur și de sprijin
            pentru a învăța frânghiile? Nu căuta mai departe decât
            {' '}
            <b>Ozaki Arena</b>
            !
          </Text>
          <Text>
            Sala noastră de cățărat este o modalitate excelentă de a începe sportul,
            unde veți avea tot sprijinul și îndrumarea de care aveți nevoie
            pentru a debarca de la sol.
          </Text>
          <Text>
            Personalul nostru experimentat vă va oferi sfaturi și sfaturi de
            siguranță de care aveți nevoie pentru a vă simți încrezător pe
            măsură ce învățați să urci. Înscrie-te astăzi și profită de oferta
            noastră specială pentru începători!
          </Text>
          <Spacer my="2rem" />
          <ContentBox bgColor="secondary">
            <Box fontSize="1.25rem">
              <Text as="b">Pachet pentru începători: </Text>
              <UnorderedList>
                <ListItem>Abonament de 3 luni</ListItem>
                <ListItem>Închiriere gratuită de echipamente</ListItem>
                <ListItem>1 sesiune de instruire pe săptămână</ListItem>
              </UnorderedList>
            </Box>
          </ContentBox>
        </Box>
        <Box flex={1}>
          <Image width="1214" height="750" src="https://picsum.photos/seed/first-day/1214/750/" alt="Introduction Photo" />
        </Box>
      </Flex>
    </section>
  );
}
