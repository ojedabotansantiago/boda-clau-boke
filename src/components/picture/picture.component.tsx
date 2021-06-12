import React from 'react';
import styled from 'styled-components';

type PictureProps = {
  src: string;
};

const Image = styled.img.attrs((props: any) => ({
  src: props.theme.images.main.src,
}))`
  width: 62%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 20%;
`;
export const PictureComponent = (HeaderProps: PictureProps) => {
  return (
    <ImageContainer>
      <Image></Image>
    </ImageContainer>
  );
};
