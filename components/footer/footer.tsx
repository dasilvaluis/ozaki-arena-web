import {
  Box, GridItem, SimpleGrid,
} from '@chakra-ui/react';
import ContentContainer from '../atoms/content-container';
import Contact from './core/contact';
import Program from './core/program';
import Sitemap from './core/sitemap';
import styles from './footer.module.scss';

function Footer() {
  return (
    <Box bg="brand.primary">
      <footer className={styles.footer}>
        <ContentContainer maxW="750px">
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
      </footer>
    </Box>
  );
}

export default Footer;
