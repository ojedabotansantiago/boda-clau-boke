import React from 'react';
import styled from 'styled-components';

type PictureProps = {
  src: string;
};

const Image = styled.img.attrs((props: any) => ({
  src: getImage(props),
}))`
  width: 50%;
`;

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 33%;
`;
export const PictureComponent = (pictureProps: PictureProps) => {
  console.log(pictureProps);

  return (
    <ImageContainer>
      <Image src={pictureProps.src}></Image>
    </ImageContainer>
  );
};

const getImage = (prop: any): any => {
  console.log(prop);
  let urlImage;
  if (prop.src === '1section') {
    urlImage = prop.theme.images.main.src;
  }
  if (prop.src === '2section') {
    urlImage = prop.theme.images.secondSection.src;
  }
  if (prop.src === '3section') {
    urlImage = prop.theme.images.threeSection.src;
  }
  if (prop.src === '4section') {
    urlImage = prop.theme.images.fourSection.src;
  }
  if (prop.src === '5section') {
    urlImage = prop.theme.images.fiveSection.src;
  }
  if (prop.src === '6section') {
    urlImage = prop.theme.images.sixSection.src;
  }
  if (prop.src === '7section') {
    urlImage = prop.theme.images.sevenSection.src;
  }
  return urlImage;
};
