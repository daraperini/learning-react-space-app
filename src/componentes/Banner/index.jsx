import styled from "styled-components";

const FigureEstilizada = styled.figure`
  margin: 0;
  display: flex;
  flex-grow: 1;
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 100%;
  min-height: 328px;
  border-radius: 20px;
  @media (max-width: 744px) {
    max-width: 426px;
    position: relative;
    left: 40%;
    background-position: center;
  }
  @media (max-width: 360px) {
    left: 0;
    max-width: 100%;
    min-height: 140px;
  }
`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  padding: 0 64px;
  max-width: 300px;
  align-self: center;
  @media (max-width: 744px) {
    font-size: 32px;
    padding: 0 24px;
    max-width: 266px;
    @media (max-width: 360px) {
    display: none;
  }
  }
`;

const Banner = ({ texto, backgroundImage }) => {
  return (
    <FigureEstilizada $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizada>
  );
};

export default Banner;
