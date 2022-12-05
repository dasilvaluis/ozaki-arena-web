import { Box, Stack, chakra } from '@chakra-ui/react';
import ContentContainer from '../../atoms/content-container';
import BoxedImage from '../../molecules/boxed-image';
import Contact from './core/contact';
import Program from './core/program';
import Sitemap from './core/sitemap';

function Footer() {
  return (
    <chakra.footer padding="2rem 0" bgColor="brand.primary" color="brand.secondary">
      <ContentContainer margin="auto">
        <Stack justifyContent="space-between" direction={{ base: 'column', md: 'row' }} spacing="50px">
          <BoxedImage width="100px" src="/brand-logo.png" alt="Brand Logo" objectFit="contain" />
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: '25px', sm: '40px', md: '70px' }}>
            <Box>
              <Sitemap />
            </Box>
            <Box>
              <Program />
            </Box>
            <Box>
              <Contact />
            </Box>
          </Stack>
        </Stack>
      </ContentContainer>
    </chakra.footer>
  );
}

export default Footer;
