import { Link } from '@chakra-ui/react';

function Contact() {
  return (
    <>
      <h6><b>Contact</b></h6>
      Str. Ștefan cel Mare 154, Sibiu
      <br />
      Clădire Independența
      <br />
      Email:
      {' '}
      <Link href="mailto:info@ozakiarena.ro" color="brand.secondary">info@ozakiarena.ro</Link>
      <br />
      Tel:
      {' '}
      <Link href="tel:+40 666 999 955" color="brand.secondary">+40 666 999 955</Link>
    </>
  );
}

export default Contact;
