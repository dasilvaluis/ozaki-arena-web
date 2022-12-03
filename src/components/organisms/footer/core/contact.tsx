import { Link } from '@chakra-ui/react';
import contact from 'settings/contact.json';

function Contact() {
  return (
    <>
      <h6><b>Contact</b></h6>
      {contact.address.entries.map((item) => <div key={item}>{item}</div>)}
      <div>
        Email:
        {' '}
        <Link href={`mailto:${contact.email}`} color="brand.secondary">{contact.email}</Link>
      </div>
      <div>
        Tel:
        {' '}
        <Link href={`tel:${contact.phone}`} color="brand.secondary">{contact.phone}</Link>
      </div>
    </>
  );
}

export default Contact;
