import { chakra, Grid, Stack } from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';
import Contact from './core/contact';
import Logo from './core/logo';
import Program from './core/program';
import Sitemap from './core/sitemap';

function Footer() {
  return (
    <chakra.footer padding="5rem 0 3rem" bgColor="primary" color="textOverPrimary">
      <ContentContainer margin="auto">
        <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between" gap="25px">
          <Logo />
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={{ base: '25px', lg: '75px' }}
          >
            <Sitemap />
            <Program />
            <Contact />
          </Grid>
        </Stack>
      </ContentContainer>
    </chakra.footer>
  );
}

export default Footer;
