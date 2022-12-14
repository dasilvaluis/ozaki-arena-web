import { chakra, Grid, Stack } from '@chakra-ui/react';
import ContentContainer from 'components/atoms/content-container';
import Contact from './core/contact';
import Logo from './core/logo';
import Program from './core/program';
import Sitemap from './core/sitemap';

function Footer() {
  return (
    <chakra.footer padding="5rem 0 3rem" bgColor="secondary" color="secondaryContrast">
      <ContentContainer margin="auto">
        <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between" gap="1.5rem">
          <Logo />
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
            gap={{ base: '1.5rem', lg: '4.75rem' }}
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
