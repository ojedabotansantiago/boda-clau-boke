import { DefaultTheme } from 'styled-components';
import image1 from '../assets/bodaJorgeYNat.jpeg';
import image2 from '../assets/clau.jpeg';
import image3 from '../assets/iglesiaA.jpg';
import image4 from '../assets/rugbyItaliaRisas.jpeg';
import image5 from '../assets/c_B.jpg';
import image6 from '../assets/trasnporte.jpg';
import image7 from '../assets/malasia_A.jpg';
export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: '#3e3f7c',
      white: '#ffffff',
    },
    primary: {
      main: '#3e3f7c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff',
    },
  },
  images: {
    main: {
      src: image1,
    },
    secondSection: {
      src: image2,
    },
    threeSection: {
      src: image3,
    },
    fourSection: {
      src: image4,
    },
    fiveSection: {
      src: image5,
    },
    sixSection: {
      src: image6,
    },
    sevenSection: {
      src: image7,
    },
  },
};
