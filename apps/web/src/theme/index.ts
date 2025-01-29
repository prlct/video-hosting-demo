import {
  Arvo,
  Instrument_Sans, Inter, Merriweather, Modak, Montserrat
} from 'next/font/google';
import { createTheme, CSSVariablesResolver, DEFAULT_THEME } from '@mantine/core';

import * as components from './components';

const arvo = Arvo({ weight: '400', subsets: ['latin'] });
const modak = Modak({ weight: '400', subsets: ['latin'] });
const instrumentSans = Instrument_Sans({ weight: ['500', '600'], subsets: ['latin'] });
const merriweather = Merriweather({ weight: '400', subsets: ['latin'] });
const montserrat = Montserrat({ weight: '800', subsets: ['latin'] });

const theme = createTheme({
  fontFamily: instrumentSans.style.fontFamily,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: `${modak.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
    fontWeight: '600',
  },
  white: '#ffffff',
  black: '#070707',

  colors: {
    body: [
      '#070707',
      '#ffffff',
      // Add other colors
      '#1A1A1A',
      '#1B1B1B',
      '#090814',
      '#090814',
      '#090814',
      '#090814',
      '#090814',
      '#090814',
    ],
    dark: [
      '#070707',
      '#1c1d21',
      '#090814',
      '#1A1A1A',
      '#1B1B1B',
      // Add other colors
      '#090814',
      '#090814',
      '#090814',
      '#090814',
      '#090814',
      '#090814',
    ],
    gray: [
      '#302F32',
      '#A3A3A3',
      '#D5D4D4',
      '#F5F3F1',
      '#525252',
      '#D9D9D9',
      '#F0F0F0',
      '#5C5E69',
      '#E8E2DB',
      '#E5E5E5',
      '#5C5E69',
    ],
    orange: [
      '#F9742A',
      '#FFA37199',
      '#F9742A1F',
      '#FFFAF5',
      // Add other colors
      '#F9742A',
      '#F9742A',
      '#F9742A',
      '#F9742A',
      '#F9742A',
      '#F9742A',
      '#F9742A',
      '#F9742A',
      '#F9742A',
    ],
    red: [
      '#F03E3E',
      '#F35D5E1F',
      // Add other colors
      '#F03E3E',
      '#F03E3E',
      '#F03E3E',
      '#F03E3E',
      '#F03E3E',
      '#F03E3E',
      '#F03E3E',
      '#F03E3E',
      '#F03E3E',
      '#F03E3E',
    ],
    green: [
      '#0CAB38',
      '#0CAB381F',
      // Add other colors
      '#0CAB38',
      '#0CAB38',
      '#0CAB38',
      '#0CAB38',
      '#0CAB38',
      '#0CAB38',
      '#0CAB38',
      '#0CAB38',
      '#0CAB38',
    ],
    blue: [
      '#315BF1',
      '#2A7DF91F',
      '#2A7DF9',
      // Add other colors
      '#315BF1',
      '#315BF1',
      '#315BF1',
      '#315BF1',
      '#315BF1',
      '#315BF1',
      '#315BF1',
      '#315BF1',
      '#315BF1',
    ],
    yellow: [
      '#F59F00',
      // Add other colors
      '#F59F00',
      '#F59F00',
      '#F59F00',
      '#F59F00',
      '#F59F00',
      '#F59F00',
      '#F59F00',
      '#F59F00',
      '#F59F00',
    ],
    violet: [
      "#BB87FF",
      "#e5cfff",
      "#c79cff",
      "#a765fe",
      "#8d37fd",
      "#7c1bfd",
      "#740cfe",
      "#6200e3",
      "#5700cb",
      "#4a00b3"
    ]
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
  },
  lineHeights: {
    xs: '12px',
    sm: '17px',
    md: '19px',
    lg: '21px',
    xl: '24px',
    '2xl': '28px',
  },
  primaryColor: 'dark',
  components,
});

const resolver: CSSVariablesResolver = (t) => ({
  variables: {
    '--mantine-font-family-modak': modak.style.fontFamily,
    '--mantine-font-family-merriweather': merriweather.style.fontFamily,
    '--mantine-font-family-montserrat': montserrat.style.fontFamily,
    '--mantine-font-family-instrumentSans': instrumentSans.style.fontFamily,
    '--mantine-font-family-arvo': arvo.style.fontFamily,
    '--mantine-color-violet-text': t.colors.violet[0],
  },
  light: {
    '--mantine-color-body': t.colors.body[1],
    '--mantine-color-text': t.black,
  },
  dark: {
    '--mantine-color-body': t.colors.body[0],
    '--mantine-color-text': t.white,
    '--mantine-primary-color-filled': t.colors.violet[0],
    '--pagination-active-color': t.black
  },
});

export { resolver, theme };
