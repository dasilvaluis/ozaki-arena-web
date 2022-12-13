import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { WithChildren } from './types';

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        mb: 2,
        textTransform: 'uppercase'
      }
    },
    Button: {
      baseStyle: {
        textTransform: 'uppercase'
      }
    },
    Text: {
      baseStyle: {
        mb: 2
      }
    }
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Source Sans Pro', sans-serif"
  },
  colors: {
    burntOrange: {
      50: '#FFF0E5',
      100: '#FFBB8A',
      200: '#FFA05C',
      300: '#FF852E',
      400: '#FF6B00',
      500: '#CC5500',
      600: '#994000',
      700: '#662B00',
      800: '#4D2000',
      900: '#331500'
    }
  },
  semanticTokens: {
    colors: {
      primary: 'burntOrange.500',
      secondary: 'gray.800',
      secondaryContrast: 'gray.200',
      text: {
        default: 'gray.200',
        _dark: 'gray.50'
      }
    }
  }
});

export default function ThemeProvider({ children }: WithChildren) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}
