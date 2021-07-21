import React, { useState } from 'react';
import styled from 'styled-components';
import firebaseConf from '../../Firebase';
import { useForm } from 'react-hook-form';

type FromProps = {
  submitted?: false;
};

interface formData {
  guest: boolean;
  guestName: string;
  mail: string;
  name: string;
}
const FormContainer = styled.form`
  margin: 1rem 3rem;
`;
const QuestionsContainer = styled.div`
  width: 100%;
  color: ${(props) => props.theme.palette.primary.main};
  text-align: center;
  transition: 2s;
`;

const TitleQuestion = styled.p`
  @media (min-width: 970px) {
    font-size: 2em;
  }
  @media (max-width: 500px) {
    font-size: 0.99em;
  }
  color: ${(props) => props.theme.palette.primary.main};
  text-align: center;
  width: 100%;
`;
const ErrorQuestion = styled.div`
  @media (min-width: 970px) {
    font-size: 1em;
  }
  @media (max-width: 500px) {
    font-size: 0.5em;
  }
  color: ${(props) => props.theme.palette.error.main};
  text-align: center;
`;
const QuestionsInput = styled.input`
  @media (min-width: 970px) {
    font-size: 2em;
  }
  @media (max-width: 500px) {
    font-size: 1em;
  }
  color: ${(props) => props.theme.palette.primary.main};
  text-align: center;
`;
const CheckBox = styled.input`
  color: ${(props) => props.theme.palette.common.white};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 3px;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: ${(props) => props.theme.palette.buttonSubmit.main};
  }
  background: ${(props) => props.theme.palette.primary.main};
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;
const ButtonSubmit = styled.input`
  color: ${(props) => props.theme.palette.common.white};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${(props) => props.theme.palette.primary.main};
  border-radius: 3px;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: ${(props) => props.theme.palette.buttonSubmit.main};
  }
  background: ${(props) => props.theme.palette.primary.main};
  cursor: pointer;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  margin-top: 5%;
`;

const ButtonFormSended = styled.div`
  @media (min-width: 970px) {
    font-size: 2em;
  }
  @media (max-width: 500px) {
    font-size: 0.99em;
  }
  color: ${(props) => props.theme.palette.primary.main};
  text-align: center;
  margin-top: 3%;
  margin-bottom: 3%;
  width: 100%;
`;
const Selector = styled.select`
  color: ${(props) => props.theme.palette.primary.main};
  text-align: center;
  margin-top: 3%;
  margin-bottom: 3%;
  width: 20%;
  border: 2px solid ${(props) => props.theme.palette.primary.main};    
  font-size: 1.5em;
`;
export const FormComponent = (FormProps?: FromProps) => {
  const [isFormSended, setDataFormSended] = useState(false);
  const [isFormSuccess, setDataFormSuccess] = useState(false);
  const [checkBoxGuestValue, setDataChange] = useState(false);
  const [checkBoxTransportValue, setTransportDataChange] = useState(false);
  const [mailValidity, setMailValidity] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: formData): void => {
    if (!getSetMailValidity(data.mail) || isFormSended) {
      console.error('no mail valid');
      return;
    }
    setDataFormSended(true);
    sendForm(data);
  };

  const sendForm = (data: formData): void => {
    firebaseConf
      .database()
      .ref('bodaclausanti')
      .push(data)
      .then((_) => {
        console.log('form ok');
        setDataFormSuccess(true);
      })
      .catch((err) => {
        // Si ha ocurrido un error, actualizamos nuestro estado para mostrar el error
        console.error('error al enviar el formulario');
        setDataFormSuccess(false);
      });
  };
  const getSetMailValidity = (mail: string): boolean => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidMail = re.test(String(mail).toLowerCase());
    setMailValidity(!isValidMail);
    return isValidMail;
  };

  const onchange = (data: any) => {
    setDataChange(data.target.checked);
  };
  const onchangeTransport = (data: any) => {
    setTransportDataChange(data.target.checked);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      {!isFormSuccess && (
        <QuestionsContainer>
          {/* register your input into the hook by invoking the "register" function */}
          <TitleQuestion>Nombre del asistente: </TitleQuestion>
          <QuestionsInput {...register('name', { required: true })} />
          {errors.name && <ErrorQuestion>Este campo es requerido</ErrorQuestion>}
        </QuestionsContainer>
      )}

      {!isFormSuccess && (
        <QuestionsContainer>
          {/* include validation with required or other standard HTML validation rules */}
          <TitleQuestion>Email del asistente: </TitleQuestion>
          <QuestionsInput {...register('mail', { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.mail && <ErrorQuestion>Este campo es requerido</ErrorQuestion>}
          {mailValidity && <ErrorQuestion>El Email tiene un formato incorrecto</ErrorQuestion>}
        </QuestionsContainer>
      )}

      {!isFormSuccess && (
        <QuestionsContainer>
          <TitleQuestion>¿Vienes con acompañante?</TitleQuestion>
          <CheckBox
            {...register('guest')}
            type='checkbox'
            onChange={(ev) => {
              onchange(ev);
            }}
          />
        </QuestionsContainer>
      )}

      {checkBoxGuestValue && !isFormSuccess && (
        <QuestionsContainer>
          {/* register your input into the hook by invoking the "register" function */}
          <TitleQuestion> Nombre del Acompañante: </TitleQuestion>
          <QuestionsInput {...register('guestName', { required: true })} />
          {errors.guestName && <ErrorQuestion> Este campo es requerido </ErrorQuestion>}
        </QuestionsContainer>
      )}

      {!isFormSuccess && (
        <QuestionsContainer>
          <TitleQuestion>¿Irás en los autobuses?</TitleQuestion>
          <CheckBox
            {...register('transport')}
            type='checkbox'
            onChange={(ev) => {
              onchangeTransport(ev);
            }}
          />
        </QuestionsContainer>
      )}
      {checkBoxTransportValue && !isFormSuccess && (
        <QuestionsContainer>
          {/* register your input into the hook by invoking the "register" function */}
          <TitleQuestion>¿Cuántos sois para el transporte?</TitleQuestion>
          <QuestionsInput type='number' min='1' max='5' {...register('transportNumber', { required: true })} />
          {errors.transportNumber && <ErrorQuestion>Este campo es requerido</ErrorQuestion>}
        </QuestionsContainer>
      )}
      {checkBoxTransportValue && !isFormSuccess && (
        <QuestionsContainer>
          {/* register your input into the hook by invoking the "register" function */}
          <TitleQuestion>¿Dónde te gustaría que te dejara el autobús de vuelta?</TitleQuestion>

          <Selector  {...register('guestName', { required: true })} {...register('stops', { required: true })}>
            <option value='rozas'>Las Rozas</option>
            <option value='madrid'>Madrid</option>
          </Selector>
          {errors.stops && <ErrorQuestion>Por favor selecciona una parada</ErrorQuestion>}
        </QuestionsContainer>
      )}

      {isFormSuccess ? (
        <ButtonFormSended>
          <h3>!Muchas gracias!</h3>
          <h3>El formulario ha sido enviado correctamente, nos vemos el 11 de Septiembre del 2021</h3>
        </ButtonFormSended>
      ) : (
        <ButtonSubmit type='submit' />
      )}
    </FormContainer>
  );
};
