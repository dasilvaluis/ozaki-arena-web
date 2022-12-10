import {
  Flex, Grid, GridItem, ListItem, Text, UnorderedList
} from '@chakra-ui/react';
import ContentBox from 'components/molecules/content-box';
import Image from 'next/image';
import { biResponsiveLg } from 'src/helpers/responsive';

export default function Intro() {
  return (
    <section>
      <Flex gap="2rem" direction={biResponsiveLg('column', 'row')}>
        <Grid
          fontSize="1.25rem"
          gap="1.75rem"
          templateColumns="repeat(3, 1fr)"
          templateAreas={{
            base: `
              't1 t1 t1'
              't2 t2 t2'
              'i1 i1 i1'
              't3 t3 t3'
              't4 t4 t4'
              'i2 i2 i2'
            `,
            md: `
              't1 t1 i1'
              't2 t2 i1'
              'i2 t3 t3'
              'i2 t4 t4'
            `
          }}
        >
          <GridItem gridArea="t1">
            <ContentBox bgColor="secondary">
              <Text>
                Alpinismul este o activitate distractivă și interesantă, sigură,
                incluzivă și accesibilă pentru oameni de toate vârstele și abilitățile.
              </Text>

              <Text>
                Cu alpinism, oamenii caută să:
              </Text>

              <UnorderedList>
                <ListItem>Îmbunătățirea sănătății fizice și psihice</ListItem>
                <ListItem>Sporește încrederea</ListItem>
                <ListItem>Câștiga echilibru și putere</ListItem>
                <ListItem>Construiți relații</ListItem>
              </UnorderedList>
            </ContentBox>
          </GridItem>
          <GridItem gridArea="t2">
            <ContentBox bgColor="primary">
              <Text>
                Siguranța este întotdeauna o prioritate în alpinism.
                Cu echipamentul potrivit, un mediu sigur și instrucțiuni de specialitate,
                vă puteți bucura de activitate fără să vă faceți griji cu privire la răni.
              </Text>
              <Text>
                La
                {' '}
                <b>Ozaki Arena</b>
                {' '}
                suntem capabili să oferim îndrumări cu privire la siguranță
                și tehnică pentru a asigura o experiență grozavă.
              </Text>
            </ContentBox>
          </GridItem>
          <GridItem gridArea="t3">
            <ContentBox bgColor="secondary">
              <Text>
                Cu alpinism poți construi puterea fizică și încrederea mentală,
                deoarece fiecare urcare reușită, poți construi echilibru și
                încredere pe măsură ce te provoci.
              </Text>
              <Text>
                Pe langa asta, este un spatiu in care intalnesti alti oameni si lucrezi
                impreuna pentru a &quot;rezolva&quot; provocarile de alpinism.
              </Text>
            </ContentBox>
          </GridItem>
          <GridItem gridArea="t4">
            <ContentBox bgColor="primary">
              <Text>
                În sala
                {' '}
                <b>Ozaki Arena</b>
                {' '}
                veți găsi o combinație grozavă de trasee pentru
                fiecare nivel de abilitate și vârstă pentru tine, prietenii și familia ta!
              </Text>
              <Text>
                Dacă crezi că este ceva ce îți dorești în viața ta, vino și alătură-te
                comunității Ozaki astăzi!
              </Text>
            </ContentBox>
          </GridItem>
          <GridItem gridArea="i1" position="relative" minHeight="20rem">
            <Image
              fill
              src="https://picsum.photos/seed/firsttime-1/1724/2000"
              alt="Introduction Photo"
              style={{
                objectFit: 'cover'
              }}
            />
          </GridItem>
          <GridItem gridArea="i2" position="relative" minHeight="20rem">
            <Image
              fill
              src="https://picsum.photos/seed/firsttime-2/1724/2000"
              alt="Introduction Photo"
              style={{
                objectFit: 'fill'
              }}
            />
          </GridItem>
        </Grid>
      </Flex>
    </section>
  );
}
