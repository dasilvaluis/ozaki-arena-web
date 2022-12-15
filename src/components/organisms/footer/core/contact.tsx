import { Link, VStack } from '@chakra-ui/react';
import contact from 'settings/contact.json';
import ExternalLink from 'components/molecules/external-link';

function Contact() {
  return (
    <div>
      <h6><b>Contact</b></h6>
      <VStack as="address" gap="0.75rem" alignItems="left" fontStyle="initial">
        <div>
          {contact.address.entries.map((item) => <div key={item}>{item}</div>)}
          <ExternalLink href={contact.address.coordinates_link}>Google Maps</ExternalLink>
        </div>
        <div>
          Email:
          {' '}
          <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
          <br />
          Tel:
          {' '}
          <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
        </div>
        <div>
          {contact.social.entries.map(({ label, url }) => (
            <div key={url}>
              <ExternalLink href={url}>{label}</ExternalLink>
            </div>
          ))}
        </div>
      </VStack>
    </div>
  );
}

export default Contact;
