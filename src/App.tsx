import React from 'react';
import './App.scss';
import {Header} from "./components/header/header.component";
import { ThemeProvider } from 'styled-components';
import {defaultTheme} from "./assets/theme/theme";
import { PictureComponent } from './components/picture/picture.component';
function App() {
  const theme = defaultTheme;
  const title = 'Boda de Claudia & Santiago';
  const subtitle = 'Dia 11 de Septiembre de 2021 a las 11.00';
  const image1 = '';

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header title={title} subtitle={subtitle}></Header>
        <PictureComponent src={image1}></PictureComponent>
      </div>
    </ThemeProvider>
  );
}

export default App;
