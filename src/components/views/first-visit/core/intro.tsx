import {
  Flex, Grid, GridItem, Heading, ListItem, Text, UnorderedList
} from '@chakra-ui/react';
import TextCard from 'components/molecules/text-card';
import textCardConstants from 'constants/text-card';
import Image from 'next/image';
import { biResponsiveLg } from 'src/helpers/responsive';

export default function Intro() {
  return (
    <section>
      <Heading as="h3" size="xl" color="secondary" pl={textCardConstants.padding} mb="2rem">Ești interesat de cățărat?</Heading>
      <Flex gap="2rem" direction={biResponsiveLg('column', 'row')}>
        <Grid
          gap="1.75rem"
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)'
          }}
          templateAreas={{
            base: `
              't1'
              't2'
              'i1'
              't3'
              't4'
              'i2'
            `,
            md: `
              't1 i1'
              't2 i1'
              'i2 t3'
              'i2 t4'
            `
          }}
        >
          <GridItem gridArea="t1">
            <TextCard variant="secondary">
              <Text>
                Cățărarea este o activitate distractivă și interesantă, sigură,
                incluzivă și accesibilă pentru persoane de toate vârstele și abilitățile.
              </Text>

              <Text>
                Prin cățărat, oamenii caută să:
              </Text>

              <UnorderedList>
                <ListItem>Își imbunătățească sănătatea fizica și psihică</ListItem>
                <ListItem>Își sporească încrederea</ListItem>
                <ListItem>Câștige echilibru și putere</ListItem>
                <ListItem>Construiască relații</ListItem>
              </UnorderedList>
            </TextCard>
          </GridItem>
          <GridItem gridArea="t2">
            <TextCard variant="primary">
              <Text>
                Odată cu cățărarea, vei experimenta un impact pozitiv la nivel
                {' '}
                <b>fizic, mental, emoțional și social</b>
                .
              </Text>
              <Text>
                Pe măsură ce te provoci în fiecare sesiune,
                îți vei dezvolta echilibrul, puterea, concentrarea și curajul.
                Oferă un
                {' '}
                <b>sentiment de realizare</b>
                , promovează
                {' '}
                <b>încrederea</b>
                {' '}
                în sine și
                {' '}
                <b>reduce stresul</b>
                .
              </Text>
            </TextCard>
          </GridItem>
          <GridItem gridArea="t3">
            <TextCard variant="secondary">
              <Text>
                Siguranța este întotdeauna o prioritate în cățărat.
              </Text>
              <Text>
                Într-un mediu sigur, folosind echipamentul potrivit și
                primind instrucțiuni de specialitate,
                vă puteți bucura pe deplin de această activitate.
              </Text>
              <Text>
                La
                {' '}
                <b>Ozaki Arena</b>
                {' '}
                suntem capabili să oferim îndrumări complete începătorilor,
                astfel încât să ne asigurăm că aveți o experiență grozavă.
              </Text>
            </TextCard>
          </GridItem>
          <GridItem gridArea="t4">
            <TextCard variant="primary">
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
                comunității noastre astăzi!
              </Text>
            </TextCard>
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
