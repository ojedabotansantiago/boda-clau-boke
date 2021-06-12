import React from 'react';
import styled from 'styled-components';

type SectionEntryProp = {
  titleSection: string;
  mainText: string;
  secondaryText: string;
};
const SectionContainer = styled.div`
  margin: 1rem 3rem;
  border-top: 3px double ${(props) => props.theme.palette.primary.main};
`;
const TitleSection = styled.p`
  @media (min-width: 970px) {
    font-size: 5em;
  }
  @media (max-width: 500px) {
    font-size: 1em;
  }
  margin: 1rem 1rem;

  text-align: center;
  color: ${(props) => props.theme.palette.primary.main};
`;
const MainText = styled.p`
  @media (min-width: 970px) {
    font-size: 3em;
  }
  @media (max-width: 500px) {
    font-size: 1em;
  }
  color: ${(props) => props.theme.palette.primary.main};
  text-align: center;

`;

const SecondaryText = styled.span`
  color: ${(props) => props.theme.palette.primary.main};
  text-align: center;

`;

export const SectionEntry = (sectionEntryProp: SectionEntryProp) => {
  console.log(sectionEntryProp);
  return (
    <SectionContainer>
      <TitleSection>{sectionEntryProp.titleSection}</TitleSection>
      <MainText>{sectionEntryProp.mainText}</MainText>
      <SecondaryText>{sectionEntryProp.secondaryText}</SecondaryText>
    </SectionContainer>
  );
};
