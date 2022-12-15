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
    },
    exoticGreen: {
      50: '#FAFAEA',
      100: '#F2F0C5',
      200: '#E9E79F',
      300: '#E1DD7A',
      400: '#D9D354',
      500: '#D0CA2F',
      600: '#A7A225',
      700: '#7D791C',
      800: '#535113',
      900: '#2A2809'
    },
    yellowGreen: {
      50: '#F5FAEB',
      100: '#E3F1C6',
      200: '#D1E8A1',
      300: '#BEDF7C',
      400: '#ACD657',
      500: '#9ACD32',
      600: '#7BA428',
      700: '#5C7B1E',
      800: '#3E5214',
      900: '#1F290A'
    }
  },
  semanticTokens: {
    colors: {
      primary: 'yellowGreen.500',
      secondary: 'gray.900',
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
