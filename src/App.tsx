import React from 'react';
import './App.scss';
import {Header} from "./components/header/header.component";
import { ThemeProvider } from 'styled-components';
import {defaultTheme} from "./assets/theme/theme";
import { PictureComponent } from './components/picture/picture.component';
import { SectionEntry } from './components/textEntry/section.component';
function App() {
  const theme = defaultTheme;
  const title = 'Boda de Claudia & Santiago';
  const subtitle = 'Dia 11 de Septiembre de 2021 a las 11.00';
  const image1 = '';
  const sectionEntryHourAndDate= {
    titleSection: 'Fecha y Hora',
    mainText: 'mainText',
    secondaryText: 'secondaryText'
  }
  const sectionEntryChurch = {
    titleSection: 'Informacion',
    mainText: 'El evento dara comienzo el proximo 11 de Septiembre del 2021 a las 11.45 en la iglesa San Jerónimo el Real de Madrid donde despues \
     de mas de 9 añazo de noviazgo y un año de retraso en la boda podremos al fin celebrar la Boda en este inolvidable dia.',
    secondaryText: 'secondaryText'
  }
  const sectionEntryParcel = {
    titleSection: 'Fecha y Hora',
    mainText: 'mainText',
    secondaryText: 'secondaryText'
  }
  const sectionMobility = {
    titleSection: 'Fecha y Hora',
    mainText: 'mainText',
    secondaryText: 'secondaryText'
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header title={title} subtitle={subtitle}></Header>
        <PictureComponent src={image1}></PictureComponent>
        <SectionEntry titleSection= {sectionEntryChurch.titleSection} mainText= {sectionEntryChurch.mainText} secondaryText= {sectionEntryChurch.secondaryText}></SectionEntry>
      </div>
    </ThemeProvider>
  );
}

export default App;
