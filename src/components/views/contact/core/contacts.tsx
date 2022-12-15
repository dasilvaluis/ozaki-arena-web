import {
  Box, Heading, Link, Stack, VStack
} from '@chakra-ui/react';
import ExternalLink from 'components/molecules/external-link';
import contact from 'settings/contact.json';

function Contacts() {
  return (
    <Box>
      <VStack as="address" gap="2rem" alignItems="left" fontStyle="initial">
        <Stack>
          <div>
            <Heading as="h6" color="primary" size="md">Adresă</Heading>
            {contact.address.entries.map((item) => <div key={item}>{item}</div>)}
            <ExternalLink href={contact.address.coordinates_link}>Google Maps</ExternalLink>
          </div>
          <div>
            <b>Email:</b>
            {' '}
            <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
            <br />
            <b>Tel:</b>
            {' '}
            <Link href={`tel:${contact.phone}`} size="md">{contact.phone}</Link>
          </div>
        </Stack>
        <div>
          <Heading as="h6" color="primary" size="md">Urmărește-ne</Heading>
          <div>
            {contact.social.entries.map(({ label, url }) => (
              <div key={url}>
                <ExternalLink href={url}>{label}</ExternalLink>
              </div>
            ))}
          </div>
        </div>
      </VStack>
    </Box>
  );
}

export default Contacts;
