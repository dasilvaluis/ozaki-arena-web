import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
import {
  Box,
  ComponentWithAs,
  Flex,
  Heading,
  IconProps,
  List,
  ListIcon,
  ListItem,
  Text
} from '@chakra-ui/react';
import Image from 'next/image';
import { biResponsiveMd } from 'src/helpers/responsive';
import { WithChildren } from 'types';

type Props = Pick<IconProps, 'color'> & WithChildren & {
  as: ComponentWithAs<'svg', IconProps>;
}

function RuleItem({ as, color, children }: Props) {
  return (
    <ListItem>
      <ListIcon as={as} color={color} transform="translateY(-0.125rem)" />
      <span>{children}</span>
    </ListItem>
  );
}

export default function Rules() {
  return (
    <section>
      <Heading as="h3" size="xl" color="primary" mb="2rem">Reguli De Utilizare</Heading>

      <Flex direction={biResponsiveMd('column', 'row')} gap="2rem">
        <Box flex={1}>
          <Image width="1214" height="750" src="https://picsum.photos/seed/rules/1214/750/" alt="Rules Photo" />
        </Box>
        <Box flex={1}>
          <Text as="b">Ce trebuie sa ştii:</Text>
          <List spacing="1rem" mt="1rem" pl=".25rem">
            <RuleItem as={CheckCircleIcon} color="green.500">
              Check in la intrare
            </RuleItem>
            <RuleItem as={CheckCircleIcon} color="green.500">
              Copiii întotdeauna însoțiți de adulți
            </RuleItem>
            <RuleItem as={CheckCircleIcon} color="green.500">
              Utilizarea obligatorie a papuci de cățărat pe pereti
            </RuleItem>
            <RuleItem as={CheckCircleIcon} color="green.500">
              Oferă și cere ajutor altora
            </RuleItem>
            <RuleItem as={CheckCircleIcon} color="green.500">
              Așteptați-vă rândul pe trasee
            </RuleItem>
            <RuleItem as={CheckCircleIcon} color="green.500">
              Păstrați punga de cretă cu zona desemnată
            </RuleItem>
            <RuleItem as={WarningIcon} color="orange.500">
              Nu vă întindeți pe saltea
            </RuleItem>
            <RuleItem as={WarningIcon} color="orange.500">
              Nu merge desculț
            </RuleItem>
            <RuleItem as={WarningIcon} color="orange.500">
              Păstrează-ți tricoul pe tine
            </RuleItem>
            <RuleItem as={WarningIcon} color="orange.500">
              Menține mâncarea și băutura departe de saltea
            </RuleItem>
            <RuleItem as={WarningIcon} color="orange.500">
              Nu mergeți la toaletă cu papuci de cățărat
            </RuleItem>
          </List>
        </Box>
      </Flex>
    </section>
  );
}
