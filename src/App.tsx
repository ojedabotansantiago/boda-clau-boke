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
      'La boda dará comienzo a las 12:15 de la mañana en la Iglesia San Jerónimo el Real de Madrid donde Después \
     de más de 9 añazo de noviazgo y un año de retraso podremos, al fin, celebrar este día inolvidable',
  };
  const sectionEntryChurch: SectionEntryProp = {
    titleSection: 'Iglesia',
    mainText: 'La boda dará comienzo a las 12:15 de la mañana en la Iglesa San Jerónimo el Real de Madrid',
    secondaryText: {
      isLink: true,
      text: 'Seleciona este enlace para obtener mas infomación de la dirección de la iglesia',
      src: 'https://goo.gl/maps/kKWJa9cm8y5hBJfF9',
    },
  };
  const sectionEntryPalace: SectionEntryProp = {
    titleSection: 'Banquete',
    mainText: 'la celebración será en la finca San Antonio (Carretera M-618, Km. 15, M-618, 28240 Hoyo de Manzanares, Madrid)',
    secondaryText: {
      isLink: true,
      text: 'Seleciona este enlace para obtener mas infomacion acerca de la fina San Antonio',
      src: 'https://goo.gl/maps/bmHfummf3WvNVRjY7',
    },
  };
  const sectionEntryTransportChurch: SectionEntryProp = {
    titleSection: 'Transporte iglesia - finca:',
    mainText: 'Para el desplazamiento de la iglesa a la finca se habilitarán autobuses que saldrán aproximadamente a las 13:45',
  };
  const sectionEntryTransportPalace: SectionEntryProp = {
    titleSection: 'Regreso a casa',
    mainText:
    'Para cerrar la celebración y este día tan especial, al finalizar la barra libre dispondréis de autobuses a las rozas de madrid \
     y hacia la calle Doctor Esquerdo cruce con Sainz de Baranda',
  };
  const sectionEntryCount: SectionEntryProp = {
    titleSection: '',
    mainText:
      'Aunque para nosotros lo más importante es que pases este día con nosotros, os dejamos nuestro número de cuenta por si queréis participar en esta nueva aventura que nos espera',
    secondaryText: {
      isLink: true,
      text: 'ES24-0073-0100-5005-9240-4249',
      src: 'ES24-0073-0100-5005-9240-4249',
    },
  };
  const sectionEntryForm: SectionEntryProp = {
    titleSection: 'Formulario de contacto',
    mainText:
      'Con el fin de agilizar los temas de transporte y asistencia os dejamos un formulario de contacto para que nos indiqueis vuestras preferencias',
    secondaryText: {
      isLink: true,
      text: 'ES24-0073-0100-5005-9240-4249',
      src: 'https://goo.gl/maps/bmHfummf3WvNVRjY7',
    },
  };
  const sectionCovidData: SectionEntryProp = {
    titleSection: '',
    mainText:
      'Confiamos en que pueda ser una boda normal y que el covid nos la estropee. Es por esto que os pedimos que confirméis lo antes posible y así poder organizarnos según la normativa vigente. \
      Cualquier duda que os surga os dejamos nuestro números de teléfono:',
      secondaryText: {
        isLink: true,
        text: 'Claudia 66174907 && Santiago: 699664861 ',
        src: '66174907',
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
        <SectionEntry
          titleSection={sectionCovidData.titleSection}
          mainText={sectionCovidData.mainText}
          secondaryText={sectionCovidData.secondaryText}
        ></SectionEntry>
      </div>
    </ThemeProvider>
  );
}

export default App;
