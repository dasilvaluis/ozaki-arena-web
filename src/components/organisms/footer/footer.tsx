import {
  Box, GridItem, SimpleGrid,
} from '@chakra-ui/react';
import ContentContainer from '../../atoms/content-container';
import Contact from './core/contact';
import Program from './core/program';
import Sitemap from './core/sitemap';

function Footer() {
  return (
    <Box as="footer" bg="brand.primary" padding="2rem 0">
      <ContentContainer maxW="750px" margin="auto">
        <SimpleGrid columns={{ base: 2, md: 3, lg: 3 }} gap="25px">
          <GridItem width="100%">
            <Sitemap />
          </GridItem>
          <GridItem width="100%">
            <Program />
          </GridItem>
          <GridItem width="100%">
            <Contact />
          </GridItem>
        </SimpleGrid>
      </ContentContainer>
    </Box>
  );
}

export default Footer;
