import React from 'react';
import styled from 'styled-components';
type HeaderProps = {
  title: string;
  subtitle: string;
};

const Title = styled.h1`
  @media (min-width: 970px) {
    font-size: 5em;
  }
  @media (max-width: 500px) {
    font-size: 1em;
  }
  text-align: center;
  color: ${(props) => props.theme.palette.primary.main};
`;
const Subtitle = styled.p`
  @media (min-width: 970px) {
    font-size: 3em;
  }
  @media (max-width: 500px) {
    font-size: 1em;
  }
  text-align: center;
  color: ${(props) => props.theme.palette.primary.main};
`;

const HeaderContainer = styled.header`
  padding: 2em 1em 1em 1em;
  background: white;
`;

export const Header = (HeaderProps: HeaderProps) => {
  console.log(HeaderProps);
  return (
    <HeaderContainer>
      <Title>{HeaderProps.title}</Title>
      <Subtitle>{HeaderProps.subtitle}</Subtitle>
    </HeaderContainer>
  );
};
