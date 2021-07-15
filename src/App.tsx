import React from 'react';
import './App.scss';
import { Header } from './components/header/header.component';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './assets/theme/theme';
import { PictureComponent } from './components/picture/picture.component';
import { SectionEntry } from './components/textEntry/section.component';
import { FormComponent } from './components/form/form.component';

function App() {
  type SectionEntryProp = {
    titleSection: any;
    mainText: any;
    secondaryText?: {
      isLink: boolean;
      src: string | undefined;
      text?: string;
    };
  };
  const theme = defaultTheme;
  const title = 'Claudia & Santiago';
  const subtitle = 'Dia 11 de Septiembre de 2021 a las 11.00';

  const imageFirstSection = '1section';
  const imageSecondSection = '2section';
  const imageThreeSection = '3section';
  const imageFourSection = '4section';
  const imageFiveSection = '5section';
  const imageSixSection = '6section';
  const imageSevenSection = '7section';

  const sectionEntryGeneral: SectionEntryProp = {
    titleSection: 'Informacion',
    mainText:
      'La boda dara comienzo el proximo 11 de Septiembre del 2021 a las 11.45 en la iglesa San Jerónimo el Real de Madrid donde despues \
     de mas de 9 añazo de noviazgo y un año de retraso en la boda podremos al fin celebrar la en este inolvidable dia.',
  };
  const sectionEntryChurch: SectionEntryProp = {
    titleSection: 'Iglesia',
    mainText: 'La boda sera el proximo dia 11 de Septiembre del 2021 a las 11.45 en la Iglesa San Jerónimo el Real de Madrid',
    secondaryText: {
      isLink: true,
      text: 'Seleciona este enlace para obtener mas infomación de la dirección de la iglesia',
      src: 'https://goo.gl/maps/kKWJa9cm8y5hBJfF9',
    },
  };
  const sectionEntryPalace: SectionEntryProp = {
    titleSection: 'Banquete',
    mainText: 'La clebracion de la boda sera en en la finca San Antonio (Carretera M-618, Km. 15, M-618, 28240 Hoyo de Manzanares, Madrid)',
    secondaryText: {
      isLink: true,
      text: 'Seleciona este enlace para obtener mas infomacion acerca de la fina San Antonio',
      src: 'https://goo.gl/maps/bmHfummf3WvNVRjY7',
    },
  };
  const sectionEntryTransportChurch: SectionEntryProp = {
    titleSection: 'Trasporte iglesa direccion finca',
    mainText: 'Para el desplazamiento de la iglesa a la finca se habilitara un bus que saldra 15 minutos de que acabe la celebracion en la iglesia',
  };
  const sectionEntryTransportPalace: SectionEntryProp = {
    titleSection: 'Regreso a casa',
    mainText:
      'Para cerrar la celebracion y este dia especial, al finalizar la barra libre, se habilitaran autobuses con direccion a las Rozas de Madrid \
     y hacia la calle Doctor Esquerdo cruce con Sainz de Baranda',
  };
  const sectionEntryCount: SectionEntryProp = {
    titleSection: '',
    mainText:
      'Aunque para nosotros lo mas importante es tu presencia, dejamps nuestro numero de cuenta a vuestra disposicion por si queres hacer una colavoracion\
     para esta nueva etapa que empezamos juntos',
    secondaryText: {
      isLink: true,
      text: 'ES24-0073-0100-5005-9240-4249',
      src: 'ES24-0073-0100-5005-9240-4249',
    },
  };
  const sectionEntryForm: SectionEntryProp = {
    titleSection: 'Formulario de contacto',
    mainText:
      'Con el fin agilizar los temas de trasporte y asistencia os dejamos un formulario de contacto para que nos indiqueis vuestras preferencias',
    secondaryText: {
      isLink: true,
      text: 'ES24-0073-0100-5005-9240-4249',
      src: 'https://goo.gl/maps/bmHfummf3WvNVRjY7',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header title={title} subtitle={subtitle}></Header>
        <PictureComponent src={imageFirstSection}></PictureComponent>
        <SectionEntry titleSection={sectionEntryGeneral.titleSection} mainText={sectionEntryGeneral.mainText}></SectionEntry>
        <PictureComponent src={imageSecondSection}></PictureComponent>
        <SectionEntry
          titleSection={sectionEntryChurch.titleSection}
          mainText={sectionEntryChurch.mainText}
          secondaryText={sectionEntryChurch.secondaryText}
        ></SectionEntry>
        <PictureComponent src={imageThreeSection}></PictureComponent>
        <SectionEntry
          titleSection={sectionEntryPalace.titleSection}
          mainText={sectionEntryPalace.mainText}
          secondaryText={sectionEntryPalace.secondaryText}
        ></SectionEntry>
        <PictureComponent src={imageFourSection}></PictureComponent>
        <SectionEntry titleSection={sectionEntryTransportChurch.titleSection} mainText={sectionEntryTransportChurch.mainText}></SectionEntry>
        <PictureComponent src={imageFiveSection}></PictureComponent>
        <SectionEntry titleSection={sectionEntryTransportPalace.titleSection} mainText={sectionEntryTransportPalace.mainText}></SectionEntry>
        <PictureComponent src={imageSixSection}></PictureComponent>
        <SectionEntry
          titleSection={sectionEntryCount.titleSection}
          mainText={sectionEntryCount.mainText}
          secondaryText={sectionEntryCount.secondaryText}
        ></SectionEntry>
        <PictureComponent src={imageSevenSection}></PictureComponent>
        <SectionEntry
          titleSection={sectionEntryForm.titleSection}
          mainText={sectionEntryForm.mainText}
        ></SectionEntry>
        <FormComponent></FormComponent>

      </div>
    </ThemeProvider>
  );
}

export default App;
