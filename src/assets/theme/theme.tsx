import { DefaultTheme } from 'styled-components';
import image2 from '../assets/bodaJorgeYNat.jpeg';

export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      black: '#3e3f7c',
      white: '#ffffff'
    },
    primary: {
      main: '#3e3f7c',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff'
    }
  },
  images:{
    main: {
      src: image2
    }
  }
}
